import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('不显示全选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#show-alloption')

    const demo = page.locator('#show-alloption .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await select.nth(0).locator('.tiny-input__suffix-inner').click()

    await expect(wrap).toHaveScreenshot('show-alloption.png')
  })
})
