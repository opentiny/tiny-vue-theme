import { expect, test } from '@playwright/test'

test.describe('guide组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('guide#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await demo.getByRole('button', { name: '开始引导' }).click()
    const guide = page.locator('.tiny-guide.shepherd-element')
    await expect(guide).toBeInViewport()
    await expect(guide).toHaveScreenshot('basic-usage.png')

    // 关闭按钮hover状态
    const closeIcon = guide.locator('.shepherd-cancel-icon span')
    await closeIcon.hover()
    await expect(guide).toBeInViewport()
    await expect(guide).toHaveScreenshot('hover-icon.png')

    // 下一步按钮hover状态
    const nextBtn = guide.getByRole('button', { name: '下一步' })
    await nextBtn.hover()
    await expect(guide).toBeInViewport()
    await expect(guide).toHaveScreenshot('hover-btn.png')
  })
})
