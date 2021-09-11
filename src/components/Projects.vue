<template>
    <div id="projects" class="section">
        <h1>{{$t("projects.title")}}</h1>
        <div class="content">
            <span class="swipe-txt">
                <font-awesome-icon :icon="['fas', 'hand-pointer']" class="icon linkedin"/>
                {{$t("projects.swipe")}}
            </span>
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
                    <img v-lazy="'./img/project/project_metafy_vue.webp'" alt="metafy vue"
                         class="tns-lazy-img" data-src="./img/project/project_themobilecompany.webp">
                    <div class="carousel-title">
                        {{$t('projects.metafyvueTitle')}}
                        <a aria-label="github" href="https://github.com/omwro/metafy-vue" rel="noopener" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                        </a>
                        <a aria-label="link" href="https://metafy.omererdem.nl/" rel="noopener" target="_blank">
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" class="icon"/>
                        </a>
                    </div>
                    <div class="carousel-description">{{$t('projects.metafyvueDescription')}}</div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star5" data-src=./img/language/js.png alt="js"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/vue.png alt="vue"/>
                        <img class="star3" data-src=./img/language/sass.png alt="sass"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_barber2u.webp'" alt="barber2u"
                         class="tns-lazy-img" data-src="./img/project/project_themobilecompany.webp">
                    <div class="carousel-title">{{$t('projects.barber2uTitle')}}</div>
                    <div class="carousel-description">{{$t('projects.barber2uDescription')}}</div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/java.png alt="java"/>
                        <img class="star3" data-src=./img/language/ts.png alt="ts"/>
                        <img class="star3" data-src=./img/language/react.png  alt="angular"/>
                        <img class="star3" data-src=./img/language/spring.png alt="spring"/>
                        <img class="star3" data-src=./img/language/sass.png alt="sass"/>
                        <img class="star2" data-src=./img/language/mongodb.png alt="mongodb"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_website.webp'" alt="website"
                         class="tns-lazy-img" data-src="./img/project/project_website.webp">
                    <div class="carousel-title">
                        {{$t('projects.portfolioTitle')}}
                        <a aria-label="github" href="https://github.com/omwro/portfoliovue" rel="noopener" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                        </a>
                    </div>
                    <div class="carousel-description">{{$t('projects.portfolioDescription')}}</div>
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
                    <div class="carousel-title">{{$t('projects.nmeaTitle')}}</div>
                    <div class="carousel-description">{{$t('projects.nmeaDescription')}}</div>
                    <div class="carousel-languages">
                        <img class="star3" data-src=./img/language/kotlin.png alt="kotlin"/>
                        <img class="star2" data-src=./img/language/xml.png alt="json"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_metafy.webp'" alt="metafy"
                         class="tns-lazy-img" data-src="./img/project/project_metafy.webp">
                    <div class="carousel-title">
                        {{$t('projects.metafyAndroidTitle')}}
                        <a aria-label="github" href="https://github.com/omwro/MetaFy" rel="noopener" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                        </a>
                    </div>
                    <div class="carousel-description">{{$t('projects.metafyAndroidDescription')}}</div>
                    <div class="carousel-languages">
                        <img class="star3" data-src=./img/language/kotlin.png alt="kotlin"/>
                        <img class="star2" data-src=./img/language/xml.png alt="json"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_dashboard.webp'" alt="dashboard"
                         class="tns-lazy-img" data-src="./img/project/project_dashboard.webp">
                    <div class="carousel-title">{{$t('projects.boldTitle')}}</div>
                    <div class="carousel-description">{{$t('projects.boldDescription')}}</div>
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
                    <div class="carousel-title">{{$t('projects.aquadisTitle')}}</div>
                    <div class="carousel-description">{{$t('projects.aquadisDescription')}}</div>
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
                    <div class="carousel-title">{{$t('projects.amstaTitle')}}</div>
                    <div class="carousel-description">{{$t('projects.amstaDescription')}}</div>
                    <div class="carousel-languages">
                        <img class="star5" data-src=./img/language/html.png alt="html"/>
                        <img class="star4" data-src=./img/language/css.png alt="css"/>
                        <img class="star4" data-src=./img/language/java.png alt="java"/>
                    </div>
                </div>
                <div>
                    <img v-lazy="'./img/project/project_corendon.webp'" alt="corendon"
                         class="tns-lazy-img" data-src="./img/project/project_corendon.webp">
                    <div class="carousel-title">{{$t('projects.corendonTitle')}}</div>
                    <div class="carousel-description">{{$t('projects.corendonDescription')}}</div>
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

a {
    margin: 0 4px;

    .icon {
        color: white;
        width: 20px;
        height: 20px;
    }
}
</style>
