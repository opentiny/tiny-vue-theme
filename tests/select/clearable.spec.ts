import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('可清除--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#clearable')

    const demo = page.locator('#clearable .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.hover()
    await expect(demo).toHaveScreenshot('hover.png')
  })
})
