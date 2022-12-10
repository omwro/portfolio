<template>
    <main id="app" :class="dark ? 'dark' : ''">
        <router-view />
    </main>
</template>

<script>
export default {
    name: "App",
    computed: {
        dark() {
            return this.$store.state.darkmode;
        },
    },
};
</script>

<style lang="scss">
@import "variables";

html,
body,
#app {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: sans-serif;
    scroll-behavior: smooth;
}

#app {
    section {
        color: $color-light;
        background-color: $background-light;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 100px 16px 50px;

        &.full-height {
            padding-top: 50px;
            min-height: calc(100vh - 50px - 50px - 32px);
        }

        > * {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        h1 {
            margin: 0 auto 10px auto;
            text-align: center;
            font-weight: bold;
            border-bottom: solid 2px $accent;
            font-size: 2rem;

            &.small {
                margin: 25px auto 10px auto;
                font-size: 1.25rem;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 1rem;
            margin: 2rem auto;
        }

        .hide {
            display: none;
        }

        a {
            color: unset;
            text-decoration: unset;
        }
    }

    &.dark {
        #header,
        #menu {
            color: $light2;
        }

        section {
            color: $light2;
            background-color: $background-dark;
        }
    }
}
</style>
