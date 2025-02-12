import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 配置式 menu-options -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#options')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#options .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.nth(0).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('option0.png')
  })

  test('dropdown 配置式 menu-options 和 title -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#options')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#options .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.nth(1).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('option1.png')
  })

  test('dropdown 配置式 menu-options 和 text-field -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#options')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#options .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.nth(2).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('option2.png')
  })

  test('dropdown 配置式 options -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#options')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#options .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.nth(3).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('option3.png')
  })

  test('dropdown 配置式 options 和 text-field -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#options')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#options .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')
    const item = page.locator('.tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.nth(4).locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('option4.png')
  })
})
