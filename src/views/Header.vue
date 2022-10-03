<template>
    <div id="header">
        <div class="header-left">
            <a href="#home">
                <img alt="logo" class="logo" src="../../public/img/company/logo.webp">
            </a>
        </div>
        <div class="header-right">
            <nav class="navbar">
                <template v-for="n in nav">
                    <a v-if="n.name !== 'Home'"
                       :key="n.name"
                       :href="n.href">{{ $t(n.translate) }}</a>
                </template>
                <template v-if="dark">
                    <a><img @click="onDarkModeToggle" src="img/actions/sun.png" class="icon" alt="sun"></a>
                </template>
                <template v-else>
                    <a><img @click="onDarkModeToggle" src="img/actions/moon.png" class="icon" alt="moon"></a>
                </template>
                <template v-if="lan === 'nl'">
                    <a><img @click="setLanguage('en')" src="img/actions/usa.png" class="icon" alt="en"></a>
                </template>
                <template v-else>
                    <a><img @click="setLanguage('nl')" src="img/actions/nl.png" class="icon" alt="en"></a>
                </template>
            </nav>
            <div class="hamburger" @click="openMenu">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </div>
        </div>
    </div>
</template>

<script>
import json from "../../public/data/navigation.json"

export default {
    name: "Header",
    data: () => ({
        nav: json,
    }),
    computed: {
        dark() {
            return this.$store.state.darkmode
        },
        lan() {
            return this.$i18n.locale
        }
    },
    methods: {
        openMenu() {
            this.$store.commit('toggleMenu')
        },
        onDarkModeToggle() {
            this.$store.commit('toggleDarkmode')
        },
        setLanguage(lan) {
            this.$i18n.locale = lan
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#app #header {
    width: calc(100% - 24px - 4px - 32px);
    height: 32px;
    padding: 6px 12px;
    margin: 16px;
    top: 0;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $background-light;
    transition: 0.5s;
    border: $accent 2px solid;
    border-radius: 50px;

    .header-left, .header-right {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .header-left {
        .logo {
            max-height: 24px;
            margin: auto;
            cursor: pointer;
        }
    }

    .header-right {
        .navbar {
            display: none;

            a {
                color: black;
                text-decoration: none;
                font-size: 16px;
                margin: 0 8px;
                align-self: center;

                &:hover {
                    color: $accent;
                    border-bottom: solid 1px red;
                }
            }

            @media (min-width: $mq-m) {
                display: flex;
            }
        }

        .hamburger {
            width: 25px;
            height: 25px;
            padding-top: 5px;
            display: flex;
            flex-direction: column;
            cursor: pointer;

            @media (min-width: $mq-m) {
                display: none;
            }

            span {
                width: 100%;
                height: 25%;
                border-top: solid 3px;
                transition: 0.3s;
            }

            &:hover .hamburger-top,
            &:hover .hamburger-bottom {
                width: 50%;
                margin: 0 25%;
                transition: 0.3s;
            }
        }
    }
}

.icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

#app.dark #header {
    background-color: $background-dark;

    &.ontop {
        background-color: transparent;
        transition: 0.5s;
        border-bottom: none;
    }

    .navbar a {
        color: $block-light;
    }

    .logo {
        filter: invert(100%);
    }
}
</style>
