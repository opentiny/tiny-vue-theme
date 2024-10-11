import { expect, test } from '@playwright/test'

test.describe('IpAddress组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('ip-address#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const ipInput = demo.locator('.tiny-ip-address__input').first()
    await ipInput.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('ip-address#disabled')
    const demo = page.locator('#disabled .pc-demo')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('ip-address#size')
    const demo = page.locator('#size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')
  })
})
