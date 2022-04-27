import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    app: {
        head: {
            link: [{
                rel: 'icon', href: '/favicon.ico'
            }]
        }
    },
    runtimeCompiler: true,
    loading: {
        color: 'blue',
        height: '5px',
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },
    css: ['~/assets/css/main.css'],
})
