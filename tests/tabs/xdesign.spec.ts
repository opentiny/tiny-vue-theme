import { expect, test } from '@playwright/test'

test.describe('tabs 组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tabs#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // 点击第一项截图
    await demo.getByText('表单组件', { exact: true }).click()
    await expect(demo).toHaveScreenshot('basic-usage-click.png')
  })

  test('超长数据下拉展示--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tabs#more-show-all')
    const demo = page.locator('#more-show-all .pc-demo')
    const moreDemo = page.locator('#all-demos-container')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('more-show-all.png')

    // 更多按钮悬浮截图
    await demo.getByRole('button').click()
    await page.waitForSelector('.tiny-tabs-dropdown.tiny-tabs__more-dropdown')
    await expect(moreDemo).toHaveScreenshot('more-show-all-btn-hover.png')

    // 点击第一项截图
    await demo.getByRole('button').hover()
    await page
      .locator('div')
      .filter({ hasText: /^Tab 1$/ })
      .nth(1)
      .click()
    await expect(demo).toHaveScreenshot('more-show-all-click.png')

    // 第四项悬浮截图
    // await demo.getByText('Tab 4', { exact: true }).hover()
    // await expect(demo).toHaveScreenshot('more-show-all-hover.png')
  })

  test('分隔符--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tabs#tabs-separator')
    const demo = page.locator('#tabs-separator .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('tabs-separator.png')

    // 悬浮截图
    await demo.getByRole('tab', { name: '数据组件' }).first().hover()
    await expect(demo).toHaveScreenshot('tabs-separator-hover.png')
  })

  test('多层级 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tabs#tabs-second-layer')
    const demo = page.locator('#tabs-second-layer .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('tabs-second-layer.png')

    // 选中截图
    await demo.locator('[id="tab-系统镜像"]').getByText('系统镜像').click()
    await expect(demo).toHaveScreenshot('tabs-second-layer-selected.png')

    // 悬浮截图
    await page.getByRole('tab', { name: '系统镜像' }).hover()
    await expect(demo).toHaveScreenshot('tabs-second-layer-hover.png')

    // 货币截图
    await demo.getByText('选项二').click()
    await demo.locator('[id="tab-￥"]').getByText('￥').click()
    await expect(demo).toHaveScreenshot('tabs-second-layer-currency.png')
  })

  test('小尺寸 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tabs#size')
    const demo = page.locator('#size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')

    // 悬浮截图
    await page.getByText('Tab 2').nth(0).hover()
    await expect(demo).toHaveScreenshot('size-hover-0.png')
    await page.getByText('Tab 2').nth(1).hover()
    await expect(demo).toHaveScreenshot('size-hover-1.png')
    await page.getByText('Tab 2').nth(2).hover()
    await expect(demo).toHaveScreenshot('size-hover-2.png')
  })
})
