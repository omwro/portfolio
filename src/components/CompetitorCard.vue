<template>
    <div class="card-block">
        <div class="card-bg"/>
        <div class="card">
            <div class="card-header" :style="'background-image: url('+profile.img+')'">
                <div class="card-header-slanted-edge">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                        <path class="polygon" d="M-20,200,1000,0V200Z"/>
                    </svg>
                </div>
            </div>
            <div class="card-body">
                <div>{{ profile.name }}</div>
                <div class="role">{{ profile.role }}</div>
                <div class="card-buttons">
                    <div v-if="profile.website != null" @click="goToUrl(profile.website)">
                        <font-awesome-icon class="globe" icon="globe"/>
                        <span>Website</span>
                    </div>
                    <div v-if="profile.linkedin != null" @click="goToUrl(profile.linkedin)">
                        <img class="linkedin" src="../../public/img/contact/linkedin.png" alt="linked in image"/>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompetitorCard",
    props: ["profile"],
    methods: {
        goToUrl(url) {
            window.open(url)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.card-block {
    margin: 16px;
    border-radius: 5px;
    position: relative;

    .card-bg {
        width: 100%;
        height: 0;
        background-color: $accent;
        position: absolute;
        z-index: 0;
        border-radius: 8px;
        -webkit-transition: height .5s;
        -moz-transition: height .5s;
        -ms-transition: height .5s;
        -o-transition: height .5s;
        transition: height .5s;
    }

    &:hover {
        .card-bg {
            height: 100%;
            -webkit-transition: height .5s;
            -moz-transition: height .5s;
            -ms-transition: height .5s;
            -o-transition: height .5s;
            transition: height .5s;
        }
    }
}
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $block-light;
    border-radius: 5px;
    overflow: hidden;
    z-index: 1;
    margin: 3px;

    .card-header {
        position: relative;
        width: 200px;
        height: 200px;
        background-size: contain;
    }

    .card-body{
        padding: 8px;
        text-align: center;
        width: 100%;
        z-index: 1;
        background: $block-light;


        .role {
            color: $grey;
        }

        .card-buttons {
            display: flex;
            justify-content: space-evenly;
            margin-top: 16px;
            width: 100%;

            .globe, .linkedin {
                width: 32px;
                height: 32px;
                color: white;
                cursor: pointer;
                filter: brightness(0);
            }

            > * {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                width: 100%;

                span {
                    margin-top: 8px;
                    font-size: 12px;
                }
            }
        }
    }

    .card-header:after{
        content:'';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba($accent, 1), rgba(white, 0.0) 50%);
    }

    svg .polygon{
        fill: $block-light;
    }

    .card-header-slanted-edge{
        position: absolute;
        z-index: 1;
        width: 100%;
        right:0;
        left:0;
    }
}

#app.dark {
    .card, .card .card-header svg .polygon {
        fill: $block-dark;
        background: $block-dark;

        .globe, .linkedin {
            filter: brightness(1);
        }

        .card-body {
            background-color: $block-dark;
        }
    }
}
</style>