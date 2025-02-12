import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('单选可复制--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#copy-single')

    const demo = page.locator('#copy-single .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
