<template>
    <div id="companies" class="section">
        <h1>Companies</h1>
        <div class="content">
            <!-- Using an image Slider for convenience https://antoniandre.github.io/vueper-slides -->
            <VueSlickCarousel v-bind="settings">
                <div><img alt="kennethkoh" src=../assets/companies/kennethkoh.webp /></div>
                <div><img alt="digidot" src=../assets/companies/digidot.webp /></div>
                <div><img alt="corendon" src=../assets/companies/corendon.webp /></div>
                <div><img alt="amsta" src=../assets/companies/amsta.webp /></div>
                <div><img alt="aquadis" src=../assets/companies/aquadis.webp /></div>
                <div><img alt="boldcommerce" src=../assets/companies/boldcommerce.webp /></div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "Companies",
        components: {VueSlickCarousel},
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
            img {
                padding: 10px;
                max-width: 300px;
                max-height: 120px;
            }

            .company-slider {
                width: 300px;

                @media all and (min-width: 700px) {
                    width: 600px;
                }
                @media all and (min-width: 1000px) {
                    width: 900px;
                }


                .tns-item {
                    display: inline-flex;
                    justify-content: center;
                    vertical-align: middle;
                }
            }

            .tns-nav {
                text-align: center;

                button {
                    width: 15px;
                    height: 20px;
                    padding: 0;
                    background: none;
                    border: solid 2px grey;
                    border-radius: 25px;
                    margin: 7px;

                    &:focus {
                        outline: 0;
                    }

                    &.tns-nav-active {
                        border: solid 2px red;
                    }
                }
            }

            .tns-outer {
                position: relative;
            }

            [data-controls] {
                border: 0;
                padding: 0;
                font-size: 30px;
                position: absolute;
                top: 50%;
                margin-top: -40px;
                z-index: 1;
                background: transparent;
            }

            [data-controls="prev"] {
                left: -30px;
            }

            [data-controls="next"] {
                right: -30px;
            }


        }

        .boldcommerce {
            background-color: black;
            padding: 5px;
            border-radius: 100px;
        }
    }
</style>
