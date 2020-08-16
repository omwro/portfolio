<template>
    <div id="skills" class="section">
        <h1>Skills</h1>
        <div class="content">
            <div class="img-container">
                <div class="image">
                    <img src="../assets/languages/html.webp" alt="html">
                    <span>HTML5</span>
                    <Stars class="stars" :stars="8"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/css.webp" alt="css">
                    <span>CSS3</span>
                    <div class="stars">STARS</div>
                </div>
                <div class="image">
                    <img src="../assets/languages/javascript.webp" alt="javascript">
                    <span>JavaScript</span>
                    <div class="stars">STARS</div>
                </div>
                <img src="../assets/languages/php.webp" alt="php">
                <img src="../assets/languages/java.webp" alt="java">
                <img src="../assets/languages/mysql.webp" alt="mysql">
                <img src="../assets/languages/angular.webp" alt="angular">
                <img src="../assets/languages/vue.png" alt="vue">
                <img src="../assets/languages/sass.png" alt="sass">
                <img src="../assets/languages/typescript.webp" alt="typescript">
                <img src="../assets/languages/magento.webp" alt="magetno">
                <img src="../assets/languages/laravel.png" alt="laravel">
                <img src="../assets/languages/nodejs.webp" alt="nodejs">
            </div>
        </div>
    </div>
</template>

<script>
import Stars from "@/forms/Stars";
export default {
    name: "Skills",
    components: {Stars}
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

#skills {
    background-color: $light1;

    .content .img-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        margin: 0 15px;

        .image {
            width: 64px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: width 1s;
            transition-timing-function: ease-in-out;

            img {
                width: 64px;
                height: 64px;
                margin: 8px;
                transition: width 1s, height 1s;
                transition-timing-function: ease-in-out;
            }
            span, .stars {
                opacity: 0;
                text-align: center;
                transition-timing-function: ease-in-out;
            }

            &:hover {
                width: 128px;
                transition: width 1s;
                transition-timing-function: ease-in-out;

                img {
                    width: 128px;
                    height: 128px;
                    margin: 16px;
                    transition: width 1s, height 1s;
                    transition-timing-function: ease-in-out;
                }
                span, .stars {
                    opacity: 1;
                    transition-timing-function: ease-in-out;
                }
            }

        }

        img {
            width: 64px;
            height: 64px;
            margin: 8px;
            transition: width 1s, height 1s;
            transition-timing-function: ease-in-out;

            &:hover {
                width: 128px;
                height: 128px;
                margin: 16px;
                transition: width 1s, height 1s;
                transition-timing-function: ease-in-out;
            }
        }
    }
}

.dark #skills {
    background-color: $dark1;
    color: $light0;
}
</style>
