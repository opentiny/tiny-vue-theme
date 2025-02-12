import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('仅显示--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#multiple-mix')

    const demo = page.locator('#multiple-mix .pc-demo')
    const select = demo.locator('.tiny-select').nth(0)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('display-only.png')

    await demo.locator('.tiny-button').nth(0).click()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
