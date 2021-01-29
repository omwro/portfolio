<template>
    <div id="companies" class="section">
        <h1>Companies</h1>
        <div class="content">
                <div><img class="dark-bright" alt="kennethkoh" src=../assets/companies/kennethkoh.webp /></div>
                <div><img class="dark-bright" alt="digidot" src=../assets/companies/digidot.webp /></div>
                <div><img alt="corendon" src=../assets/companies/corendon.webp /></div>
                <div><img alt="amsta" src=../assets/companies/amsta.webp /></div>
                <div><img class="dark-invert" alt="aquadis" src=../assets/companies/aquadis.webp /></div>
                <div><img class="dark-invert" alt="boldcommerce" src=../assets/companies/boldcommerce-black.webp /></div>
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
        background-color: $light1;

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
</style>
