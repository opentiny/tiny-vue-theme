import { expect, test } from '@playwright/test'

test.describe('hrapprover组件xdesign规范', () => {
  test('自定义服务--UI截图', async ({ page }) => {
    // 受服务影响，控制台有报错，运行时可注释异常捕获
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('hrapprover#custom-service')
    const demo = page.locator('#custom-service .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-service.png')

    const prover = page.getByLabel('示例', { exact: true }).getByRole('img')
    await prover.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom.png')
  })
})
