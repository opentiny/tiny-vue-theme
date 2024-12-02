import { expect, test } from '@playwright/test'

test.describe('statistic组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('statistic#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('前后缀--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('statistic#prefix-suffix-slot')
    const demo = page.locator('#prefix-suffix-slot .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('prefix-suffix-slot.png')
  })

  test('标题--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('statistic#statistic-slot')
    const demo = page.locator('#statistic-slot .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('statistic-slot.png')
  })
})
