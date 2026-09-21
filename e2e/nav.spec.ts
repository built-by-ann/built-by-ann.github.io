import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const LINKS = ['about', 'resume', 'github', 'spotlights', 'projects', 'medlens', 'study abroad', 'contact me']

const toggle = (page: Page) => page.getByRole('button', { name: /navigation menu/i })
const navLink = (page: Page, name: string) => page.getByRole('navigation').getByRole('link', { name })

// The hamburger appears at 1060px and below (see styles.css); 1061px and up keep the full bar.
test.describe('wide screens', () => {
  for (const width of [1061, 1440]) {
    test(`${width}px shows the full navigation and no menu button`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto('/')
      await expect(toggle(page)).toBeHidden()
      for (const name of LINKS) await expect(navLink(page, name)).toBeVisible()
    })
  }
})

test.describe('narrow screens', () => {
  for (const width of [1060, 768, 375, 320]) {
    test.describe(`${width}px`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width, height: 700 })
        await page.goto('/')
        await expect(page.locator('main h1')).toBeVisible()
      })

      test('collapses behind a labelled button that reports its state', async ({ page }) => {
        const button = toggle(page)
        await expect(button).toBeVisible()
        await expect(button).toHaveAccessibleName('Open navigation menu')
        await expect(button).toHaveAttribute('aria-expanded', 'false')
        await expect(button).toHaveAttribute('aria-controls', 'primary-navigation')
        for (const name of LINKS) await expect(navLink(page, name)).toBeHidden()

        await button.click()
        await expect(button).toHaveAccessibleName('Close navigation menu')
        await expect(button).toHaveAttribute('aria-expanded', 'true')
        for (const name of LINKS) await expect(navLink(page, name)).toBeVisible()
      })

      test('open menu fits the viewport and has no axe violations', async ({ page }) => {
        await toggle(page).click()
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
        expect(overflow).toBeLessThanOrEqual(1)
        const boxes = await Promise.all(LINKS.map(name => navLink(page, name).boundingBox()))
        for (const box of boxes) {
          expect(box).not.toBeNull()
          expect(box!.x).toBeGreaterThanOrEqual(0)
          expect(box!.x + box!.width).toBeLessThanOrEqual(width)
        }
        const { violations } = await new AxeBuilder({ page }).analyze()
        expect(violations.map(v => v.id)).toEqual([])
      })
    })
  }

  test('keyboard: closed links are skipped, open links are reachable in order, Escape closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 700 })
    await page.goto('/')
    await expect(page.locator('main h1')).toBeVisible()

    // Closed: Tab goes skip link, logo, menu button, then on into the page (never into the hidden links).
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'skip to main content' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'built-by-ann' }).first()).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(toggle(page)).toBeFocused()
    await page.keyboard.press('Tab')
    const afterButton = await page.evaluate(() => document.activeElement?.closest('nav') !== null)
    expect(afterButton).toBe(false)

    // Open with Enter, then Tab through the links in visual order.
    await toggle(page).focus()
    await page.keyboard.press('Enter')
    await expect(toggle(page)).toHaveAttribute('aria-expanded', 'true')
    for (const name of LINKS) {
      await page.keyboard.press('Tab')
      await expect(navLink(page, name)).toBeFocused()
    }

    // No trap: Tab leaves the menu, and Shift+Tab walks back into it.
    await page.keyboard.press('Tab')
    expect(await page.evaluate(() => document.activeElement?.closest('nav') !== null)).toBe(false)

    // Escape from inside the menu closes it and puts focus on the button.
    await navLink(page, 'projects').focus()
    await page.keyboard.press('Escape')
    await expect(toggle(page)).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle(page)).toBeFocused()

    // Space also toggles it.
    await page.keyboard.press('Space')
    await expect(toggle(page)).toHaveAttribute('aria-expanded', 'true')
  })

  test('following a link navigates, closes the menu, and moves focus to the page heading', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 700 })
    await page.goto('/')
    await toggle(page).click()
    await navLink(page, 'about').click()
    await expect(page).toHaveURL(/\/about$/)
    await expect(toggle(page)).toHaveAttribute('aria-expanded', 'false')
    await expect(page.locator('main h1')).toBeFocused()
  })

  test('the link for the current page also closes the menu without losing focus', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 700 })
    await page.goto('/about')
    await toggle(page).click()
    await navLink(page, 'about').focus()
    await page.keyboard.press('Enter')
    await expect(toggle(page)).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle(page)).toBeFocused()
  })
})
