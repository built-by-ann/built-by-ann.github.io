import { readFileSync } from 'node:fs'
import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

// Every route declared in src/App.tsx, so a newly added route is covered automatically.
const routes = [...readFileSync('src/App.tsx', 'utf8').matchAll(/<Route path="([^"]+)"/g)].map(m => m[1])

// Default axe rules, no exclusions. Fails with a readable list of what broke and where.
async function expectNoViolations(page: Page) {
  const { violations } = await new AxeBuilder({ page }).analyze()
  const summary = violations.map(
    v => `${v.id} (${v.impact}): ${v.help}\n${v.nodes.map(n => `    ${n.target.join(' ')}`).join('\n')}`,
  )
  expect(summary, `axe found ${violations.length} violation(s)`).toEqual([])
}

// Wait for the page's own content (every route has an <h1> in <main>) and web fonts, not a timer.
async function openRoute(page: Page, route: string) {
  await page.goto(route)
  await expect(page.locator('main h1')).toBeVisible()
  await page.evaluate(() => document.fonts.ready)
}

test('every route in App.tsx is covered', () => {
  expect(routes.length).toBeGreaterThan(0)
  expect(routes).toContain('/')
})

for (const route of routes) {
  test(`${route} has no detectable accessibility violations`, async ({ page }) => {
    await openRoute(page, route)
    await expectNoViolations(page)
  })
}

// Interactive states that aren't part of the initial render.
test('/projects with a project expanded', async ({ page }) => {
  await openRoute(page, '/projects')
  const toggle = page.getByRole('button', { expanded: false }).first()
  await toggle.click()
  await expect(page.getByRole('button', { expanded: true })).toHaveCount(1)
  await expectNoViolations(page)
})

test('/medlens with the image viewer open', async ({ page }) => {
  await openRoute(page, '/medlens')
  await page.getByRole('button', { name: /^view .* full size$/ }).first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expectNoViolations(page)
})
