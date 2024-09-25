import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('表格单选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#nest-grid')

    const demo = page.locator('#nest-grid .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('grid-single.png')
  })

  test('表格多选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#nest-grid')

    const demo = page.locator('#nest-grid .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('grid-multiple.png')
  })
})
