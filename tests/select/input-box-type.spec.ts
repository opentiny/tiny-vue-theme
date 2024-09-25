import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('输入框类型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#input-box-type')

    const demo = page.locator('#input-box-type .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('input-box-type.png')
  })
})
