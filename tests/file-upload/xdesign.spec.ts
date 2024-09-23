import { expect, test } from '@playwright/test'

test.describe('file-upload 组件xdesign规范', () => {
  test('定义上传提示 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('file-upload#custom-upload-tip')
    const demo = page.locator('#custom-upload-tip .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-tip.png')

    // 上传成功文件hover截图
    const test1 = demo.locator('a.tiny-tooltip.tiny-upload-list__item-name').filter({ hasText: 'test1' })
    await expect(test1).toHaveCount(1)
    await test1.hover()
    await expect(demo).toHaveScreenshot('custom-tip-test1-hover.png')

    // 上传失败文件hover截图
    const test2 = demo.locator('a.tiny-tooltip.tiny-upload-list__item-name').filter({ hasText: 'test2' })
    await expect(test2).toHaveCount(1)
    await test2.hover()
    await expect(demo).toHaveScreenshot('custom-tip-test2-hover.png')
  })

  test('表单校验 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('file-upload#form-validation')
    const demo = page.locator('#form-validation .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('form-validation.png')

    // 点击上传校验截图
    await page.getByRole('button', { name: '提交' }).click()
    await expect(demo).toHaveScreenshot('form-validation-click.png')
  })

  test('照片墙 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('file-upload#picture-card')
    const demo = page.locator('#picture-card .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('picture-card.png')

    // 上传成功hover截图
    await demo.locator('.tiny-upload-list__item.is-success > .tiny-upload-list__item-actions').first().hover()
    await expect(demo).toHaveScreenshot('picture-card-success-hover.png')
    // 图片预览截图
    const dialogBox = page.locator('.tiny-dialog-box').first()
    await demo
      .locator('.tiny-upload-list__item.is-success > .tiny-upload-list__item-actions')
      .first()
      .getByRole('img')
      .first()
      .click()
    await expect(dialogBox).toHaveScreenshot('picture-card-success-preview.png')
    await dialogBox.locator('.tiny-dialog-box__close').click()

    // 上传失败hover截图
    await demo.locator('.tiny-upload-list__item.is-fail > .tiny-upload-list__item-actions').first().hover()
    await expect(page.locator('#picture-card')).toHaveScreenshot('picture-card-fail-hover.png')
  })
})
