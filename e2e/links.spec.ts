import { readFileSync } from 'node:fs'
import { test, expect } from '@playwright/test'

const routes = [...readFileSync('src/App.tsx', 'utf8').matchAll(/<Route path="([^"]+)"/g)].map(m => m[1])

for (const route of routes) {
  test(`${route}: new-tab links are safe and announced`, async ({ page }) => {
    await page.goto(route)
    await expect(page.locator('main h1')).toBeVisible()
    // Projects hides its links until a card is expanded.
    if (route === '/projects') await page.getByRole('button', { expanded: false }).first().click()

    const links = await page.locator('a[target="_blank"]').evaluateAll(as =>
      as.map(a => ({
        href: a.getAttribute('href'),
        rel: a.getAttribute('rel') ?? '',
        name: a.getAttribute('aria-label') ?? a.textContent ?? '',
      })),
    )
    for (const link of links) {
      expect(link.rel, `${link.href} rel`).toMatch(/noopener/)
      expect(link.rel, `${link.href} rel`).toMatch(/noreferrer/)
      expect(link.name, `${link.href} name`).toMatch(/\(opens in a new tab\)/)
    }
  })
}

test('/contact: email and phone links are well formed', async ({ page }) => {
  await page.goto('/contact')
  await expect(page.locator('main h1')).toBeVisible()
  await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/)
  // E.164 number, and it matches the digits shown on the page.
  const tel = page.locator('a[href^="tel:"]')
  await expect(tel).toHaveAttribute('href', /^tel:\+1\d{10}$/)
  const shown = ((await tel.textContent()) ?? '').replace(/\D/g, '')
  expect(await tel.getAttribute('href')).toBe(`tel:+1${shown}`)
})
