import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('表格远程搜索单选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#nest-grid-remote')

    const demo = page.locator('#nest-grid-remote .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
    await select.nth(0).click()
    await expect(demo).toHaveScreenshot('grid-single-remote.png')
  })

  test('表格远程搜索单选自动搜索--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#nest-grid-remote')

    const demo = page.locator('#nest-grid-remote .pc-demo')
    const select = demo.locator('.tiny-select')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(demo).toHaveScreenshot('grid-single-auto.png')
    await page.waitForTimeout(1000)
    await expect(demo).toHaveScreenshot('grid-single-auto1.png')
  })
})
