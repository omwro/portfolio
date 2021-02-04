<template>
    <div id="projects" class="section">
        <h1>Projects</h1>
        <div class="content">
            <span class="swipe-txt"><font-awesome-icon :icon="['fas', 'hand-pointer']" class="icon linkedin"/> Swipe to scroll</span>
            <vue-tiny-slider ref="tinySlider"
                :mouse-drag="true"
                :loop="false"
                :items="1"
                :gutter="10"
                :center="true"
                :auto-height="true"
                :lazyload="true"
                :controls="false">
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_website.webp" v-lazy="'./img/project/project_website.webp'" alt="website">
                    <div class="carousel-title">Portfolio website</div>
                    <div class="carousel-description">
                        Creating of a good looking personal portfolio website have been a hobby project for years
                        with multiple attempts in multiple languages and frameworks to create. This website will be continuously
                        developed on, in order to improve my skills, while also experimenting with new features.
                    </div>
                    <div class="carousel-languages">
                        <img data-src=./img/language/html.png class="star5" alt="html"/>
                        <img data-src=./img/language/js.png class="star5" alt="js"/>
                        <img data-src=./img/language/php.png class="star4" alt="php"/>
                        <img data-src=./img/language/css.png class="star4" alt="css"/>
                        <img data-src=./img/language/jquery.png class="star4" alt="jquery"/>
                        <img data-src=./img/language/vue.png class="star4" alt="vue"/>
                        <img data-src=./img/language/sass.png class="star3" alt="sass"/>
                    </div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_metafy.webp" v-lazy="'./img/project/project_metafy.webp'" alt="metafy">
                    <div class="carousel-title">Spotify MetaFy app</div>
                    <div class="carousel-description">
                        An Android application that uses the Spotify API to get your spotify account song and playlist
                        data. You can assign your custom tags to songs and create custom playlists.
                    </div>
                    <div class="carousel-languages">
                        <img data-src=./img/language/kotlin.png class="star3" alt="kotlin"/>
                    </div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_dashboard.webp" v-lazy="'./img/project/project_dashboard.webp'" alt="dashboard">
                    <div class="carousel-title">Bold Commerce Support Dashboard</div>
                    <div class="carousel-description">
                        A support dashboard that helps the management to see all the important data in a glimpse of an
                        eye. Using the ActiveCollab API in order to collect task and time management data while also
                        following the Material IO guidelines.
                    </div>
                    <div class="carousel-languages">
                        <img data-src=./img/language/html.png class="star5" alt="html"/>
                        <img data-src=./img/language/js.png class="star5" alt="js"/>
                        <img data-src=./img/language/php.png class="star4" alt="php"/>
                        <img data-src=./img/language/css.png class="star4" alt="css"/>
                        <img data-src=./img/language/jquery.png class="star4" alt="jquery"/>
                        <img data-src=./img/language/mysql.png class="star4" alt="mysql"/>
                        <img data-src=./img/language/vue.png class="star4" alt="vue"/>
                        <img data-src=./img/language/sass.png class="star3" alt="sass"/>
                        <img data-src=./img/language/laravel.png class="star2" alt="laravel"/>
                    </div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_corendon.webp" v-lazy="'./img/project/project_corendon.webp'" alt="corendon">
                    <div class="carousel-title">Corendon dating website</div>
                    <div class="carousel-description">
                        A school project for Corendon that would like to have a dating website for travelers
                        that travel alone and would like to have a partner to party with.
                    </div>
                    <div class="carousel-languages">
                        <img data-src=./img/language/html.png class="star5" alt="html"/>
                        <img data-src=./img/language/js.png class="star5" alt="js"/>
                        <img data-src=./img/language/css.png class="star4" alt="css"/>
                        <img data-src=./img/language/mysql.png class="star4" alt="mysql"/>
                    </div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_amsta.webp" alt="amsta">
                    <div class="carousel-title">Amsta Animal Go app</div>
                    <div class="carousel-description">
                        A school project for Amsta that would like to have an Android application which allows
                        the elderlies from Amsta to exercise and stay fit while having fun with catching animals.
                    </div>
                    <div class="carousel-languages">
                        <img data-src=./img/language/html.png class="star5" alt="html"/>
                        <img data-src=./img/language/css.png class="star4" alt="css"/>
                        <img data-src=./img/language/java.png class="star4" alt="java"/>
                    </div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_aquadis.webp" alt="aquadis">
                    <div class="carousel-title">Aquadis texting website</div>
                    <div class="carousel-description">
                        A school project for Aquadis that would like to have an texting based game which allows
                        the players to place messages on the maps and other people can see them if they are near
                        and respond to it.
                    </div>
                    <div class="carousel-languages">
                        <img data-src=./img/language/html.png class="star5" alt="html"/>
                        <img data-src=./img/language/js.png class="star5" alt="js"/>
                        <img data-src=./img/language/css.png class="star4" alt="css"/>
                        <img data-src=./img/language/java.png class="star4" alt="java"/>
                        <img data-src=./img/language/mysql.png class="star4" alt="mysql"/>
                        <img data-src=./img/language/angular.png class="star3" alt="angular"/>
                        <img data-src=./img/language/spring.png class="star3" alt="spring"/>
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

    #projects {
        background-color: $light0;

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
                    max-height: 80vh;
                }

                .carousel-title {
                    font-size: 24px;
                }

                .carousel-description {
                    font-style: italic;
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
                        border-radius: 25px;
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
    }

    .dark #projects {
        background-color: $dark2;
        color: $light0;
    }

    .programmer #projects {
      display: none;
    }
</style>
