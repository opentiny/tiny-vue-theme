import { expect, test } from '@playwright/test'

test.describe('steps 组件xdesign规范', () => {
  test('横向单链型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('steps#line-horizontal')
    const demo = page.locator('#line-horizontal .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('line-horizontal.png')
  })

  test('垂直点状型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('steps#line-dot')
    const demo = page.locator('#line-dot .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('line-dot.png')
  })

  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('steps#size')
    const demo = page.locator('#size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')
  })

  test('特殊样式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('steps#slot-item-footer')
    const demo = page.locator('#slot-item-footer .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('slot-item-footer.png')

    // hover
    await page
      .getByText('创建桶（超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题）')
      .first()
      .hover()
    await expect(demo).toHaveScreenshot('slot-item-footer-hover.png')
  })
})
