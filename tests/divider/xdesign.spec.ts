import { expect, test } from '@playwright/test'

test.describe('divider组件xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('divider#basic-usage')
    const demo = page.locator('#basic-usage')
    const body = demo.locator('.pc-demo')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('basic-usage.png')
  })
  test('垂直分割线--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('divider#direction')
    const demo = page.locator('#direction')
    const body = demo.locator('.pc-demo')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('direction.png')
  })
  test('分割线文案位置--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('divider#content-position')
    const demo = page.locator('#content-position')
    const body = demo.locator('.pc-demo')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('content-position.png')
  })
  test('自定义颜色--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('divider#custom-style')
    const demo = page.locator('#custom-style')
    const body = demo.locator('.pc-demo')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('custom-style.png')
  })
})
