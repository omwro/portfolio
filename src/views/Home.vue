<template>
    <div id="home">
        <div class="background-image">
            <div class="introduction">
                {{$t("home.intro1")}} <div>{{$t("general.firstname")}} {{$t("general.lastname")}}</div>
                {{$t("home.intro2")}} <div>{{$t("general.study")}}</div>
            </div>
            <a href="#about" class="readmore">
                {{$t('home.readmore')}}
                <svg stroke="currentColor"
                     fill="currentColor"
                     stroke-width="0"
                     viewBox="0 0 16 16"
                     height="20px"
                     width="20px"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </a>
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
        top: 100px;
        position: relative;
        padding: 10px;
        max-width: 750px;
        margin: auto;
        text-align: center;
        font-size: 2rem;
        color: $color-dark;
        font-weight: normal;

        > div {
            display: inline-block;
            font-weight: bold;
            background: $accent;
            padding: 4px;
            margin: 8px 0;
            border-radius: 3px;
            -webkit-box-shadow: 5px 5px 10px 5px $accent-dark;
            box-shadow: 5px 5px 10px 5px $accent-dark;
        }
    }

    .readmore {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 16px auto;
        padding: 8px;
        width: fit-content;
        border: solid 1px $accent;
        border-radius: 10px;
        background-color: $background-dark;
        color: $color-dark;
        display: flex;
        align-items: center;
        text-decoration: none;

        svg {
            margin-left: 4px;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-name: bounce;
            animation-timing-function: ease;
            color: $color-dark;
        }
        @keyframes bounce {
            0%   { transform: translateY(-5px); }
            50%  { transform: translateY(5px); }
            100% { transform: translateY(-5px); }
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
        .introduction {
            font-size: 3rem;
        }
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
