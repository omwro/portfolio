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

<style scoped lang="scss">
    @import "src/styles/variables";

    #home {
        width: 100%;
        height: 100%;

        .background-image {
            width: 100%;
            height: 100%;

            background: url("../assets/selfies/car-selfie.webp") no-repeat 60% 50%;
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
    }
</style>
