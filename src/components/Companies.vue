<template>
    <div id="companies" class="section">
        <h1>{{$t('companies.title')}}</h1>
        <div v-lazy-container="{ selector: 'img' }" class="content">
            <div><img data-src=./img/company/themobilecompany.webp alt="themobilecompany"/></div>
            <div><img class="dark-invert" data-src=./img/company/boldcommerce.webp alt="boldcommerce"/></div>
            <div><img class="dark-invert" data-src=./img/company/aquadis.webp alt="aquadis"/></div>
            <div><img data-src=./img/company/amsta.webp alt="amsta"/></div>
            <div><img data-src=./img/company/corendon.webp alt="corendon"/></div>
            <div><img class="dark-bright" data-src=./img/company/digidot.webp alt="digidot"/></div>
            <div><img class="dark-bright" data-src=./img/company/kennethkoh.webp alt="kennethkoh"/></div>
            <div><img class="dark-invert" data-src=./img/company/deugderdem.webp alt="deugderdem"/></div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Companies",
    data: function () {
        return {
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
@import "src/styles/variables";


#companies .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
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
