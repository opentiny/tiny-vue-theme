import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('空数据插槽--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#slot-empty')

    const demo = page.locator('#slot-empty .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await select.nth(0).click()
    await expect(wrap).toHaveScreenshot('default.png')
  })
})
