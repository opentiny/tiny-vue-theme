import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('面板搜索--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#allow-create')

    const demo = page.locator('#allow-create .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(2).click()
    await expect(wrap).toHaveScreenshot('top-create.png')
  })
})
