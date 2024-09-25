import { expect, test } from '@playwright/test'

test.describe('button-group组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover 时截图
    const button = demo.getByRole('button', { name: 'Button2' })
    await button.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')
  })

  test('组件尺寸大小--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#size')
    const demo = page.locator('#size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')

    // hover 时截图
    const button = demo.getByRole('button', { name: 'Button2' }).first()
    await button.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size-hover.png')
  })

  test('禁用状态--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#disabled')
    const demo = page.locator('#disabled .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('朴素按钮--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#plain')
    const demo = page.locator('#plain .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('plain.png')

    // hover 时截图
    const button = demo.getByRole('button', { name: 'Button2' })
    await button.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('plain-hover.png')
  })

  test('显示更多按钮--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#show-more')
    const demo = page.locator('#show-more .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('show-more.png')
  })
  
  test('编辑按钮--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#show-edit')
    const demo = page.locator('#show-edit .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('show-edit.png')
  })

  test('多行按钮组--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#button-group-multiple')
    const demo = page.locator('#button-group-multiple .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('button-group-multiple.png')

    // hover 时截图
    const button = demo.getByRole('button', { name: 'Button02' })
    await button.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('multiple-hover.png')
  })

  test('选块角标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button-group#sup')
    const demo = page.locator('#sup .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('sup.png')

    // hover 时截图
    const button = demo.getByRole('button', { name: '图标' }).nth(1)
    await button.hover()
    await expect(demo).toBeInViewport() 
    await expect(demo).toHaveScreenshot('sup-hover.png')
  })
})
