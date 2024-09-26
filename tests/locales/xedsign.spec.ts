import { expect, test } from '@playwright/test'

test.describe('locales组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('locales#custom-service')
    const demo = page.locator('#custom-service .pc-demo')
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API自定义服务get-locale' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-service.png')

    // hover时截图
    const link = demo.getByText('zhCN').nth(1)
    await link.hover()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('custom.png')
  })
})
