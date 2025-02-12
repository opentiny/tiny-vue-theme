import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('隐藏下拉--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#hide-drop')

    const demo = page.locator('#hide-drop .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
