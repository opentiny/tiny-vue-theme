import { expect, test } from '@playwright/test'

test.describe('filter-panel 组件xdesign规范', () => {
  test('背景和提示 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('filter-panel#tip')
    const demo = page.locator('#tip .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('tip.png')

    // 展开截图
    const popoverDemo = page.locator('.tiny-popover.tiny-filter-panel__popover')
    await demo
      .locator('div')
      .filter({ hasText: /^物品数量$/ })
      .nth(1)
      .click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('tip-expand.png')
    await popoverDemo.getByRole('radio', { name: '等于' }).click()
    await expect(popoverDemo).toBeInViewport()
    await expect(popoverDemo).toHaveScreenshot('tip-expand-popover.png')

    await popoverDemo.getByRole('textbox').click()
    await popoverDemo.getByRole('textbox').fill('：ECS-1')
    await popoverDemo.getByRole('textbox').press('Enter')
    await demo
      .locator('div')
      .filter({ hasText: /^物品数量$/ })
      .nth(1)
      .click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('tip-expand-tag.png')
  })

  test('批量编码 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('filter-panel#code')
    const demo = page.locator('#code .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('code.png')

    // 展开截图
    const popoverDemo = page.locator('.tiny-popover.tiny-filter-panel__popover')
    await demo
      .locator('div')
      .filter({ hasText: /^编码编码$/ })
      .nth(1)
      .click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('code-expand.png')
    await popoverDemo.locator('textarea').click()
    await popoverDemo.locator('textarea').fill('aaa: 123')
    await popoverDemo.getByRole('button', { name: '确定' }).click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('code-expand-tag.png')
    await demo.getByText('编码编码').click()
    await expect(popoverDemo).toBeInViewport()
    await expect(popoverDemo).toHaveScreenshot('code-expand-popover.png')
  })
})
