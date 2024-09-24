import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 只显示文本和自定义图标-- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#show-icon')
    const demo = page.locator('#show-icon .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')
  })
})

test('dropdown 文本下拉-- UI截图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('dropdown#show-icon')
  const wrap = page.locator('.docs-tabs-wrap')
  const demo = page.locator('#show-icon .pc-demo')
  const trigger = demo.locator('.tiny-dropdown__trigger')

  await trigger.nth(0).locator('.tiny-dropdown__title').click()
  await page.waitForTimeout(300)
  await expect(wrap).toBeInViewport()
  await expect(wrap).toHaveScreenshot('text-hover-dropdown.png')
})

test('dropdown 图标下拉-- UI截图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('dropdown#show-icon')
  const wrap = page.locator('.docs-tabs-wrap')
  const demo = page.locator('#show-icon .pc-demo')
  const trigger = demo.locator('.tiny-dropdown__trigger')

  await trigger.nth(1).hover()
  await page.waitForTimeout(200)
  await expect(wrap).toBeInViewport()
  await expect(wrap).toHaveScreenshot('icon-hover-dropdown.png')
})
