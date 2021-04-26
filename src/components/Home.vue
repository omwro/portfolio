<template>
    <div id="home" class="section">
        <div class="background-image">
            <div class="introduction">
                <span class="bold">Hi</span>, my name is <span class="bold">Omer Erdem</span>
                and welcome to my <span class="bold">portfolio website!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#home {
    width: 100%;
    height: 100%;

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

        padding: 0 10px;
        max-width: 470px;
        margin: auto;
        text-align: center;
        font-size: 1.5rem;
        color: $light1;


        .bold {
            font-weight: bold;
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
