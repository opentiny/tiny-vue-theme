import { expect, test } from '@playwright/test'

test.describe('radio组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('radio#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    await page.getByRole('radio', { name: '选项二' }).hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')
  })

  test('单选框组--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('radio#group-options')
    const demo = page.locator('#group-options .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('radio-group.png')

    // 清除图标hover截图
    await page.locator('label').filter({ hasText: '公交' }).hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('group-hover.png')

    await page.locator('label').filter({ hasText: '地铁' }).hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('checked-hover.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('radio#dynamic-disable')
    const demo = page.locator('#dynamic-disable .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('垂直布局--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('radio#vertical')
    const demo = page.locator('#vertical .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('vertical.png')
  })

  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('radio#radio-size')
    const demo = page.locator('#radio-size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')
  })
})
