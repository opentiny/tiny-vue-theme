import { expect, test } from '@playwright/test'

test.describe('search组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('search#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover状态截图
    await demo.locator('.tiny-search__input-btn').hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // active状态截图
    await page.getByPlaceholder('请输入关键词').focus()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('active.png')
  })

  test('可清除--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('search#clearable')
    const demo = page.locator('#clearable .pc-demo')
    const input = demo.getByPlaceholder('请输入关键词')
    await input.fill('111')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('clearable.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('search#slot-prefix')
    const demo = page.locator('#slot-prefix .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('slot.png')

    // 禁用状态截图
    await page.getByRole('button', { name: '点击切换为“禁用状态”' }).click()
    await page.waitForSelector('.tiny-search.is-disabled')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('搜索类型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('search#search-types')
    const demo = page.locator('#search-types .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('search-types.png')
  })
})
