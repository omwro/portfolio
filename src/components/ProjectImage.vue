<template>
    <div class="project-image-container">
        <template v-if="project.isMobile">
            <img v-lazy="'img/stock/dev-mobile.png'"
                 src="img/stock/dev-mobile.png"
                 alt="mobile"
                 class="stock">
            <img :v-lazy="project.img"
                 :src="project.img"
                 :alt="project.title"
                 class="project-mobile">
        </template>
        <template v-else>
            <img v-lazy="'img/stock/dev-laptop.png'"
                 src="img/stock/dev-laptop.png"
                 alt="laptop"
                 class="stock">
            <img :v-lazy="project.img"
                 :src="project.img"
                 :alt="project.title"
                 class="project-laptop">
        </template>
    </div>
</template>

<script>
export default {
    name: "ProjectImage",
    props: ["project"]
}
</script>

<style lang="scss" scoped>
.project-image-container {
    position: relative;
    display: inline-flex;
    z-index: 1;

    .stock {
        position: relative;
        z-index: 1;
        max-width: 100%;
        max-height: 342px;
    }

    .project-laptop {
        position: absolute;
        top: 4.9%;
        left: 11.7%;
        height: 86.1%;
        width: 76.4%;
    }

    .project-mobile {
        border-radius: 10px;
        position: absolute;
        top: 2%;
        left: 6%;
        height: 96%;
        width: 89%;
    }
}
</style>