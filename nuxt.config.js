export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'myapp2',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [{
                src: "https://code.jquery.com/jquery-3.5.1.slim.min.js"
            },

            {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['@/assets/css/Global.css',
        '@/assets/css/bootstrap.min.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/directives.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    // render: {
    //     bundleRenderer: {
    //       directives: {
    //         cww: function (el, dir) {
    //           const style = el.data.style = {}
    //           style.backgroundColor = 'black'
    //         }
    //       }
    //     }
    //   },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: "https://jsonplaceholder.typicode.com/posts"
            // baseURL: "https://nuxttest-ac314.firebaseio.com/post"
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
                },
                // tokenRequired: true,
                // tokenType: 'bearer',
                // globalToken: true,
                // autoFetchUser: true
            }
        }
    }
}