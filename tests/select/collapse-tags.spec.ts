import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('多选折叠tag默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#collapse-tags')

    const demo = page.locator('#collapse-tags .pc-demo')
    const select = demo.locator('.tiny-select').nth(0)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

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

  test('hoverExpand 折叠tag--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#collapse-tags')

    const demo = page.locator('#collapse-tags .pc-demo')
    const select = demo.locator('.tiny-select').nth(1)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)

    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default1.png')

    await select.hover()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('hover1.png')

    await suffix.nth(0).click()
    await page.waitForTimeout(200)

    await menu.locator('.tiny-option').nth(2).hover()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-hover1.png')

    await menu.locator('.tiny-option').nth(3).click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-click1.png')

    await suffix.nth(0).click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-checked1.png')
  })

  test('clickExpand 折叠tag--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#collapse-tags')

    const demo = page.locator('#collapse-tags .pc-demo')
    const select = demo.locator('.tiny-select').nth(2)
    const suffix = select.locator('.tiny-input__suffix-inner')
    const wrap = page.locator('.docs-tabs-wrap')
    const menu = page.locator('body > .tiny-select-dropdown').nth(0)
    const collapseButton = select.locator('.tiny-select__tags-collapse')

    // 默认显示2行
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default2.png')

    // 点击展开
    await collapseButton.click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('click-expand2.png')

    // 点击收起
    await select.locator('.tiny-select__collapse-text').click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('unexpand2.png')

    await suffix.nth(0).click()
    await page.waitForTimeout(200)

    await menu.locator('.tiny-option').nth(2).hover()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-hover2.png')

    await menu.locator('.tiny-option').nth(3).click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-click2.png')

    await suffix.nth(0).click()
    await page.waitForTimeout(200)
    await expect(wrap).toHaveScreenshot('item-checked2.png')
  })
})
