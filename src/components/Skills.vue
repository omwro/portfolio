<template>
    <div id="skills" class="section">
        <h1>Skills</h1>
        <div class="content">
            <div class="star-scheme">
                <stars stars="10" class="star5"/>
                <stars stars="8" class="star4"/>
                <stars stars="6" class="star3"/>
                <stars stars="4" class="star2"/>
                <stars stars="2" class="star1"/>
            </div>
            <div class="img-container" v-lazy-container="{ selector: 'img' }">
                <div>
                    <img data-src=./img/language/html.png class="star5" alt="html"/>
                    <div>HTML5</div>
                </div>
                <div>
                    <img data-src=./img/language/js.png class="star5" alt="js"/>
                    <div>JavaScript</div>
                </div>
                <div>
                    <img data-src=./img/language/php.png class="star4" alt="php"/>
                    <div>PHP</div>
                </div>
                <div>
                    <img data-src=./img/language/java.png class="star4" alt="java"/>
                    <div>Java</div>
                </div>
                <div>
                    <img data-src=./img/language/css.png class="star4" alt="css"/>
                    <div>CSS3</div>
                </div>
                <div>
                    <img data-src=./img/language/jquery.png class="star4" alt="jquery"/>
                    <div>jQuery</div>
                </div>
                <div>
                    <img data-src=./img/language/mysql.png class="star4" alt="mysql"/>
                    <div>MySQL</div>
                </div>
                <div>
                    <img data-src=./img/language/vue.png class="star4" alt="vue"/>
                    <div>Vue.js 2</div>
                </div>
                <div>
                    <img data-src=./img/language/angular.png class="star3" alt="angular"/>
                    <div>Angular 8</div>
                </div>
                <div>
                    <img data-src=./img/language/ts.png class="star3" alt="ts"/>
                    <div>TypeScript</div>
                </div>
                <div>
                    <img data-src=./img/language/kotlin.png class="star3" alt="kotlin"/>
                    <div>Kotlin</div>
                </div>
                <div>
                    <img data-src=./img/language/spring.png class="star3" alt="spring"/>
                    <div>Spring Boot</div>
                </div>
                <div>
                    <img data-src=./img/language/sass.png class="star3" alt="sass"/>
                    <div>Sass/Scss</div>
                </div>
                <div>
                    <img data-src=./img/language/git.png class="star3" alt="git"/>
                    <div>Git</div>
                </div>
                <div>
                    <img data-src=./img/language/json.png class="star3" alt="json"/>
                    <div>JSON</div>
                </div>
                <div>
                    <img data-src=./img/language/node.png class="star2" alt="node"/>
                    <div>Node.js</div>
                </div>
                <div>
                    <img data-src=./img/language/magento.png class="star2" alt="magento"/>
                    <div>Magento 2</div>
                </div>
                <div>
                    <img data-src=./img/language/laravel.png class="star2" alt="laravel"/>
                    <div>Laravel</div>
                </div>
                <div>
                    <img data-src=./img/language/rpi.png class="star2" alt="rpi"/>
                    <div>Raspberry Pi</div>
                </div>
                <div>
                    <img data-src=./img/language/apache.png class="star2" alt="apache"/>
                    <div>Apache 2</div>
                </div>
                <div>
                    <img data-src=./img/language/csharp.png class="star1" alt="csharp"/>
                    <div>C#</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="img-container" v-lazy-container="{ selector: 'img' }">
                <div>
                    <img data-src=./img/language/web.png class="star5" alt="web"/>
                    <div>Website</div>
                </div>
                <div>
                    <img data-src=./img/language/pcbuild.png class="star3" alt="pcbuild"/>
                    <div>Custom PC</div>
                </div>
                <div>
                    <img data-src=./img/language/android.png class="star2" alt="android"/>
                    <div>Android app</div>
                </div>
                <div>
                    <img data-src=./img/language/api.png class="star2" alt="api"/>
                    <div>Web API</div>
                </div>
                <div>
                    <img data-src=./img/language/unity.png class="star1" alt="unity"/>
                    <div>Unity game</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="img-container" v-lazy-container="{ selector: 'img' }">
                <div>
                    <img data-src=./img/language/fist.png class="star5" alt="fist"/>
                    <div>Hard worker</div>
                </div>
                <div>
                    <img data-src=./img/language/team.png class="star4" alt="team"/>
                    <div>Team player</div>
                </div>
                <div>
                    <img data-src=./img/language/problem.png class="star4" alt="problem"/>
                    <div>Problem<br>solving</div>
                </div>
                <div>
                    <img data-src=./img/language/creative.png class="star4" alt="light bulb"/>
                    <div>Creativity</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Stars from "@/forms/Stars";

export default {
    name: "Skills",
    components: {Stars},
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

#skills {
    background-color: $light1;

    .content .star-scheme {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        margin-bottom: 16px;

        > * {
            margin: 0 8px;
            padding: 4px;
            border-radius: 10px;
        }
    }

    .content .img-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        margin: 0 15px;

        img {
            width: 64px;
            height: 64px;
            padding: 8px;
            margin: 16px 8px 0 8px;
            border-radius: 25px;
        }
    }

    .star5 {
        background-color: $brilliant-red;
    }

    .star4 {
        background-color: $brilliant-blue;
    }

    .star3 {
        background-color: $brilliant-green;
    }

    .star2 {
        background-color: $brilliant-orange;
    }

    .star1 {
        background-color: $dark5;
    }

    .line {
        width: 95%;
        height: 1px;
        background-color: $grey;
        margin-top: 16px;
        align-self: center;
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
