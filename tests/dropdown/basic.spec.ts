import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 默认显示-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })

  test('dropdown 悬浮下拉-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#basic-usage')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#basic-usage .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger .tiny-dropdown__suffix-inner')

    await trigger.hover()
    await page.waitForTimeout(200)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('dropdown.png')
  })

  test('dropdown 悬浮菜单项-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#basic-usage')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#basic-usage .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger .tiny-dropdown__suffix-inner')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.hover()
    await page.waitForTimeout(200)
    await item.nth(0).hover()

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('item-hover.png')
  })

  test('dropdown 悬浮禁用菜单项-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#basic-usage')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#basic-usage .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger .tiny-dropdown__suffix-inner')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.hover()
    await page.waitForTimeout(200)
    await item.nth(4).hover()

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('item-disabled-hover.png')
  })
})
