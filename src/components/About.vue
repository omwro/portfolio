<template>
    <div id="about">
        <h1>Who am I ?</h1>
        <div class="content">
            <div class="selfie">
                <img src="../assets/selfies/selfie.webp" alt="selfie">
                <span>Download Resume</span>
            </div>
            <div class="intro">
                <div>
                    My name is Omer Erdem and I am a second year Software Engineer student at the
                    Amsterdam University of Applied Sciences. I am currently 21 years old and everyday
                    in search for new challenges to improve my skills to become a Full Stack Developer.
                </div>
                <div>
                    I will design and build you an (web / mobile) application or website while I think with you
                    along just like for the companies i have worked with before.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #about {
        background-color: $light1;

        .content {
            > div {
                margin: 10px;
            }

            @media (min-width: 480px) {
                margin: 20px 50px;
            }
            @media (min-width: 768px) {
                margin: 20px 100px;
                flex-direction: row;
            }
        }

        .selfie {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                height: 450px;
                width: 300px;
                border: solid $light5 2px;
            }
        }

        .intro {
            font-size: 18px;
            line-height: 1.6;
            max-width: 650px;

            > div {
                padding-bottom: 20px;
            }
        }
    }
</style>
