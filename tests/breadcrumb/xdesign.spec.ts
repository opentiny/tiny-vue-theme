import { expect, test } from '@playwright/test'

test.describe('breadcrumb组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('breadcrumb#base')
    const demo = page.locator('#base .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('base.png')

    // 关闭按钮hover状态
    await demo.getByText('产品').hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')
  })

  test('自定义分隔符--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('breadcrumb#separator')
    const demo = page.locator('#separator .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('separator.png')
  })
})
