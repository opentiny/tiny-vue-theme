import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 显示箭头 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#hide-on-click')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#hide-on-click .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    // 选中不收起弹框
    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await item.nth(0).locator('.tiny-dropdown-item__content').click()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('click-visible.png')
  })
})
