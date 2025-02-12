import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('面板搜索--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#searchable')

    const demo = page.locator('#searchable .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).click()
    await expect(wrap).toHaveScreenshot('unfilter.png')
  })
})
