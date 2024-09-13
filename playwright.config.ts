import Config from './src/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

/**
 *  本地开发环境链接：'http://localhost:3101'
 *  本地官网链接：'https://tinyuidesign-alpha.cloudbu.xxx.com'
 */
const origin = 'http://localhost:3101'

const baseURL = `${origin}/tiny-vue/zh-CN/smb-theme/components/`
const devServerCommon = 'pnpm run -w dev'

const testDir = path.join(__dirname, './tests')

export default Config({
  testDir,
  baseURL,
  storageState: {
    origins: [
      {
        origin,
        localStorage: [{ name: 'tiny-vue-demo-mode', value: 'single' }]
      }
    ]
  },
  devServerCommon
})
