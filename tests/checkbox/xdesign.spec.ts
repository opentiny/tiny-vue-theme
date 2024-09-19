import { expect, test } from '@playwright/test'

test.describe('checkbox组件xdesign规范', () => {
  test('全选半选--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('checkbox#indeterminate')
    const demo = page.locator('#indeterminate .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('indeterminate.png')

    // 默认状态下的hover截图
    await page.locator('label').filter({ hasText: '广州' }).getByRole('img').hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // 禁用后的状态截图
    await demo.locator('.tiny-switch').click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('复选框按钮--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('checkbox#checkbox-button')
    const demo = page.locator('#checkbox-button .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('checkbox-button.png')

    // 复选框按钮hover截图
    await page.locator('label').filter({ hasText: '复选框2' }).hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('button-hover.png')
  })

  test('垂直布局--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('checkbox#vertical-checkbox')
    const demo = page.locator('#vertical-checkbox .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('vertical.png')
  })

  test('多行按钮--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('checkbox#checkbox-button-multiple')
    const demo = page.locator('#checkbox-button-multiple .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('multiple.png')
  })
})
