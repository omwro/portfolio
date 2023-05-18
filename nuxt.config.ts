// https://nuxt.com/docs/api/configuration/nuxt-config
import nl from "./locales/nl.json";
import en from "./locales/en.json";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-icon',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    css: ['@/assets/css/tailwind.css'],
    i18n: {
        locales: ['nl', 'en'],
        defaultLocale: 'nl',
        strategy: 'no_prefix',
        vueI18n: {
            legacy: false,
            locale: 'nl',
            fallbackLocale: 'en',
            messages: {nl, en}
        },
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
            redirectOn: 'root',
        }
    },
    imports: {
        dirs: ['./stores'],
    },
})
