<template>
    <div id="home">
        <div class="background-image">
            <div class="introduction">
                <span>{{$t("home.intro")}}</span>
            </div>
            <div class="contact">
                <div v-for="(c, i) in contact" :key="i">
                    <img @click="goTo(c.url)" :src="c.img" :alt="c.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import contactJson from "../../public/data/contact.json"

export default {
    name: "Home",
    data: () => ({
        contact: contactJson
    }),
    methods: {
        goTo(url) {
            window.open(url)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#home {
    height: 100vh;

    .background-image {
        width: 100%;
        height: 100%;
        background: url("../../public/img/selfie/car-selfie-blurred-720p.webp") no-repeat 60% 50%;
        background-size: cover;
    }

    .introduction {
        display: block;
        top: 25%;
        position: relative;
        padding: 10px;
        max-width: 470px;
        margin: auto;
        text-align: center;
        font-size: 1.5rem;
        color: $color-dark;
        border: solid 1px $accent;
        border-radius: 10px;
        background-color: $background-dark;

        .bold {
            font-weight: bold;
        }
    }

    .contact {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0 16px 16px 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border: solid 1px $accent;
        border-radius: 10px;
        justify-content: center;
        background-color: $background-dark;
        color: $color-dark;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px;

            img, .github-icon {
                height: 24px;
                width: auto;
                cursor: pointer;
            }

            span {
                font-size: 10px;
            }
        }
    }

    @media (min-width: $mq-m) {
        .contact {
            flex-direction: row;
        }
    }

    @media (min-width: $mq-l) and (max-width: $mq-xl) {
        .background-image {
            background: url('../../public/img/selfie/car-selfie-blurred-1080p.webp') no-repeat 60% 50%;
        }
    }

    @media (min-width: $mq-xl) and (max-width: $mq-xxl) {
        .background-image {
            background: url("../../public/img/selfie/car-selfie-blurred-1440p.webp") no-repeat 60% 50%;
        }
    }

    @media (min-width: $mq-xxl) {
        .background-image {
            background: url("../../public/img/selfie/car-selfie-blurred.webp") no-repeat 60% 50%;
        }
    }
}
</style>
