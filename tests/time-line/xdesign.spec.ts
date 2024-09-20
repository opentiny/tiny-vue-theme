import { expect, test } from '@playwright/test'

test.describe('timeline 组件xdesign规范', () => {
  test('节点状态 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-line#status')
    const demo = page.locator('#status .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('status.png')
  })

  test('圆点外观 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-line#shape')
    const demo = page.locator('#shape .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('shape.png')
  })
})
