import { expect, test } from '@playwright/test'

test.describe('time-picker 组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-picker#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    const demoPage = page.getByText('title: TimePicker 时间选择器 TimePicker 时间选择器 用于选择时间（时分秒）。 示例API基本用法默认是通过滚动的方式选择时间，')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const input = demo.getByRole('textbox', { name: ':40:00' }).first()
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-hover.png')

    // 弹窗后截图
    await input.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click.png')

    // 时间hover时截图
    const time = page.locator('li').filter({ hasText: '39' }).nth(2)
    await time.hover()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('time-hover.png')
  })

  test('固定时间范围--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-picker#picker-options')
    const demo = page.locator('#picker-options .pc-demo')

    const input = demo.getByRole('textbox', { name: ':40:00' })
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API固定时间范围picker-options' }).nth(2)
    await input.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('picker-options.png')
  })

  test('选择时间范围--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-picker#is-range')
    const demo = page.locator('#is-range .pc-demo')

    const input = page.getByRole('textbox').nth(1)
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API选择时间范围is-range' }).nth(2)
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('is-range-hover.png')
    await input.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('is-range-click.png')
  })

  test('禁用状态--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-picker#disabled')
    const demo = page.locator('#disabled .pc-demo')
    // 禁用状态 截图
    const input = demo.getByRole('textbox', { name: ':40:00' }).first()
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled-hover.png')
  })
})
