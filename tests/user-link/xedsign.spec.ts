import { expect, test } from '@playwright/test'

test.describe('user-link组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('user-link#custom-service')
    const demo = page.locator('#custom-service .pc-demo')
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API自定义服务注意 UserLink 组件请求的是' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-service.png')

    // hover时截图
    const link = demo.getByText('test3')
    await link.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('custom.png')

    const expand = page.getByText('展开')
    await expand.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('expand.png')
  })
})
