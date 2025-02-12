import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 默认不懒加载 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#lazy-show-popper')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#lazy-show-popper .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(0).locator('.tiny-dropdown__trigger')

    await dropdown.nth(0).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(100)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('default.png')
  })

  test('dropdown 懒加载 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#lazy-show-popper')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#lazy-show-popper .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(1).locator('.tiny-dropdown__trigger')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(100)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('lazy.png')
  })
})
