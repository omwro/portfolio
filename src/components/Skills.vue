<template>
    <div id="skills" class="section">
        <h1>Skills</h1>
        <div class="content">
            <div class="img-container">
                <div class="image">
                    <img src="../assets/languages/html.webp" alt="html">
                    <span>HTML</span>
                    <Stars class="stars html" stars="8"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/css.webp" alt="css">
                    <span>CSS</span>
                    <Stars class="stars" stars="7"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/javascript.webp" alt="javascript">
                    <span>JavaScript</span>
                    <Stars class="stars" stars="9"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/php.webp" alt="php">
                    <span>PHP</span>
                    <Stars class="stars" stars="7"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/java.webp" alt="java">
                    <span>Java</span>
                    <Stars class="stars" stars="7"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/mysql.webp" alt="mysql">
                    <span>MySQL</span>
                    <Stars class="stars" stars="8"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/angular.webp" alt="angular">
                    <span>Angular</span>
                    <Stars class="stars" stars="7"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/vue.png" alt="vue">
                    <span>Vue</span>
                    <Stars class="stars" stars="7"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/sass.png" alt="sass">
                    <span>Sass</span>
                    <Stars class="stars" stars="6"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/typescript.webp" alt="typescript">
                    <span>TypeScript</span>
                    <Stars class="stars" stars="6"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/magento.webp" alt="magento">
                    <span>Magento</span>
                    <Stars class="stars" stars="6"></Stars>
                </div>
                <div class="image">
                    <img src="../assets/languages/laravel.png" alt="laravel">
                    <span>Laravel</span>
                    <Stars class="stars" stars="6"></Stars>
                </div>
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
            margin: 8px;

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
  .programmer #skills {
    display: none;
  }
</style>
