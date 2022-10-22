<template>
    <div id="companies">
        <div v-lazy-container="{ selector: 'img' }" class="content">
            <a v-for="c in companies"
               :key="c.name"
               :href="c.url"
               target="_blank"
               rel="author">
                <img :data-src="c.img" :alt="c.name"/>
            </a>
        </div>
    </div>
</template>

<script>
import json from "../../public/data/companies.json"

export default {
    name: "Companies",
    data: function () {
        return {
            companies: json,
            settings: {
                "dots": true,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "touchThreshold": 5
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#companies {
    padding: 64px 0;
    overflow: hidden;
    background-color: $background-light;

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        transform: rotate(-3deg);
        background-color: $block-light;
        overflow: hidden;
        justify-content: center;
        width: calc(106%);
        margin-left: -3%;

        > * {
            padding: 16px;
            align-self: center;

            img {
                width: auto;
                height: auto;
                max-width: 128px;
                max-height: 64px;
                filter: invert(1);
            }
        }
    }
}

.dark #companies {
    background-color: $background-dark;

    .content {
        background-color: $block-dark;

        img {
            filter: unset;
        }
    }

}
</style>
