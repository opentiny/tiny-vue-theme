import { expect, test } from '@playwright/test'

test.describe('drop-times组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('drop-times#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    const bigPic = page.locator('#doc-layout div').filter({ hasText: '示例API基本用法详细用法参考如下示例当前选中值：drop' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const input = demo.getByRole('textbox', { name: '请选择' })
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // 聚焦时截图
    await input.click()
    await expect(bigPic).toBeInViewport()
    await expect(bigPic).toHaveScreenshot('click.png')  

    // 聚焦时截图
    const select = page.getByText('00:30')
    await select.hover()
    await expect(bigPic).toBeInViewport()
    await expect(bigPic).toHaveScreenshot('focus-hover.png')  

    // 选中后截图
    await select.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('select.png')  
  })
})
