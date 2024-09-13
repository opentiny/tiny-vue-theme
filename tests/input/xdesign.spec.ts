import { expect, test } from '@playwright/test'

test.describe('input组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const input = demo.locator('input')
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // 聚焦时截图
    await input.focus()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('focus.png')
  })

  test('可清除--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#clearable')
    const demo = page.locator('#clearable .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('clearable.png')

    // 清除图标hover截图
    const clearIcon = demo.locator('.tiny-input__clear')
    await clearIcon.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('clearable-hover.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#native')
    const demo = page
      .locator('#native .pc-demo')
      .locator('p')
      .filter({ hasText: /^disabled$/ })
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('密码框--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#show-password')
    const demo = page.locator('#show-password .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('password.png')
  })

  test('文本域行数与宽--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#rows')
    const demo = page.locator('#rows .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('textarea.png')

    // 对比文本域包含滚动条UI样式是否正常
    const firstTextarea = page.getByRole('textbox', { name: 'default' })
    const text = '文本域行数与宽'.repeat(5)
    await firstTextarea.fill(text)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('textarea-scroll.png')
  })

  test('计数器--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#counter')
    const demo = page.locator('#counter .pc-demo')
    const input = demo.getByRole('textbox')
    await input.fill('计数器')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('counter.png')
  })

  test('自定义图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#input-icon')
    const demo = page.locator('#input-icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('input-icon.png')
  })
})
