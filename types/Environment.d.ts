/* eslint-disable unused-imports/no-unused-vars */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV_COMMUNITY_API_KEY: string;
      INSTAGRAM_ACCESS_TOKEN: string;
    }
  }
}

export {}