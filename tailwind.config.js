module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
              sm: '480px'
            },
            colors: {
                primary: {
                    DEFAULT: '#014F86',
                    light: '#3B6FAA',
                    dark: '#01497C',
                    'bg-light': '#eef4fc',
                    'bg-dark': '#001e34',
                    'block-light': '#d9e6f2',
                    'block-dark': '#00385D',
                    'text-light': '#ebebeb',
                    'text-dark': '#141414',
                    'light2': '#e1e1e1',
                }
            },
            borderWidth: {
                DEFAULT: '2px'
            },
        }
    },
    plugins: []
}