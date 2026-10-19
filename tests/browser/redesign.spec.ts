import { test, expect } from "@playwright/test";
const base = process.env.PLAYWRIGHT_BASE_PATH || "";
test("project slider advances and supports keyboard navigation", async ({
  page,
}) => {
  await page.goto(`${base}/en/`);
  await expect(page.locator(".loading-screen")).toHaveCount(0, {
    timeout: 12000,
  });
  const next = page.getByRole("button", { name: "Next project" });
  await next.click();
  await expect(page.locator(".slide-counter")).toContainText("02");
  await page.locator(".project-slider").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(".slide-counter")).toContainText("03");
});
test("Persian name and ascending development years", async ({ page }) => {
  await page.goto(`${base}/fa/`);
  await expect(page.locator("#project-shahdaei h3")).toHaveText("شهدایی");
  await expect(page.locator(".timeline time")).toHaveText([
    "2023",
    "2024",
    "2025",
    "2026",
  ]);
});
test("site stays usable without WebGL", async ({ page }) => {
  await page.addInitScript(() => {
    HTMLCanvasElement.prototype.getContext = (() =>
      null) as typeof HTMLCanvasElement.prototype.getContext;
  });
  await page.goto(`${base}/en/`);
  await expect(page.locator(".loading-screen")).toHaveCount(0, {
    timeout: 12000,
  });
  await expect(page.locator(".scene-fallback")).toBeVisible();
  await page.getByRole("link", { name: "Explore my work" }).click();
  await expect(page).toHaveURL(/#work$/);
});

for (const locale of ["en", "fa"]) {
  for (const width of [390, 1024, 1440]) {
    test(`3D stays within viewport after resize: ${locale} at ${width}px`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/${locale}/`);
      const host = page.locator(".scene-host");
      await expect(host).toHaveAttribute("data-ready", "true", {
        timeout: 15000,
      });
      await expect(page.locator(".loading-screen")).toHaveCount(0);
      await expect(host.locator("canvas")).toBeVisible();
      for (const viewportWidth of [width, width - 30, width]) {
        await page.setViewportSize({ width: viewportWidth, height: 900 });
        await expect
          .poll(() =>
            page.evaluate(() => {
              const scene = document
                .querySelector(".scene-host")!
                .getBoundingClientRect();
              const canvas = document
                .querySelector(".scene-host canvas")!
                .getBoundingClientRect();
              return (
                document.documentElement.scrollWidth <= innerWidth &&
                scene.left >= 0 &&
                scene.right <= innerWidth &&
                canvas.width > 100 &&
                Math.abs(canvas.width - scene.width) < 2
              );
            }),
          )
          .toBe(true);
      }
      await expect(host).not.toHaveAttribute("data-unavailable", "true");
    });
  }
}

for (const locale of ["en", "fa"]) {
  test(`mouse dragging advances the project showcase in ${locale}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${base}/${locale}/`);
    await expect(page.locator(".loading-screen")).toHaveCount(0, {
      timeout: 12000,
    });
    const artwork = page.locator("#project-shop .project-art");
    await artwork.scrollIntoViewIfNeeded();
    const box = await artwork.boundingBox();
    if (!box) throw new Error("Project artwork is missing");
    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + (locale === "fa" ? 180 : -180), y, { steps: 12 });
    await page.mouse.up();
    await expect(page.locator(".slide-counter")).toContainText("02");
    await expect(page.locator(".slider-track")).not.toHaveAttribute(
      "data-dragging",
      "true",
    );
    await page.locator("#project-phantom summary").click();
    await expect(page.locator("#project-phantom details")).toHaveAttribute(
      "open",
      "",
    );
    await page.locator(".slider-position button").nth(6).click();
    await expect(page.locator(".slide-counter")).toContainText("07");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
}

test("contact email and 3D skill papers remain readable with reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${base}/fa/`);
  await expect(page.locator(".loading-screen")).toHaveCount(0, {
    timeout: 12000,
  });
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(3);
  for (const link of await page.locator('a[href^="mailto:"]').all()) {
    await expect(link).toHaveAttribute(
      "href",
      "mailto:nimazandian021@gmail.com",
    );
  }
  await expect(page.locator(".skill-sheet h3")).toHaveText([
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "Git",
  ]);
  expect(
    await page
      .locator(".skill-sheet")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await expect(page.locator('[data-slot="carousel-item"]')).toHaveCount(7);
});
