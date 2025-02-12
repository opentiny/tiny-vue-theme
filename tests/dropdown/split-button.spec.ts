import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 按钮类型-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#split-button')
    const demo = page.locator('#split-button .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})

test('dropdown 按钮下拉-- UI截图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('dropdown#split-button')
  const wrap = page.locator('.docs-tabs-wrap')
  const demo = page.locator('#split-button .pc-demo')
  const trigger = demo.locator('.tiny-dropdown__trigger')

  await trigger.nth(0).hover()
  await page.waitForTimeout(300)
  await expect(wrap).toBeInViewport()
  await expect(wrap).toHaveScreenshot('button-hover-dropdown.png')
})
