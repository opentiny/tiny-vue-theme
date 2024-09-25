import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('字段映射--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#map-field')

    const demo = page.locator('#map-field .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('map-field.png')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('map-field-grid.png')
  })

  test('表格字段映射--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#map-field')

    const demo = page.locator('#map-field .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('map-field-grid.png')
  })
})
