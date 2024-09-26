import { expect, test } from '@playwright/test'

test.describe('container组件xdesign规范', () => {
  test('基础用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('container#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('自定义宽高--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('container#custom-with-height')
    const demo = page.locator('#custom-with-height .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-with-height.png')
  })
})
