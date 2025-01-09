import { expect, test } from '@playwright/test'

test.describe('date-picker 组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('date-picker#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API基本用法支持选择日期、日期时间、周、月份、年份。' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    const close = page.getByText('支持选择日期、日期时间、周、月份、年份。')
    const input1 = demo.getByPlaceholder('请选择日期').nth(1)
    const input2 = demo.getByPlaceholder('请选择日期').nth(3)
    const input3 = demo.getByRole('textbox', { name: '请选择周' })
    const input4 = demo.getByRole('textbox', { name: '请选择月份' })
    const input5 = demo.getByRole('textbox', { name: '请选择季度' })
    const input6 = demo.getByRole('textbox', { name: '请选择年份' })

    await input1.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click1.png')
    await close.click()

    await input2.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click2.png')
    await close.click()

    await input3.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click3.png')
    await close.click()

    await input4.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click4.png')
    await close.click()

    await input5.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click5.png')
    await close.click()

    await input6.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('basic-click6.png')
    await close.click()

  })

  test('范围选择--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('date-picker#date-range')
    const demo = page.locator('#date-range .pc-demo')    
    const closeBtn = page.getByLabel('示例', { exact: true }).getByText('范围选择')
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API范围选择设置 type 属性为' }).nth(2)

    const input1 = demo.getByPlaceholder('结束日期').first()
    await input1.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('date-range1.png')
    await closeBtn.click()

    const input2 = demo.getByPlaceholder('结束日期').nth(1)
    await input2.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('date-range2.png')
    await closeBtn.click()

    const input3 = demo.getByPlaceholder('结束月份')
    await input3.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('date-range3.png')
    await closeBtn.click()
    
    const input4 = demo.getByPlaceholder('结束年份')
    await input4.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('date-range4.png')
    
  })

  test('禁用状态--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('date-picker#disabled')
    // 禁用状态 截图
    const demo = page.locator('#disabled .pc-demo')
    const input = demo.getByRole('textbox', { name: '请选择日期' }).first()
    const rangeInput = demo.getByPlaceholder('结束日期')
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API禁用状态通过设置 disabled 为 true' }).nth(3)
    
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled-hover.png')

    await rangeInput.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('disabled-range.png')
  })

  test('清除输入--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('date-picker#clear')
    const demo = page.locator('#clear .pc-demo')

    const input = demo.getByRole('textbox').nth(1)
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('clear-hover.png')
  })


  test('周次序号--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('date-picker#custom-weeks')
    const demo = page.locator('#custom-weeks .pc-demo')

    const input = demo.getByRole('textbox').nth(2)
    const demoPage = page.locator('#doc-layout div').filter({ hasText: '示例API周次序号通过设置 show-week-' }).nth(3)
    await input.click()
    await expect(demoPage).toBeInViewport()
    await expect(demoPage).toHaveScreenshot('weeks.png')
  })
})
