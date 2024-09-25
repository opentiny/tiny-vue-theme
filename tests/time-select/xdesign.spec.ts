import { expect, test } from '@playwright/test'

test.describe('time-select组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-select#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    const bigPic = page.locator('#doc-layout div').filter({ hasText: '示例API基本用法详细用法参考如下示例。time-' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const input = demo.getByRole('textbox', { name: '选择时间' })
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // 聚焦时截图
    await input.focus()
    await expect(bigPic).toBeInViewport()
    await expect(bigPic).toHaveScreenshot('focus.png')  

    // 聚焦时截图
    const select = page.getByText('10:00')
    await select.hover()
    await expect(bigPic).toBeInViewport()
    await expect(bigPic).toHaveScreenshot('focus-hover.png')  

    // 选中时截图
    await select.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('select.png')  

    // 选中后清除图标截图
    const selectInput = demo.getByRole('textbox', { name: ':00' })
    await selectInput.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('select-hover.png')

    // 清除图标hover时截图
    const icon = page.getByLabel('示例', { exact: true }).locator('path').nth(1)
    await icon.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon-hover.png')
  })
})
