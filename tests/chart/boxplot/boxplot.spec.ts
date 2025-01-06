import { test, expect } from '../fixtures'

test('base', async ({ page }) => {
  await page.goto('chart-boxplot#boxplot-base')
  const chart = page.locator('#boxplot-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('multiple', async ({ page }) => {
  await page.goto('chart-boxplot#boxplot-multiple')
  const chart = page.locator('#boxplot-multiple .hui-chart')
  await expect(chart).toHaveScreenshot('multiple.png')
})
