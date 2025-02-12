import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('标签插槽--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#slot-label')

    const demo = page.locator('#slot-label .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
