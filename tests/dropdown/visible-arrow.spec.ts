import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 显示箭头 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#visible-arrow')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#visible-arrow .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('visible-arrow.png')
  })

  test('dropdown 隐藏箭头 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#visible-arrow')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#visible-arrow .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await demo.locator('.tiny-switch').click()
    await page.waitForTimeout(300)
    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('hidden-arrow.png')
  })
})
