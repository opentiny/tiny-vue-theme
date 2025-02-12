import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('自动清除不匹配的值--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#clear-no-match-value')

    const demo = page.locator('#clear-no-match-value .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('clear-no-match-value.png')
  })
})
