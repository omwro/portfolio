<template>
    <div id="menu">
        <div class="header">
            <div class="title">Menu</div>
            <div class="cross" @click="closeMenu">
                <span class="cross-one"></span>
                <span class="cross-two"></span>
            </div>
        </div>
        <div id="menulist">
            <a v-for="n in nav"
               :href="n.href"
               @click="closeMenu"
               :key="n.name">{{ $t(n.translate) }}</a>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import json from "../../public/data/navigation.json"

export default {
    name: "Menu",
    data: () => ({
        nav: json
    }),
    created() {
        $(document).on('click', (e) => {
            if (
                $(e.target)[0].id !== "menu" &&
                $("#menu").hasClass("active") &&
                !$(e.target)[0].className.includes("hamburger")
            ) {
                this.closeMenu();
            }
        });
    },
    methods: {
        closeMenu() {
            $('#menu').removeClass('active');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#menu {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    background-color: $background-light;
    z-index: 15;
    transition: 0.5s;
    border-left: solid 0 transparent;

    &.active {
        width: 100%;
        border-left: solid 2px $accent;
        transition: 0.5s;
        transition-timing-function: ease-in-out;

        @media (min-width: $mq-sm) {
            width: 250px;
        }
    }

    .header {
        display: flex;
        flex-direction: row;
        margin: 16px;
        align-items: center;
        font-size: 1.5rem;
        justify-content: space-between;

        .title {
            border-bottom: solid 2px $accent;
        }

        .cross {
            width: 25px;
            height: 25px;
            display: flex;
            flex-direction: column;
            position: relative;
            cursor: pointer;

            span {
                width: 100%;
                position: absolute;
                border-top: solid 3px;
                top: 10px;
            }

            .cross-one {
                transform: rotate(45deg);
            }

            .cross-two {
                transform: rotate(135deg);
            }

            &:hover {
                .cross-one {
                    transform: rotate(135deg);
                    transition: 0.3s;
                }

                .cross-two {
                    transform: rotate(225deg);
                    transition: 0.3s;
                }
            }
        }
    }

    #menulist {
        margin-left: 6px;

        a {
            display: flex;
            font-size: 1rem;
            color: inherit;
            text-decoration: none;
            margin: 16px;
            justify-content: center;

            &:hover {
                color: $accent;
            }
        }
    }
}

#app.dark #menu {
    background-color: $background-dark;
}
</style>
