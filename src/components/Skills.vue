<template>
    <div id="skills" class="section">
        <h1>Skills</h1>
        <div class="content">
            <div class="top">
                <img src="../assets/languages/html.webp" alt="html">
                <img src="../assets/languages/css.webp" alt="css">
                <img src="../assets/languages/javascript.webp" alt="javascript">
            </div>
            <div class="bottom">
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
    export default {
        name: "Skills"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #skills {
        background-color: $light1;

        .content > div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;

            &.top img {
                width: 128px;
                height: 128px;
                margin: 16px;
            }
            &.bottom img {
                width: 64px;
                height: 64px;
                margin: 8px;
            }
        }
    }

    .dark #skills {
        background-color: $dark1;
        color: $light0;
    }
</style>
