import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#size')

    const demo = page.locator('#size .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
