import { expect, test } from '@playwright/test'

test.describe('wizard 组件xdesign规范', () => {
  test('默认 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('wizard#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('页向导模式 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('wizard#page-guide')
    const demo = page.locator('#page-guide .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('page-guide.png')
  })

  test('垂直模式 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('wizard#vertical')
    const demo = page.locator('#vertical .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('vertical.png')
  })

  test('时间线 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('wizard#time-line-flow')
    const demo = page.locator('#time-line-flow .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('time-line-flow.png')
  })
})
