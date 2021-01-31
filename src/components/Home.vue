<template>
    <div id="home" class="section">
        <div class="background-image">
            <div class="introduction">
                <!--<span class="bold">Hi</span>, my name is <span class="bold">Omer Erdem</span>
                and welcome to my <span class="bold">portfolio website!</span>-->
                Welcome to the new portfolio page of <span class="bold">Omer Erdem</span>.
                It is still under construction and will be ready in <span class="bold">Q1 2021!</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #home {
        width: 100%;
        height: 100%;

        .background-image {
            width: 100%;
            height: 100%;
            background: url("../assets/selfies/car-selfie-blurred-720p.webp") no-repeat 60% 50%;
            background-size: cover;
        }

        .introduction {
            display: block;
            top: 25%;
            position: relative;

            padding: 0 10px;
            max-width: 470px;
            margin: auto;
            text-align: center;
            font-size: 2.6rem;
            color: $light0;

            .bold {
                font-weight: bold;
            }
        }

        @media (min-width: $breakpoint-l) and (max-width: $breakpoint-xl) {
            .background-image {
                background: url("../assets/selfies/car-selfie-blurred-1080p.webp") no-repeat 60% 50%;
            }
        }

        @media (min-width: $breakpoint-xl) and (max-width: $breakpoint-xxl) {
            .background-image {
                background: url("../assets/selfies/car-selfie-blurred-1440p.webp") no-repeat 60% 50%;
            }
        }

        @media (min-width: $breakpoint-xxl) {
            .background-image {
                background: url("../assets/selfies/car-selfie-blurred.webp") no-repeat 60% 50%;
            }
        }
    }
</style>
