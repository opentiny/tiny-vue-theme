import { expect, test } from '@playwright/test'

test.describe('action-menu 组件xdesign规范', () => {
  test('自定义图标 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('action-menu#icon')

    const demo = page.locator('#icon .pc-demo')
    const actionMenu = demo.locator('.tiny-action-menu')
    const dropdown = actionMenu.nth(0).locator('.tiny-dropdown')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-dropdown-menu').nth(0)

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await dropdown.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-item').nth(1).hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-menu .tiny-dropdown-item').nth(1).hover()

    await expect(wrap).toHaveScreenshot('hover.png')
  })

  test('自定义图标(蓝色) --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('action-menu#icon')

    const demo = page.locator('#icon .pc-demo')
    const actionMenu = demo.locator('.tiny-action-menu')
    const dropdown = actionMenu.nth(1).locator('.tiny-dropdown')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-dropdown-menu').nth(0)

    await dropdown.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-item').nth(1).hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-menu .tiny-dropdown-item').nth(1).hover()

    await expect(wrap).toHaveScreenshot('icon-hover.png')
  })

  test('只显示文字 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('action-menu#icon')

    const demo = page.locator('#icon .pc-demo')
    const actionMenu = demo.locator('.tiny-action-menu')
    const dropdown = actionMenu.nth(2).locator('.tiny-dropdown')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-dropdown-menu').nth(0)

    await dropdown.locator('.tiny-dropdown__trigger').hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-item').nth(1).hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-menu .tiny-dropdown-item').nth(1).hover()

    await expect(wrap).toHaveScreenshot('text.png')
  })
})
