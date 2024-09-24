import { expect, test } from '@playwright/test'

test.describe('progress 组件xdesign规范', () => {
  test('默认 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('progress#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })
})
