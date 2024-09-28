import { expect, test } from '@playwright/test'

test.describe('split组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('split#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('分割方式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('split#split-mode')
    const demo = page.locator('#split-mode .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('split-mode.png')
  })

  test('嵌套使用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('split#nested-use')
    const demo = page.locator('#nested-use .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('nested-use.png')
  })

  test('简易模式中，双向展开--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('split#horizontal-collapse')
    const demo = page.locator('#horizontal-collapse .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('horizontal-collapse.png')

    const triggerDom = demo.locator('.tiny-split-trigger-con-simple')
    await triggerDom.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')
  })

  test('支持配置3个区块--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('split#three-areas')
    const demo = page.locator('#three-areas .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('three-areas.png')
  })
})
