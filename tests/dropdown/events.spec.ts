import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 按钮类型事件 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#events')
    const body = page.locator('body')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#events .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(0).locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')

    await dropdown.nth(0).locator('.tiny-dropdown__title-button').click()
    await page.waitForTimeout(100)
    await trigger.hover()
    await page.waitForTimeout(100)
    await item.nth(0).click()
    await page.waitForTimeout(100)
    await dropdown.nth(0).locator('.tiny-dropdown__title-button').hover()
    await page.waitForTimeout(100)

    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('button-events.png')
  })

  test('dropdown 默认类型事件 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#events')
    const body = page.locator('body')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#events .pc-demo')
    const dropdown = demo.locator('.tiny-dropdown')
    const trigger = dropdown.nth(1).locator('.tiny-dropdown__trigger')
    const item = page.locator('body > .tiny-dropdown-menu .tiny-dropdown-item')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(100)
    await item.nth(0).click()
    await page.waitForTimeout(100)

    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('default-events.png')
  })
})
