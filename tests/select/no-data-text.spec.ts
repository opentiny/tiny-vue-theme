import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('空数据文本--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#no-data-text')

    const demo = page.locator('#no-data-text .pc-demo')
    const select = demo.locator('.tiny-select')

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    // TODO: 功能有问题，待修复补充
  })
})
