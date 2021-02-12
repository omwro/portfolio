<template>
    <div id="companies" class="section">
        <h1>Companies</h1>
        <div class="content" v-lazy-container="{ selector: 'img' }">
            <div><img alt="themobilecompany" data-src=./img/company/themobilecompany.webp/></div>
            <div><img class="dark-invert" alt="boldcommerce" data-src=./img/company/boldcommerce.webp/></div>
            <div><img class="dark-invert" alt="aquadis" data-src=./img/company/aquadis.webp/></div>
            <div><img alt="amsta" data-src=./img/company/amsta.webp/></div>
            <div><img alt="corendon" data-src=./img/company/corendon.webp/></div>
            <div><img class="dark-bright" alt="digidot" data-src=./img/company/digidot.webp/></div>
            <div><img class="dark-bright" alt="kennethkoh" data-src=./img/company/kennethkoh.webp/></div>
            <div><img class="dark-invert" alt="deugderdem" data-src=./img/company/deugderdem.webp/></div>
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

<style scoped lang="scss">
@import "src/styles/variables";

#companies {
    background-color: $light0;

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1000px;

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
}

.dark #companies {
    background-color: $dark1;
    color: $light0;

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
