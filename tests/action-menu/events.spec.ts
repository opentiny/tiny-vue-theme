import { expect, test } from '@playwright/test'

test.describe('action-menu 组件xdesign规范', () => {
  test('事件 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('action-menu#events')

    const demo = page.locator('#events .pc-demo')
    const body = page.locator('body')
    const actionMenu = demo.locator('.tiny-action-menu')
    const dropdown = actionMenu.nth(0).locator('.tiny-dropdown')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-dropdown-menu').nth(0)

    await dropdown.locator('.tiny-dropdown__suffix-inner').click()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-item').nth(2).hover()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-dropdown-menu .tiny-dropdown-item').nth(0).click()
    await page.waitForTimeout(100)

    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('events.png')
  })
})
