<template>
    <section id="projects">
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
                <div v-for="(p,i) in projects" :key="i">
                    <img :v-lazy="p.img"
                         :data-src="p.img"
                         :alt="p.title"
                         class="tns-lazy-img" >
                    <div class="carousel-title">
                        {{p.title}}
                        <a v-if="p.github"
                           aria-label="github"
                           :href="p.github"
                           rel="noopener"
                           target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                        </a>
                        <a v-if="p.url"
                           aria-label="link"
                           :href="p.url"
                           rel="noopener"
                           target="_blank">
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" class="icon"/>
                        </a>
                    </div>
                    <div class="carousel-description">{{$t(p.desc)}}</div>
                    <div class="carousel-languages">
                        <img v-for="skill in getLanguages(p.stack)"
                             :key="skill.name"
                             :class="'c'+skill.color"
                             :data-src="skill.img"
                             :alt="skill.name"/>
                    </div>
                </div>
            </vue-tiny-slider>
        </div>
    </section>
</template>

<script>
import $ from 'jquery';
import VueTinySlider from 'vue-tiny-slider';
import skillsJson from "../../public/data/skills.json"
import projectsJson from "../../public/data/projects.json"

export default {
    name: "Projects",
    data: () => ({
       projects: projectsJson
    }),
    components: {
        'vue-tiny-slider': VueTinySlider
    },
    mounted() {
        let slider = this.$refs.tinySlider.slider
        $('#projects').find('img').on('load', function () {
            slider.updateSliderHeight()
        });
    },
	methods: {
		getLanguages(array) {
			return skillsJson.filter(x => array.includes(x.name))
		}
	}
}


</script>

<style lang="scss">
@import "../styles/variables";
@import '../../node_modules/tiny-slider/src/tiny-slider';

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
        border: solid $accent 3px;
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
            background-color: $accent;
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

            .c1 {
                background-color: $accent;
            }

            .c2 {
                background-color: $accent2;
            }

            .c3 {
                background-color: $accent3;
            }

            .c4 {
                background-color: $accent4;
            }

            .c5 {
                background-color: $dark5;
            }
        }
    }
}

a {
    margin: 0 4px;

    .icon {
        color: black;
        width: 20px;
        height: 20px;
    }
}

#app.dark a .icon {
    color: white;
}
</style>
