<template>
    <div id="projects" class="section">
        <h1>Projects</h1>
        <div class="content">
            <span class="swipe-txt"><font-awesome-icon :icon="['fas', 'hand-pointer']" class="icon linkedin"/> Swipe to scroll</span>
            <vue-tiny-slider ref="tinySlider"
                             :auto-height="true"
                             :center="true"
                             :controls="false"
                             :gutter="10"
                             :items="1"
                             :lazyload="true"
                             :loop="false"
                             :mouse-drag="true"
                             :prevent-scroll-on-touch="'auto'">
                <div>
                    <img v-lazy="'./img/project/project_website.webp'" alt="website"
                         class="tns-lazy-img" data-src="./img/project/project_website.webp">
                    <div class="carousel-title">Portfolio website</div>
                    <div class="carousel-description">
                        Creating a good looking personal portfolio website have been a hobby project for years
                        with multiple attempts in different languages and frameworks. This website will be
                        continuously developed on, in order to improve my skills and to experiment with new features.
                    </div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star5" data-src=./img/language/js.png alt="js"/>
                        <img class="star4" data-src=./img/language/php.png alt="php"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/jquery.png alt="jquery"/>
                        <img class="star4" data-src=./img/language/vue.png alt="vue"/>
                        <img class="star3" data-src=./img/language/sass.png alt="sass"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_themobilecompany.webp'" alt="themobilecompany"
                         class="tns-lazy-img" data-src="./img/project/project_themobilecompany.webp">
                    <div class="carousel-title">NMEA Sensor Reader app</div>
                    <div class="carousel-description">
                        A project for The Mobile Company that would like to have a SDK that supports the NMEA 0183
                        protocol, which can also automatically search your Wi-Fi and Bluetooth network in order to
                        connect with the sensors and display all the data inside a simple android application. The SDK
                        can also be used as a library for your application.
                    </div>
                    <div class="carousel-languages">
                        <img class="star3" data-src=./img/language/kotlin.png alt="kotlin"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_metafy.webp'" alt="metafy"
                         class="tns-lazy-img" data-src="./img/project/project_metafy.webp">
                    <div class="carousel-title">Spotify MetaFy app</div>
                    <div class="carousel-description">
                        An Android application that uses the Spotify API to get your spotify account song and playlist
                        data. You can assign your custom tags to songs and create custom playlists.
                    </div>
                    <div class="carousel-languages">
                        <img class="star3" data-src=./img/language/kotlin.png alt="kotlin"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_dashboard.webp'" alt="dashboard"
                         class="tns-lazy-img" data-src="./img/project/project_dashboard.webp">
                    <div class="carousel-title">Bold Commerce Support Dashboard</div>
                    <div class="carousel-description">
                        A support dashboard that helps the management to see all the important data in a glimpse of an
                        eye. Using the ActiveCollab API in order to collect task and time management data, while also
                        following the Material IO guidelines.
                    </div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star5" data-src=./img/language/js.png alt="js"/>
                        <img class="star4" data-src=./img/language/php.png alt="php"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/jquery.png alt="jquery"/>
                        <img class="star4" data-src=./img/language/mysql.png alt="mysql"/>
                        <img class="star4" data-src=./img/language/vue.png alt="vue"/>
                        <img class="star3" data-src=./img/language/sass.png alt="sass"/>
                        <img class="star2" data-src=./img/language/laravel.png alt="laravel"/>
                    </div>
                </div>
                <div>
                    <img alt="aquadis" class="tns-lazy-img" data-src="./img/project/project_aquadis.webp">
                    <div class="carousel-title">Aquadis texting website</div>
                    <div class="carousel-description">
                        A school project for Aquadis that would like to have an texting based game which allows
                        the players to place messages on the maps and other people can see them if they are nearby
                        and respond to it.
                    </div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star5" data-src=./img/language/js.png alt="js"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/java.png alt="java"/>
                        <img class="star4" data-src=./img/language/mysql.png alt="mysql"/>
                        <img class="star3" data-src=./img/language/angular.png alt="angular"/>
                        <img class="star3" data-src=./img/language/spring.png alt="spring"/>
                    </div>
                </div>
                <div>
                    <img alt="amsta" class="tns-lazy-img" data-src="./img/project/project_amsta.webp">
                    <div class="carousel-title">Amsta Animal Go app</div>
                    <div class="carousel-description">
                        A school project for Amsta that would like to have an Android application which allows
                        the elderlies from Amsta to exercise and stay fit while having fun with catching animals.
                    </div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/java.png alt="java"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_corendon.webp'" alt="corendon"
                         class="tns-lazy-img" data-src="./img/project/project_corendon.webp">
                    <div class="carousel-title">Corendon dating website</div>
                    <div class="carousel-description">
                        A school project for Corendon that would like to have a dating website for travelers
                        that travel alone and would like to have a partner to party with.
                    </div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star5" data-src=./img/language/js.png alt="js"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/mysql.png alt="mysql"/>
                    </div>
                </div>
            </vue-tiny-slider>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import VueTinySlider from 'vue-tiny-slider';

export default {
    name: "Projects",
    components: {
        'vue-tiny-slider': VueTinySlider
    },
    mounted() {
        let slider = this.$refs.tinySlider.slider
        $('#projects').find('img').on('load', function () {
            slider.updateSliderHeight()
        });
    }
}


</script>

<style lang="scss">
@import "src/styles/variables";
@import 'node_modules/tiny-slider/src/tiny-slider';

.content {
    overflow: hidden;

    .swipe-txt {
        text-align: center;
    }

    .tns-outer {
        display: grid;
    }

    .tns-nav, .tns-controls {
        text-align: center;
        margin: 8px;

        &:focus {
            outline: none;
        }
    }

    .tns-nav > button {
        border: solid $brilliant-red 3px;
        width: 16px;
        height: 16px;
        border-radius: 25px;
        background-color: transparent;
        margin: 4px;
        padding: 4px;

        &:focus {
            outline: none;
        }

        &.tns-nav-active {
            background-color: $brilliant-red;
        }
    }

    .tns-item {
        text-align: center;

        > * {
            padding-top: 4px;
        }

        > img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 75vh;
        }

        .carousel-title {
            font-size: 1.5rem;
        }

        .carousel-description {
            font-style: italic;
            font-size: 1rem;
            margin: 0 5%;
        }

        .carousel-languages {
            display: inline-flex;
            flex-direction: row;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
            margin: 0 15px;

            img {
                width: 32px;
                height: 32px;
                padding: 4px;
                margin: 8px 4px 0 4px;
                border-radius: 12px;
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
        }
    }
}

.programmer #projects {
    display: none;
}
</style>
