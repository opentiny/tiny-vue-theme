import { expect, test } from '@playwright/test'

test.describe('popconfirm组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API基本用法通过 title 设置标题内容，' }).nth(3)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const pop = demo.getByRole('button', { name: '悬浮我提示' })
    await pop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('图标类型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#type')
    const demo = page.locator('#type .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API图标类型通过 type' }).nth(3)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('type.png')

    // hover时截图
    const info = demo.getByRole('button', { name: 'info' })
    const error = demo.getByRole('button', { name: 'error' })
    const warning = demo.getByRole('button', { name: 'warning' })
    const success = demo.getByRole('button', { name: 'success' })
    const hoverPop = demo.getByRole('button', { name: '自定义' })
    
    await info.hover()
    await error.hover()
    await warning.hover()
    await success.hover()
    await hoverPop.hover()

    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('type-hover.png')
  })

  test('隐藏取消--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#cancel-button')
    const demo = page.locator('#cancel-button .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API隐藏取消按钮通过 cancel-button' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('cancel-button.png')

    // hover时截图
    const cancelPop = demo.getByRole('button', { name: '悬浮我提示' })
    await cancelPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('cancelPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })
})
