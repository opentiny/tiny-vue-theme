import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('多选默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#multiple')

    const demo = page.locator('#multiple .pc-demo')
    const select = demo.locator('.tiny-select').nth(0)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)

    // await expect(select).toBeInViewport()
    await select.scrollIntoViewIfNeeded()
    await expect(wrap).toHaveScreenshot('default.png')

    await select.hover()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('hover.png')

    await suffix.nth(0).click()
    await page.waitForTimeout(200)

    await menu.locator('.tiny-option').nth(2).hover()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-hover.png')

    await menu.locator('.tiny-option').nth(3).click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-click.png')

    await suffix.nth(0).click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-checked.png')
  })

  // TODO: demo 很多，待补
})
