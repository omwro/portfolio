<template>
    <div id="competitors" class="section">
        <h1>{{ $t('competitors.title') }}</h1>
        <p>{{ $t('competitors.desc')}}</p>
        <div class="content">
            <div class="card" v-for="prof in profiles" :key="prof.name">
                <div class="card-header" :style="'background-image: url('+prof.img+')'">
                    <div class="card-header-slanted-edge">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path class="polygon" d="M-20,200,1000,0V200Z" /></svg>
                    </div>
                </div>
                <div class="card-body">
                    <div>{{prof.name}}</div>
                    <div class="role">{{prof.role}}</div>
                    <div class="card-buttons">
                        <div v-if="prof.website != null" @click="goToUrl(prof.website)">
                            <font-awesome-icon class="globe" icon="globe"/>
                            <span>Website</span>
                        </div>
                        <div  v-if="prof.linkedin != null" @click="goToUrl(prof.linkedin)">
                            <img class="linkedin" src="../../public/img/contact/linkedin.png" alt="linked in image"/>
                            <span>LinkedIn</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import json from "@/../public/data/competitors.json"

export default {
    name: "Competitors",
    data: () => ({
        profiles: json
    }),
    methods: {
        goToUrl(url) {
            window.open(url)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#competitors {
    background-color: $light0;

    p {
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 16px;
            background: $light1;
            border-radius: 5px;
            overflow: hidden;

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

                .role {
                    color: $grey;
                }

                .card-buttons {
                    display: flex;
                    justify-content: space-evenly;
                    margin-top: 16px;
                    width: 100%;

                    .globe {
                        width: 32px;
                        height: 32px;
                        color: $brilliant-red;
                        cursor: pointer;
                    }

                    .linkedin {
                        width: 32px;
                        height: 32px;
                        cursor: pointer;
                    }
                    > * {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        width: 100%;

                        span {
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
                background: linear-gradient(to top, rgba($brilliant-red, 1), rgba(white, 0.0) 50%);
            }

            svg .polygon{
                fill: $light1;
            }

            .card-header-slanted-edge{
                position: absolute;
                z-index: 1;
                width: 100%;
                right:0;
                left:0;
            }
        }
    }
}

.dark #competitors {
    background-color: $dark1;
    color: $light0;

    .card, .card .card-header svg .polygon{
        fill: $dark2;
        background: $dark2;
    }
}
</style>
