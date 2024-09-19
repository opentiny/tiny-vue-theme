import { expect, test } from '@playwright/test'

test.describe('anchor 组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('anchor#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // 点击时截图
    await page.getByLabel('示例', { exact: true }).getByRole('link', { name: '基本用法' }).click()
    await expect(demo).toHaveScreenshot('basic-usage-click.png')
  })
})
