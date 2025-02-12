import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 显示边框圆角-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#border')
    const demo = page.locator('#border .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('border-default.png')
  })
})
