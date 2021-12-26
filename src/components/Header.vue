<template>
    <div id="header">
        <img alt="logo" class="logo" src="../../public/img/company/logo.webp">
        <h1>Omer Erdem</h1>
        <div class="hamburger" @click="openMenu">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "Header",
    methods: {
        openMenu() {
            $('#menu').addClass('active');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#header {
    width: 100%;
    height: 60px;
    top: 0;
    position: fixed;
    z-index: 10;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: $grey 2px solid;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
        margin: 16px;
    }

    .logo {
        max-width: 32px;
        max-height: 32px;
        @media (min-width: $mq-sm) {
            max-width: 48px;
            max-height: 48px;
        }
        @media (min-width: $mq-m) {
            max-width: 64px;
            max-height: 64px;
        }
    }

    h1 {
        font-size: 1.5rem;
        @media (min-width: $mq-sm) {
            font-size: 2rem;
        }
        @media (min-width: $mq-m) {
            font-size: 2.5rem;
        }
    }

    .hamburger {
        width: 25px;
        height: 25px;
        padding-top: 5px;
        display: flex;
        flex-direction: column;

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

.dark #header .logo {
    filter: invert(100%);
}

#header {
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: rgba(255, 255, 255, .9);
    }
}
#app.dark #header{
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: rgba(0, 0, 0, .9);
    }
}
</style>
