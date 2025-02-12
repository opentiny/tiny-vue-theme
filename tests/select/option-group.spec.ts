import { expect, test } from '@playwright/test'

test.describe('select 组件xdesign规范', () => {
  test('分组 + 多选 + 面板可搜索--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#option-group')

    const demo = page.locator('#option-group .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await select.nth(0).locator('.tiny-input__suffix-inner').nth(0).click()

    await expect(wrap).toHaveScreenshot('group0.png')
  })

  test('单选分组 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#option-group')

    const demo = page.locator('#option-group .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await select.nth(1).locator('.tiny-input__suffix-inner').click()

    await expect(wrap).toHaveScreenshot('group1.png')
  })

  test('多选分组 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#option-group')

    const demo = page.locator('#option-group .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await select.nth(2).locator('.tiny-input__suffix-inner').click()

    await expect(wrap).toHaveScreenshot('group2.png')
  })

  test('分组 + 多选 + 可搜索--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('select#option-group')

    const demo = page.locator('#option-group .pc-demo')
    const select = demo.locator('.tiny-select')
    const wrap = page.locator('.docs-tabs-wrap')

    await expect(demo).toBeInViewport()
    await select.nth(3).locator('.tiny-input__suffix-inner').click()

    await expect(wrap).toHaveScreenshot('group3.png')
  })
})
