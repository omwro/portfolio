<template>
    <div class="card-block">
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
                    <a :href="profile.website" v-if="profile.website != null" target="_blank">
                        <font-awesome-icon class="globe" icon="globe"/>
                        <span>Website</span>
                    </a>
                    <a :href="profile.linkedin" v-if="profile.linkedin != null" target="_blank">
                        <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompetitorCard",
    props: ["profile"]
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.card-block {
    margin: 16px;
    border-radius: 5px;
    position: relative;

    &:hover {
        .card-header:after{
            height: 0;
            transition: .5s;
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
            flex-direction: row;
            flex-wrap: nowrap;
            margin-top: 16px;
            width: 100%;

            .globe, .linkedin {
                width: 32px;
                height: 32px;
                color: white;
                cursor: pointer;
                filter: brightness(0);
            }

            > a {
                text-decoration: none;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                width: 100%;
                flex: 1;

                &:hover {
                    .globe, .linkedin {
                        filter: brightness(1);
                        color: $accent;
                    }

                    span {
                        color: $accent !important;
                    }
                }

                span {
                    margin-top: 8px;
                    font-size: 12px;
                    color: $color-light;
                }
            }
        }
    }

    .card-header:after{
        content:'';
        position: absolute;
        width: 100%;
        height: 100%;
        transition: .5s;
        bottom: 0;
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

        span {
            color: $color-dark;
        }
    }
}
</style>