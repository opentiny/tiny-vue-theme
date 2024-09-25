import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('手动聚焦失焦--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#automatic-dropdown')

    const demo = page.locator('#automatic-dropdown .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
