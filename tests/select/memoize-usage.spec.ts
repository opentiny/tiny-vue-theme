import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('手动缓存--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#memoize-usage')

    const demo = page.locator('#memoize-usage .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await select.click()
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('default.png')
  })
})
