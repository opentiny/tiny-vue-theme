import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('带标签和提示信息--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#slot-default')

    const demo = page.locator('#slot-default .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    await select.nth(0).click()
    await expect(demo).toHaveScreenshot('has-tag.png')
  })

  test('双行 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#slot-default')

    const demo = page.locator('#slot-default .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await select.nth(1).locator('.tiny-input__suffix-inner').click()
    await expect(wrap).toHaveScreenshot('double.png')
  })
})
