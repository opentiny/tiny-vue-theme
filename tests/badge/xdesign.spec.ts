import { expect, test } from '@playwright/test'

test.describe('badge组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('主题样式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#type')
    const demo = page.locator('#type .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('type.png')
  })

  test('小圆点--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#is-dot')
    const demo = page.locator('#is-dot .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('is-dot.png')

    // hover时截图
    const badge = demo.getByRole('button')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('is-dot-hover.png')
  })

  test('最大值--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#max')
    const demo = page.locator('#max .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('max.png')
  })

  test('自定义内容--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#slot-content')
    const demo = page.locator('#slot-content .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('content.png')
  })

  test('动态隐藏--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#dynamic-hidden')
    const demo = page.locator('#dynamic-hidden .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-hidden.png')
  })

  test('标记的位置--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#offset')
    const demo = page.locator('#offset .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('offset.png')
  })
})
