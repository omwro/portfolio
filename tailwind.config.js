module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            screens: {
              sm: '480px'
            },
            colors: {
                primary: {
                    DEFAULT: '#014F86',
                    light: '#3B6FAA',
                    dark: '#01497C'
                }
            }
        }
    },
    plugins: []
}