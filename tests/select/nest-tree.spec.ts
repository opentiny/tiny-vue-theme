import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('树单选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#nest-tree')

    const demo = page.locator('#nest-tree .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('tree-single.png')
  })

  test('树多选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#nest-tree')

    const demo = page.locator('#nest-tree .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('tree-multiple.png')
  })
})
