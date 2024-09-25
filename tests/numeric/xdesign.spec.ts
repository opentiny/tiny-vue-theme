import { expect, test } from '@playwright/test'

test.describe('numeric数字输入框xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('numeric#basic-usage')
    const demo = page.locator('#basic-usage')
    const num = page.locator('.tiny-numeric')
    const increaseBtn = demo.locator('.tiny-numeric__increase')
    await increaseBtn.click()
    await expect(num).toBeInViewport()
    await expect(num).toHaveScreenshot('basic-usage.png')
  })
  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('numeric#dynamic-disabled')
    const num = page.locator('.pc-demo')
    await expect(num).toBeInViewport()
    await expect(num).toHaveScreenshot('dynamic-disabled.png')
  })
  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('numeric#numeric-size')
    const num = page.locator('.pc-demo')
    await expect(num).toBeInViewport()
    await expect(num).toHaveScreenshot('numeric-size.png')
  })
  test('单位--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('numeric#unit')
    const num = page.locator('.pc-demo')
    await expect(num).toBeInViewport()
    await expect(num).toHaveScreenshot('unit.png')
  })
})
