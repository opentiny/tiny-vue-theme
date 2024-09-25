import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('可过滤--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#filter-method')

    const demo = page.locator('#filter-method .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).click()
    await expect(wrap).toHaveScreenshot('unfilter.png')

    await select.nth(0).locator('.tiny-input__inner').fill('北京')
    await select.nth(0).locator('.tiny-input__inner').press('Enter')
    await expect(demo).toHaveScreenshot('filter.png')
  })
})
