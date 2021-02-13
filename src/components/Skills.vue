<template>
    <div id="skills" class="section">
        <h1>Skills</h1>
        <div class="content">
            <div class="star-scheme">
                <stars class="star5" stars="9"/>
                <stars class="star4" stars="8"/>
                <stars class="star3" stars="6"/>
                <stars class="star2" stars="4"/>
                <stars class="star1" stars="2"/>
            </div>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img alt="html" class="star5" data-src=./img/language/html.png/>
                    <div>HTML5</div>
                </div>
                <div>
                    <img alt="js" class="star5" data-src=./img/language/js.png/>
                    <div>JavaScript</div>
                </div>
                <div>
                    <img alt="php" class="star4" data-src=./img/language/php.png/>
                    <div>PHP</div>
                </div>
                <div>
                    <img alt="java" class="star4" data-src=./img/language/java.png/>
                    <div>Java</div>
                </div>
                <div>
                    <img alt="css" class="star4" data-src=./img/language/css.png/>
                    <div>CSS3</div>
                </div>
                <div>
                    <img alt="jquery" class="star4" data-src=./img/language/jquery.png/>
                    <div>jQuery</div>
                </div>
                <div>
                    <img alt="mysql" class="star4" data-src=./img/language/mysql.png/>
                    <div>MySQL</div>
                </div>
                <div>
                    <img alt="vue" class="star4" data-src=./img/language/vue.png/>
                    <div>Vue.js 2</div>
                </div>
                <div>
                    <img alt="angular" class="star3" data-src=./img/language/angular.png/>
                    <div>Angular 8</div>
                </div>
                <div>
                    <img alt="ts" class="star3" data-src=./img/language/ts.png/>
                    <div>TypeScript</div>
                </div>
                <div>
                    <img alt="kotlin" class="star3" data-src=./img/language/kotlin.png/>
                    <div>Kotlin</div>
                </div>
                <div>
                    <img alt="spring" class="star3" data-src=./img/language/spring.png/>
                    <div>Spring Boot</div>
                </div>
                <div>
                    <img alt="sass" class="star3" data-src=./img/language/sass.png/>
                    <div>Sass/Scss</div>
                </div>
                <div>
                    <img alt="git" class="star3" data-src=./img/language/git.png/>
                    <div>Git</div>
                </div>
                <div>
                    <img alt="json" class="star3" data-src=./img/language/json.png/>
                    <div>JSON</div>
                </div>
                <div>
                    <img alt="node" class="star2" data-src=./img/language/node.png/>
                    <div>Node.js</div>
                </div>
                <div>
                    <img alt="magento" class="star2" data-src=./img/language/magento.png/>
                    <div>Magento 2</div>
                </div>
                <div>
                    <img alt="laravel" class="star2" data-src=./img/language/laravel.png/>
                    <div>Laravel</div>
                </div>
                <div>
                    <img alt="rpi" class="star2" data-src=./img/language/rpi.png/>
                    <div>Raspberry Pi</div>
                </div>
                <div>
                    <img alt="apache" class="star2" data-src=./img/language/apache.png/>
                    <div>Apache 2</div>
                </div>
                <div>
                    <img alt="csharp" class="star1" data-src=./img/language/csharp.png/>
                    <div>C#</div>
                </div>
            </div>
            <div class="line"></div>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img alt="web" class="star5" data-src=./img/language/web.png/>
                    <div>Website</div>
                </div>
                <div>
                    <img alt="pcbuild" class="star3" data-src=./img/language/pcbuild.png/>
                    <div>Custom PC</div>
                </div>
                <div>
                    <img alt="android" class="star2" data-src=./img/language/android.png/>
                    <div>Android app</div>
                </div>
                <div>
                    <img alt="api" class="star2" data-src=./img/language/api.png/>
                    <div>Web API</div>
                </div>
                <div>
                    <img alt="unity" class="star1" data-src=./img/language/unity.png/>
                    <div>Unity game</div>
                </div>
            </div>
            <div class="line"></div>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img alt="fist" class="star5" data-src=./img/language/fist.png/>
                    <div>Hard worker</div>
                </div>
                <div>
                    <img alt="team" class="star4" data-src=./img/language/team.png/>
                    <div>Team player</div>
                </div>
                <div>
                    <img alt="problem" class="star4" data-src=./img/language/problem.png/>
                    <div>Problem<br>solving</div>
                </div>
                <div>
                    <img alt="light bulb" class="star4" data-src=./img/language/creative.png/>
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

<style lang="scss" scoped>
@import "src/styles/variables";

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
    font-size: 0.9rem;

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

.programmer #skills {
    display: none;
}
</style>
