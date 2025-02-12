import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 默认由内容撑开', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#inherit-width')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#inherit-width .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.nth(0).hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('default.png')
  })

  test('dropdown 继承宽度 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#inherit-width')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#inherit-width .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.nth(1).hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('inherit-width.png')
  })
})
