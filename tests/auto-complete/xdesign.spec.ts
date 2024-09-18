import { expect, test } from '@playwright/test'

test.describe('auto-complete组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('autocomplete#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')

    // 默认状态下截图
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const input = demo.locator('input')
    await input.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('hover.png')

    // 聚焦时截图
    await input.focus()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('focus.png')

    // 点击展开下拉后截图
    await input.click()
    const poperPanel = page.locator('.tiny-autocomplete-suggestion')
    await expect(poperPanel).toBeInViewport()
    await expect(poperPanel).toHaveScreenshot('active.png')

    // 下拉面板列表hover截图
    await page.getByRole('option', { name: 'GFD科技YX公司' }).hover()
    await expect(poperPanel).toBeInViewport()
    await expect(poperPanel).toHaveScreenshot('option-hover.png')
  })

  test('可清除--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('autocomplete#clearable')
    const demo = page.locator('#clearable .pc-demo')
    const input = demo.locator('input')
    await input.click()
    await page.getByRole('option', { name: 'GFD科技YX公司' }).click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('clearable.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('autocomplete#disabled')
    const demo = page.locator('#disabled .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })


  test('自定义图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('autocomplete#custom-icon')
    const demo = page.locator('#custom-icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-icon.png')
  })

  test('加载中--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('autocomplete#hide-loading')
    const demo = page.locator('#hide-loading .pc-demo')
    await demo.getByPlaceholder('请输入内容', { exact: true }).nth(1).click()

    // 下拉面板loading效果截图
    const poperPanel = page.getByRole('listitem')
    await expect(poperPanel).toBeInViewport()
    await expect(poperPanel).toHaveScreenshot('loading.png')
  })
})
