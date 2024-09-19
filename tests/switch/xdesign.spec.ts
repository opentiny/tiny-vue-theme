import { expect, test } from '@playwright/test'

test.describe('switch组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('switch#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('迷你尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('switch#mini-mode')
    const demo = page.locator('#mini-mode .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('mini-mode.png')
  })

  test('加载中状态--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('switch#loading')
    const demo = page.locator('#loading .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('loading.png')
  })

  test('禁用状态--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('switch#dynamic-disable')
    const demo = page.locator('#dynamic-disable .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })
})
