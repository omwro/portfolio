<template>
    <div id="companies" class="section">
        <h1>Companies</h1>
        <div v-lazy-container="{ selector: 'img' }" class="content">
            <div><img alt="themobilecompany" data-src=./img/company/themobilecompany.webp/></div>
            <div><img alt="boldcommerce" class="dark-invert" data-src=./img/company/boldcommerce.webp/></div>
            <div><img alt="aquadis" class="dark-invert" data-src=./img/company/aquadis.webp/></div>
            <div><img alt="amsta" data-src=./img/company/amsta.webp/></div>
            <div><img alt="corendon" data-src=./img/company/corendon.webp/></div>
            <div><img alt="digidot" class="dark-bright" data-src=./img/company/digidot.webp/></div>
            <div><img alt="kennethkoh" class="dark-bright" data-src=./img/company/kennethkoh.webp/></div>
            <div><img alt="deugderdem" class="dark-invert" data-src=./img/company/deugderdem.webp/></div>
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

.programmer #companies {
    display: none;
}
</style>
