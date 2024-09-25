import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('内容自动撑开--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#is-drop-inherit-width')

    const demo = page.locator('#is-drop-inherit-width .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).click()
    await expect(wrap).toHaveScreenshot('auto.png')
  })

  test('继承宽度--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#is-drop-inherit-width')

    const demo = page.locator('#is-drop-inherit-width .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await select.nth(1).click()
    await expect(wrap).toHaveScreenshot('inherit-width.png')
  })
})
