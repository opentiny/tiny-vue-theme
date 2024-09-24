import { expect, test } from '@playwright/test'

test.describe('dropdown 组件对齐xdesign规范', () => {
  test('dropdown 默认由内容撑开 -- UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())

    await page.goto('dropdown#slots')
    const wrap = page.locator('.docs-tabs-wrap')
    const demo = page.locator('#slots .pc-demo')
    const trigger = demo.locator('.tiny-dropdown__trigger')

    await trigger.locator('.tiny-dropdown__suffix-inner').hover()
    await page.waitForTimeout(300)
    await expect(wrap).toBeInViewport()
    await expect(wrap).toHaveScreenshot('slots.png')
  })
})
