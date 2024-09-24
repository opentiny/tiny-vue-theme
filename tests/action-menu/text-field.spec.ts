import { expect, test } from '@playwright/test'

test.describe('action-menu 组件xdesign规范', () => {
  test('字段映射 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('action-menu#text-field')

    const demo = page.locator('#text-field .pc-demo')
    const actionMenu = demo.locator('.tiny-action-menu')
    const dropdown = actionMenu.locator('.tiny-dropdown')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-dropdown-menu').nth(0)

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await dropdown.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-item').nth(2).hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-menu .tiny-dropdown-item').nth(1).hover()

    await expect(wrap).toHaveScreenshot('hover.png')
  })
})
