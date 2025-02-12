import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 不同尺寸显示-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#size')
    const demo = page.locator('#size .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size-default.png')
  })
})
