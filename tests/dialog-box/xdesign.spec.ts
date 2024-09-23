import { expect, test } from '@playwright/test'

test.describe('dialog-box组件xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('dialog-box#basic-usage')
    const demo = page.locator('#basic-usage')
    await demo.getByRole('button', { name: /Dialog/ }).click()
    const body = demo.locator('.tiny-dialog-box')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('basic-usage.png')
  })

  test('布局示例--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('dialog-box#open-close-events')
    const demo = page.locator('#open-close-events')
    await demo.getByRole('button', { name: '弹出与关闭事件' }).click()
    const body = demo.locator('.tiny-dialog-box')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('open-close-events.png')
  })

  test('右侧弹窗--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('dialog-box#right-dialog')
    const demo = page.locator('#right-dialog')
    await demo.getByRole('button', { name: '右侧弹窗' }).click()
    const body = demo.locator('.is-right-slide')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('right-dialog.png')
  })

  // dialog-box#center
  test('标题居中--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('dialog-box#center')
    const demo = page.locator('#center')
    await demo.getByRole('button', { name: /Dialog/ }).click()
    const body = demo.locator('.tiny-dialog-box')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('center.png')
  })
})
