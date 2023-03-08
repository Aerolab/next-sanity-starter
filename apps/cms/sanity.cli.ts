import {defineCliConfig, getStudioEnvironmentVariables} from 'sanity/cli'
import path from 'path'

const env = getStudioEnvironmentVariables({
  envFile: {
    envDir: path.resolve(__dirname, '../../'),
    mode: process.env.NODE_ENV || 'development',
  },
})

export default defineCliConfig({
  api: {
    projectId: env.SANITY_STUDIO_PROJECT_ID,
    dataset: env.SANITY_STUDIO_DATASET,
  },
})
