import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 配置式提示信息 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#tip')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#tip .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')

    // 悬浮显示提示信息
    await trigger.nth(0).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(500)

    await item.nth(0).locator('.tiny-dropdown-item__content').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger0-item0-tip.png')

    await item.nth(1).locator('.tiny-dropdown-item__content').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger0-item1-tip.png')

    await item.nth(2).locator('.tiny-dropdown-item__content').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger0-item2-tip.png')
  })

  test('dropdown 标签属性式提示信息 -- UI截图', async ({ page }) => {
    await page.goto('dropdown#tip')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#tip .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')

    // 悬浮显示提示信息
    await trigger.nth(1).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)

    await item.nth(0).locator('.tiny-dropdown-item__content').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger1-item0-tip.png')

    await item.nth(1).locator('.tiny-dropdown-item__content').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger1-item1-tip.png')

    await item.nth(2).locator('.tiny-dropdown-item__content').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('trigger1-item2-tip.png')
  })
})
