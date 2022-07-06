<template>
    <section id="companies">
        <h1>{{ $t('companies.title') }}</h1>
        <div v-lazy-container="{ selector: 'img' }" class="content">
            <a v-for="c in companies"
               :key="c.name"
               :href="c.url"
               target="_blank"
               rel="author">
                <img :data-src="c.img" :alt="c.name" :class="c.class ? c.class : ''"/>
            </a>
        </div>
    </section>
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


#companies .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > * {
        padding: 16px;
        align-self: center;

        img {
            width: auto;
            height: auto;
            max-width: 256px;
            max-height: 128px;
        }
    }
}

.dark #companies {
    .dark-invert {
        filter: invert(100%);
    }

    .dark-bright {
        filter: brightness(2);
    }
}
</style>
