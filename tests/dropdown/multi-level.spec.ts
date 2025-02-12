import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown menu-options三级菜单 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#multi-level')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#multi-level .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(0).locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')
    const menu = page.locator('.tiny-dropdown-menu')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)

    await item.nth(0).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu1 = item.nth(0).locator('.tiny-dropdown-menu')
    await menu1.nth(0).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu2 = menu1.nth(0).locator('.tiny-dropdown-menu')
    await menu2.nth(0).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(500)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('multi-level-0.png')
  })

  test('dropdown options三级菜单 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#multi-level')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#multi-level .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(1).locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')
    const menu = page.locator('.tiny-dropdown-menu')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)

    await item.nth(0).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu1 = item.nth(0).locator('.tiny-dropdown-menu')
    await menu1.nth(0).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu2 = menu1.nth(0).locator('.tiny-dropdown-menu')
    await menu2.nth(0).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(500)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('multi-level-1.png')
  })

  test('dropdown options二级菜单 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#multi-level')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#multi-level .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(2).locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')
    const menu = page.locator('.tiny-dropdown-menu')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)

    await item.nth(1).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu1 = item.nth(1).locator('.tiny-dropdown-menu')
    await menu1.nth(0).locator('.tiny-dropdown-item__content').nth(1).hover()
    await page.waitForTimeout(300)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('multi-level-2.png')
  })

  test('dropdown 按钮二级菜单 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#multi-level')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#multi-level .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(3).locator('.tiny-dropdown__suffix-inner')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')
    const menu = page.locator('.tiny-dropdown-menu')

    await trigger.hover()
    await page.waitForTimeout(300)

    await item.nth(1).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu1 = item.nth(1).locator('.tiny-dropdown-menu')
    await menu1.nth(0).locator('.tiny-dropdown-item__content').nth(1).hover()
    await page.waitForTimeout(300)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('multi-level-3.png')
  })

  test('dropdown 主要按钮二级菜单 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#multi-level')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#multi-level .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(4).locator('.tiny-dropdown__suffix-inner')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')
    const menu = page.locator('.tiny-dropdown-menu')

    await trigger.hover()
    await page.waitForTimeout(300)

    await item.nth(1).locator('.tiny-dropdown-item__content').nth(0).hover()
    await page.waitForTimeout(300)

    const menu1 = item.nth(1).locator('.tiny-dropdown-menu')
    await menu1.nth(0).locator('.tiny-dropdown-item__content').nth(1).hover()
    await page.waitForTimeout(300)

    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('multi-level-4.png')
  })
})
