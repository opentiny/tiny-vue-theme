import { expect, test } from '@playwright/test'
import path from 'path'

test.describe('pop-upload 组件xdesign规范', () => {
  test('自定义上传提示 --UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pop-upload#upload-tip')
    const demo = page.locator('#upload-tip .pc-demo')
    const modal = page.locator('.tiny-popupload__modal > .tiny-modal__box').locator('visible=true')
    await expect(demo).toBeInViewport()
    await demo.getByRole('button', { name: '添加文件' }).click()
    await expect(modal).toHaveCount(1)
    await expect(modal).toHaveScreenshot('upload-tip.png')

    // 点击开始上传截图
    const lists = modal.locator('.tiny-popupload__dialog-table-item')
    const uploadBtn = modal.getByRole('button', { name: '添加文件' })
    const currentPath1 = path.resolve('tests/pop-upload/测试.jpg')
    const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), uploadBtn.click()])
    await fileChooser.setFiles(currentPath1)
    await expect(lists).toHaveCount(1)
    await expect(modal).toHaveScreenshot('upload-tip-list.png')

    // 点击删除确认截图
    await modal.getByText('删除', { exact: true }).first().click()
    await expect(modal).toHaveScreenshot('upload-tip-list-popover.png')

    // 上传后的截图
    await modal.getByRole('button', { name: '开始上传' }).click()
    await expect(page.getByText('共1条数据：其中1条出错，请修改后重试')).toHaveCount(1)
    await expect(modal).toHaveScreenshot('upload-tip-list-fail.png')
  })
})
