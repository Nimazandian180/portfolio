import test from "node:test";
import assert from "node:assert/strict";
import { isLocale, projects } from "../src/lib/content.ts";
test("accepts only the supported language routes", () => {
  assert.equal(isLocale("en"), true);
  assert.equal(isLocale("fa"), true);
  for (const value of ["fr", "", "../fa", "EN"])
    assert.equal(isLocale(value), false);
});
test("does not present unreleased work as live or expose private project URLs", () => {
  assert.equal(projects.find((p) => p.id === "inbox")?.status, "planned");
  assert.equal(projects.find((p) => p.id === "ava")?.status, "planned");
  const phantom = projects.find((p) => p.id === "phantom");
  assert.equal(phantom?.status, "internal");
  assert.equal(phantom?.url, undefined);
  assert.equal(projects.length, 7);
  for (const project of projects) {
    assert.ok(project.en.description);
    assert.ok(project.fa.description);
  }
});
