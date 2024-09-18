import { expect, test } from '@playwright/test'

test.describe('notify通知组件xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('notify#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')

    // 默认提示框
    await demo.getByRole('button', { name: '弹出提示框' }).click()
    const notifyInfo = page.locator('.tiny-notify--info')
    await expect(notifyInfo).toBeInViewport()
    await expect(notifyInfo).toHaveScreenshot('basic-usage.png')

    // notify弹出框关闭图标hover状态截图
    await page.locator('.tiny-notify__icon-close > .tiny-svg').hover()
    await expect(notifyInfo).toBeInViewport()
    await expect(notifyInfo).toHaveScreenshot('hover.png')
  })

  test('消息类型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('notify#type')
    const demo = page.locator('#type .pc-demo')

    // info类型截图
    await demo.getByRole('button', { name: 'info 类型' }).click()
    const notifyInfo = page.locator('.tiny-notify--info')
    await expect(notifyInfo).toBeInViewport()
    await expect(notifyInfo).toHaveScreenshot('info.png')

    // success类型截图
    await demo.getByRole('button', { name: 'success 类型' }).click()
    const notifySuccess = page.locator('.tiny-notify--success')
    await expect(notifySuccess).toBeInViewport()
    await expect(notifySuccess).toHaveScreenshot('success.png')

    // error类型截图
    await demo.getByRole('button', { name: 'error 类型' }).click()
    const notifyError = page.locator('.tiny-notify--error')
    await expect(notifyError).toBeInViewport()
    await expect(notifyError).toHaveScreenshot('error.png')

    // warning类型截图
    await demo.getByRole('button', { name: 'warning 类型' }).click()
    const notifyWarning = page.locator('.tiny-notify--warning')
    await expect(notifyWarning).toBeInViewport()
    await expect(notifyWarning).toHaveScreenshot('warning.png')
  })
})
