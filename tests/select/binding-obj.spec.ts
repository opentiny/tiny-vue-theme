import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('绑定值为对象--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#binding-obj')

    const demo = page.locator('#binding-obj .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
