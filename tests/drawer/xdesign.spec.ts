import { expect, test } from '@playwright/test'

test.describe('drawer组件xdesign规范', () => {
  test('基本用法--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('drawer#basic-usage')
    const demo = page.locator('#basic-usage')
    await demo.getByRole('button', { name: '抽屉组件' }).click()
    const body = demo.locator('.tiny-drawer__box')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('basic-usage.png')
  })

  test('帮助提示--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('drawer#tips-props')
    const demo = page.locator('#tips-props')
    await demo.getByRole('button', { name: '展开抽屉' }).click()
    const body = demo.locator('.tiny-drawer__box')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('tips-props.png')
  })

  test('底部插槽--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('drawer#footer-slot')
    const demo = page.locator('#footer-slot')
    await demo.getByRole('button', { name: '底部插槽示例' }).click()
    const body = demo.locator('.tiny-drawer__box')
    await expect(body).toBeInViewport()
    await expect(body).toHaveScreenshot('footer-slot.png')
  })

})
