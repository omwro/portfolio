<template>
    <div id="home">
        <Selfie class="selfie-container"/>
        <div class="container">
            <div>{{ $t("home.intro1") }}</div>
            <div>{{ $t("general.firstname") }} {{ $t("general.lastname") }}</div>
            <div>{{ $t("home.catchphrase") }}</div>
            <div>
                <div class="socials">
                    <div v-for="(c, i) in contact" :key="i">
                        <a :href="c.url">
                            <img :src="c.img" :alt="c.name">
                        </a>
                    </div>
                </div>
                <a href="#about" class="readmore">
                    {{ $t('home.readmore') }}
                    <svg stroke="currentColor"
                         fill="currentColor"
                         stroke-width="0"
                         viewBox="0 0 16 16"
                         height="20px"
                         width="20px"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import contactJson from "../../public/data/contact.json"
import Selfie from "../components/Selfie";

export default {
    name: "Home",
    components: {Selfie},
    data: () => ({
        contact: contactJson
    })
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#home {
    height: fit-content;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
    row-gap: 64px;
    column-gap: 64px;
    align-content: flex-start;
    align-items: center;
    background-color: $background-light;

    @media (min-width: $mq-m) {
        padding-top: 200px;
    }

    .container {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 16px;
        width: fit-content;
        height: fit-content;
        margin: 0 8px;
        font-size: 2rem;
        border-radius: 10px;
        border: solid 2px $accent;
        background-color: $block-light;

        > div {
            padding: 2px 0;
        }

        > div:first-child {
            font-size: 1.2rem;
        }

        > div:nth-child(3) {
            font-size: 1.6rem;
        }

        > div:last-child {
            display: flex;
            flex-direction: row;
            margin-top: 32px;
            justify-content: space-between;
            flex-wrap: wrap;
            row-gap: 8px;

            .socials {
                display: flex;
                flex-direction: row;

                > div {
                    align-items: center;

                    a {
                        width: 24px;
                        height: 24px;
                        padding: 8px;

                        &:hover {
                            background-color: $accent;
                            border-radius: 8px;
                        }

                        img, .github-icon {
                            height: 24px;
                            width: auto;
                            cursor: pointer;
                            filter: invert(1);
                        }

                        span {
                            font-size: 10px;
                        }
                    }
                }
            }
        }

        .readmore {
            font-size: 1rem;
            padding: 8px;
            width: fit-content;
            border-radius: 10px;
            color: $color-light;
            display: flex;
            align-items: center;
            text-decoration: none;
            border: solid 2px $accent;

            &:hover, &:focus {
                background-color: $accent;
                color: $color-dark;

                svg {
                    color: $color-dark;
                }
            }

            svg {
                margin-left: 4px;
                animation-duration: 1s;
                animation-iteration-count: infinite;
                animation-name: bounce;
                animation-timing-function: ease;
                color: $color-light;
            }

            @keyframes bounce {
                0% {
                    transform: translateY(-5px);
                }
                50% {
                    transform: translateY(5px);
                }
                100% {
                    transform: translateY(-5px);
                }
            }
        }
    }

    .selfie-container {
        position: relative;
    }
}

#app.dark #home {
    background-color: $background-dark;
    color: $color-dark;

    .readmore {
        color: $color-dark;
    }

    .container {
        background-color: $block-dark;
    }

    .socials img {
        filter: unset;
    }

    svg {
        color: $color-dark;
    }
}
</style>
