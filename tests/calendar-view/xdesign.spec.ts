import { expect, test } from '@playwright/test'

test.describe('calendar 组件xdesign规范', () => {
  test('calendar-view--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('calendar-view#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const line = demo.getByText('前端周会2', { exact: true })
    await line.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('line-hover.png')

  })

  test('设置工作日或节假日--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('calendar-view#set-working-day')
    const demo = page.locator('#set-working-day .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('set-working-day.png')

    const btn1 = demo.getByRole('button', { name: '工作日' })
    const btn2 = demo.getByRole('button', { name: '休息日' })
    const btn3 = demo.getByRole('button', { name: '节假日' })
    const date1 = demo.locator('li').filter({ hasText: '8' }).first()
    const date2 = demo.locator('li').filter({ hasText: '9' }).first()
    const date3 = demo.locator('li').filter({ hasText: '10' }).first()

    await date1.click()
    await btn1.click()
    await date2.click()
    await btn2.click()
    await date3.click()
    await btn3.click()

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('right-hover.png')
  })
})
