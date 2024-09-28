import { expect, test } from '@playwright/test'

test.describe('collapse折叠面板xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('collapse#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('collapse#disable')
    const demo = page.locator('#disable .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('面板标题--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('collapse#title')
    const demo = page.locator('#title .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('title.png')
  })
})
