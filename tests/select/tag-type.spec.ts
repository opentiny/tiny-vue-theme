import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('标签类型设置--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#tag-type')

    const demo = page.locator('#tag-type .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
