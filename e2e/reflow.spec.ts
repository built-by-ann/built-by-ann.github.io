import { readFileSync } from 'node:fs'
import { test, expect } from '@playwright/test'

// WCAG 1.4.10 Reflow: content must work at a 320 CSS px wide viewport (400% zoom on a 1280px window)
// without horizontal scrolling. Browser zoom only changes the effective CSS viewport width, so this
// tests it by resizing. The other widths guard the responsive steps in between.
const routes = [...readFileSync('src/App.tsx', 'utf8').matchAll(/<Route path="([^"]+)"/g)].map(m => m[1])
const widths = [320, 375, 768, 1024, 1440]

for (const width of widths) {
  for (const route of routes) {
    test(`${route} reflows at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(route)
      await expect(page.locator('main h1')).toBeVisible()
      await page.evaluate(() => document.fonts.ready)

      const result = await page.evaluate(() => {
        const viewport = document.documentElement.clientWidth
        // Boxes whose own content spills out of them (overlap or clipping), ignoring the
        // deliberately 1px visually hidden text.
        const spilling = [...document.querySelectorAll('body *')]
          .filter(el => !el.classList.contains('sr-only'))
          .filter(el => el.clientWidth > 0 && el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).display !== 'inline')
          .map(el => `${el.tagName.toLowerCase()} "${(el.textContent ?? '').trim().slice(0, 30)}"`)
        return { pageOverflow: document.documentElement.scrollWidth - viewport, spilling }
      })

      expect(result.pageOverflow, 'page scrolls horizontally').toBeLessThanOrEqual(1)
      expect(result.spilling, 'boxes with overflowing content').toEqual([])
    })
  }
}
