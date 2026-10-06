import { test, expect } from "@playwright/test";
const base = process.env.PLAYWRIGHT_BASE_PATH || "";
const at = (path: string) => `${base}${path}`;
for (const locale of ["en", "fa"]) {
  for (const width of [1440, 390]) {
    test(`${locale} layout and interactions at ${width}px`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1000 });
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const response = await page.goto(at(`/${locale}/`));
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("html")).toHaveAttribute(
        "dir",
        locale === "fa" ? "rtl" : "ltr",
      );
      await expect(page.locator("article")).toHaveCount(7);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      const details = page.locator("#project-inbox details");
      await details.locator("summary").click();
      await expect(details).toHaveAttribute("open", "");
      await expect(details.locator(".project-detail")).toBeVisible();
      await details.locator("summary").click();
      await page.screenshot({
        path: `/tmp/portfolio-${locale}-${width}.png`,
        fullPage: true,
      });
      await page.locator(".language").click();
      await expect(page).toHaveURL(
        new RegExp(`/${locale === "en" ? "fa" : "en"}/$`),
      );
      expect(errors).toEqual([]);
    });
  }
}
test("redirect, missing routes, download assets and social image", async ({
  request,
}) => {
  const root = await request.get(at("/"));
  expect(root.url()).toMatch(/\/en\/$/);
  expect((await request.get(at("/fr"))).status()).toBe(404);
  for (const name of ["EN", "FA"]) {
    const response = await request.get(
      at(`/resume/Nima_Zandian_Resume_${name}.pdf`),
    );
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect((await response.body()).subarray(0, 4).toString()).toBe("%PDF");
  }
  for (const name of ["geist", "vazirmatn"])
    expect((await request.get(at(`/fonts/${name}.woff2`))).status()).toBe(200);
  const image = await request.get(at("/opengraph-image"));
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
});
test("keyboard disclosure and reduced-motion preferences", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(at("/en/"));
  const summary = page.locator("#project-phantom summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#project-phantom details")).toHaveAttribute(
    "open",
    "",
  );
  expect(
    await page
      .locator(".tile-orange svg")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
});
