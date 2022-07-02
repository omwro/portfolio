<template>
    <div id="header" :class="onTop ? 'ontop' : ''">
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
    data: () => ({
       onTop: true
    }),
    created() {
        window.addEventListener('scroll', this.onScroll)
    },
    destroyed() {
        window.addEventListener('scroll', this.onScroll)
    },
    methods: {
        openMenu() {
            $('#menu').addClass('active');
        },
        onScroll(e) {
            this.onTop = e.currentTarget.scrollY <= 120;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#header {
    width: 100%;
    height: 60px;
    top: 0;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $light0;
    transition: 0.5s;
    border-bottom: $accent 2px solid;

    &.ontop {
        background-color: transparent;
        transition: 0.5s;
        border-bottom: none;
    }

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
        cursor: pointer;

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

#app.dark #header{
    background-color: $dark1;
    
    &.ontop {
        background-color: transparent;
        transition: 0.5s;
        border-bottom: none;
    }

    .logo {
        filter: invert(100%);
    }
}
</style>
