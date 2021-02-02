<template>
    <div id="projects" class="section">
        <h1>Projects</h1>
        <div class="content">
            <vue-tiny-slider ref="tinySlider"
                :mouse-drag="true"
                :loop="false"
                :items="1"
                :gutter="10"
                :center="true"
                :auto-height="true"
                :lazyload="true"
            >
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_corendon.webp" alt="corendon">
                    <div class="carousel-title">Corendon dating website</div>
                    <div class="carousel-description">
                        A school project for Corendon that would like to have a dating website for travelers
                        that travel alone and would like to have a partner to party with.
                    </div>
                    <div class="carousel-languages">HTML, CSS, JS, MYSQL, Ajax</div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_amsta.webp" alt="amsta">
                    <div class="carousel-title">Amsta Animal Go app</div>
                    <div class="carousel-description">
                        A school project for Amsta that would like to have an Android application which allows
                        the elderlies from Amsta to exercise and stay fit while having fun with catching animals.
                    </div>
                    <div class="carousel-languages">HTML, CSS, Java</div>
                </div>
                <div>
                    <img class="tns-lazy-img" data-src="./img/project/project_aquadis.webp" alt="aquadis">
                    <div class="carousel-title">Aquadis texting website</div>
                    <div class="carousel-description">
                        A school project for Aquadis that would like to have an texting based game which allows
                        the players to place messages on the maps and other people can see them if they are near
                        and respond to it.
                    </div>
                    <div class="carousel-languages">HTML, CSS, JS, Angular, Java, Spring, Rest, Mysql</div>
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
                    max-width: 100%;
                }

                .carousel-title {
                    font-size: 24px;
                }

                .carousel-description {
                    font-style: italic;
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
