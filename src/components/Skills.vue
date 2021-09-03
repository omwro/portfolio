<template>
    <div id="skills" class="section">
        <h1>{{$t('skills.title')}}</h1>
        <div class="content">
            <div class="star-scheme">
                <stars class="star5" stars="9"/>
                <stars class="star4" stars="8"/>
                <stars class="star3" stars="6"/>
                <stars class="star2" stars="4"/>
                <stars class="star1" stars="2"/>
            </div>
            <h1 class="small">{{$t('skills.languages')}}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img class="star5" data-src=./img/language/html.png alt="html"/>
                    <div>HTML5</div>
                </div>
                <div>
                    <img class="star5" data-src=./img/language/js.png alt="js"/>
                    <div>JavaScript</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/php.png alt="php"/>
                    <div>PHP</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/java.png alt="java"/>
                    <div>Java</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/css.png alt="css"/>
                    <div>CSS3</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/ts.png alt="ts"/>
                    <div>TypeScript</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/kotlin.png alt="kotlin"/>
                    <div>Kotlin</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/json.png alt="json"/>
                    <div>JSON</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/xml.png alt="json"/>
                    <div>XML</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/node.png alt="node"/>
                    <div>Node.js</div>
                </div>
                <div>
                    <img class="star1" data-src=./img/language/csharp.png alt="csharp"/>
                    <div>C#</div>
                </div>
                <div>
                    <img class="star1" data-src=./img/language/aspnet.png alt="csharp"/>
                    <div>ASP.Net</div>
                </div>
            </div>
            <h1 class="small">{{$t('skills.frameworks')}}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img class="star4" data-src=./img/language/vue.png alt="vue"/>
                    <div>Vue.js 2</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/jquery.png alt="jquery"/>
                    <div>jQuery</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/angular.png  alt="angular"/>
                    <div>Angular 8</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/react.png  alt="angular"/>
                    <div>React</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/spring.png alt="spring"/>
                    <div>Spring Boot</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/sass.png alt="sass"/>
                    <div>Sass/Scss</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/magento.png alt="magento"/>
                    <div>Magento 2</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/laravel.png alt="laravel"/>
                    <div>Laravel</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/bootstrap.png alt="bootstrap"/>
                    <div>Bootstrap</div>
                </div>
                <div>
                    <img class="star1" data-src=./img/language/knockoutjs.png alt="knockoutjs"/>
                    <div>Knockout.js</div>
                </div>
            </div>
            <h1 class="small">{{$t('skills.environments')}}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img class="star4" data-src=./img/language/windows.png alt="windows"/>
                    <div>Windows</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/mysql.png alt="mysql"/>
                    <div>MySQL</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/git.png alt="git"/>
                    <div>Git</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/macos.png alt="macos"/>
                    <div>MacOS</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/rpi.png alt="rpi"/>
                    <div>Raspberry Pi</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/apache.png alt="apache"/>
                    <div>Apache 2</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/mongodb.png alt="mongodb"/>
                    <div>MongoDB</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/firebase.png alt="firebase"/>
                    <div>Firebase</div>
                </div>
            </div>
            <h1 class="small">{{$t('skills.projects')}}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img class="star5" data-src=./img/language/web.png alt="web"/>
                    <div>Website Builder</div>
                </div>
                <div>
                    <img class="star3" data-src=./img/language/pcbuild.png alt="pcbuild"/>
                    <div>Custom Desktop PC Builder</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/android.png alt="android"/>
                    <div>Android App</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/api.png alt="api"/>
                    <div>Web API</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/webscraper.png alt="webscraper"/>
                    <div>Web Scraper</div>
                </div>
                <div>
                    <img class="star2" data-src=./img/language/minecraft.png alt="minecraft"/>
                    <div>Minecraft Plugin</div>
                </div>
                <div>
                    <img class="star1" data-src=./img/language/discord.png alt="discord"/>
                    <div>Discord Bot</div>
                </div>
                <div>
                    <img class="star1" data-src=./img/language/unity.png alt="unity"/>
                    <div>Unity Game</div>
                </div>
                <div>
                    <img class="star1" data-src=./img/language/magento.png alt="unity"/>
                    <div>E-Commerce Webshop</div>
                </div>
            </div>
            <h1 class="small">{{$t('skills.competencies')}}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div>
                    <img class="star5" data-src=./img/language/fist.png alt="fist"/>
                    <div>{{$t('skills.hardworker')}}</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/team.png alt="team"/>
                    <div>{{$t('skills.teamplayer')}}</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/problem.png alt="problem"/>
                    <div>{{$t('skills.problemsolving')}}</div>
                </div>
                <div>
                    <img class="star4" data-src=./img/language/creative.png alt="light bulb"/>
                    <div>{{$t('skills.creativity')}}</div>
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

.section .content h1.small {
    margin-bottom: 0;
}

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
        border-radius: 25px;
    }

    > div {
        max-width: 96px;
        margin: 16px 8px 8px;
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
