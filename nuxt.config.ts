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
        '@nuxt/image-edge',
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    // @ts-ignore
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
    runtimeConfig: {
        public: {
            siteUrl: 'https://omererdem.nl',
            siteName: 'Omer Erdem Portfolio Website',
            siteDescription: 'Omer Erdem is a Software Engineer graduated in Amsterdam, The Netherlands. Take a look at his Portfolio Website so you can get to know him better, look at which type projects he has made, check his skills in programming and get in contact in case you have questions.',
            language: 'nl-NL',
        },
        indexable: true
    },
})
