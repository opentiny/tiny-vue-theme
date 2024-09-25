import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('弹框样式与定位--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#popup-style-position')

    const demo = page.locator('#popup-style-position .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('popup-style-position.png')
  })
})
