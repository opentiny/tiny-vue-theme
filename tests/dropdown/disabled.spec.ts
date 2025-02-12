import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 禁用显示-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#disabled')
    const demo = page.locator('#disabled .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled-default.png')
  })

  test('dropdown 悬浮禁用下拉菜单-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#disabled')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#disabled .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.nth(0).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(200)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('disabled-hover.png')
  })

  test('dropdown 悬浮禁用按钮类型下拉菜单-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#disabled')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#disabled .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.nth(1).hover()
    await page.waitForTimeout(200)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('button-disabled-hover.png')
  })

  test('dropdown 悬浮禁用菜单项-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#disabled')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#disabled .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.nth(2).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(200)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('item-disabled.png')
  })
})
