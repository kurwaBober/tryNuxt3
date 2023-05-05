// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt','nuxt-proxy'],
    css: ['@/assets/css/index.css'],
    devServer: {
        https: {
            key: 'localhost-key.pem',
            cert: 'localhost.pem'
        }
    },
    ssr: true,
    proxy: {
        options: {
            target: 'https://dragon-stage.ltcenter.info/api',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api/': '/api/',
            },
            pathFilter: [
                '/api/',
            ],
        }
    },
    // nitro: {
    //     devProxy: {
    //       '/api': {
    //         target: 'https://dragon-stage.ltcenter.info',
    //           changeOrigin: true,
    //           prependPath: true,
    //           ws: true
    //       },
    //       '/api/app': {
    //         target: 'https://dragon-stage.ltcenter.info',
    //           changeOrigin: true,
    //           prependPath: true,
    //           ws: true,
    //           headers: {
    //               origin: 'https://dragon-stage.ltcenter.info'
    //           }
    //       }
    //     }
    // }
})
