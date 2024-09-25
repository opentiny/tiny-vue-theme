import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('前缀插槽--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#slot-prefix')

    const demo = page.locator('#slot-prefix .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await select.nth(0).click()
    await expect(demo).toHaveScreenshot('default.png')
  })
})
