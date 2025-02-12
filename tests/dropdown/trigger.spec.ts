import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 触发方式-hover -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#trigger')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#trigger .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    // 默认
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('default.png')

    // 悬浮下拉
    await trigger.nth(0).hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger-hover.png')
  })
})

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 触发方式-click -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#trigger')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#trigger .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    // 悬浮和默认相同
    await trigger.nth(1).hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('default.png')

    // 点击下拉
    await trigger.nth(1).click()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger-click.png')
  })
})
