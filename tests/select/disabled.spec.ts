import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#disabled')

    const demo = page.locator('#disabled .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(wrap).toHaveScreenshot('default.png')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('hover1.png')

    await select.nth(2).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('hover2.png')

    await select.nth(3).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('hover3.png')
  })
})
