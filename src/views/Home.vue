<template>
    <section id="home">
        <div class="background-image">
            <div class="introduction">
                <span>{{$t("home.intro")}}</span>
            </div>
            <div class="contact">
                <div>
                    <img @click="goToMail" src="img/contact/mail.png" alt="mail">
                </div>
                <div>
                    <img @click="goToDiscord" src="img/contact/discord.png" alt="discord">
                </div>
                <div>
                    <img @click="goToLinkedin" src="img/contact/linkedin.png" alt="linkedin">
                </div>
                <div>
                    <font-awesome-icon @click="goToGithub" :icon="['fab', 'github']" class="github-icon"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Home",
    methods: {
        goToMail() {
            window.open("mailto:public.omererdem@outlook.com")
        },
        goToDiscord() {
            window.open("https://discord.gg/UnhW4ykFFp")
        },
        goToLinkedin() {
            window.open("https://www.linkedin.com/in/omer-erdem-179745153/")
        },
        goToGithub() {
            window.open("https://github.com/omwro")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

section {
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
        color: $light1;
        border: solid 1px white;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        .bold {
            font-weight: bold;
        }
    }

    .contact {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0 25px 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: solid 1px white;
        border-radius: 10px;
        justify-content: center;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: white;

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
.contact, .introduction {
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: rgba(0, 0, 0, .5);
    }
}
</style>
