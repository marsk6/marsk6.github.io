declare namespace NodeJS {
  interface ProcessEnv {
    BLOG: {
      title: string
      site: string
    },
    __DEV__: boolean
  }
}
