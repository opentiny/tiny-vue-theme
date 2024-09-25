import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('标签式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#basic-usage')

    const demo = page.locator('#basic-usage .pc-demo')
    const select = demo.locator('.tiny-select').nth(0)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)

    // 默认
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    // 悬浮高亮
    await select.hover()
    await page.waitForTimeout(100)
    await expect(demo).toHaveScreenshot('hover.png')

    // 点击下拉
    await suffix.click()
    await page.waitForTimeout(100)

    // 悬浮item
    await menu.locator('.tiny-option').nth(2).hover()
    await page.waitForTimeout(100)
    await expect(wrap).toHaveScreenshot('item-hover.png')

    // 点击选中 item,收起弹窗
    await menu.locator('.tiny-option').nth(2).click()
    await expect(wrap).toHaveScreenshot('item-click.png')

    // 再次点击下拉
    await suffix.click()
    await page.waitForTimeout(100)
    await expect(wrap).toHaveScreenshot('item-checked.png')
  })

  test('配置式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#basic-usage')

    const demo = page.locator('#basic-usage .pc-demo')
    const select = demo.locator('.tiny-select').nth(1)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default1.png')

    await select.hover()
    await page.waitForTimeout(100)
    await expect(demo).toHaveScreenshot('hover1.png')

    await suffix.click()
    await page.waitForTimeout(100)
    await menu.locator('.tiny-option').nth(3).hover()
    await page.waitForTimeout(100)
    await expect(wrap).toHaveScreenshot('item-hover1.png')

    await menu.locator('.tiny-option').nth(3).click()
    await expect(wrap).toHaveScreenshot('item-click1.png')

    await suffix.click()
    await page.waitForTimeout(100)
    await expect(wrap).toHaveScreenshot('item-checked1.png')
  })
})
