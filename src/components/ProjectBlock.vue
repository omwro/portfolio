<template>
    <a :href="'/projects/' + project.id" class="project-block">
        <img :v-lazy="project.img" :src="project.img" :alt="project.title" />
        <div class="project-block-text">
            {{ project.title }}
        </div>
    </a>
</template>

<script>
export default {
    name: "ProjectBlock",
    props: ["project"],
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.project-block {
    position: relative;
    cursor: pointer;

    img {
        border-radius: 20px;
        filter: brightness(0.5);
        width: 380px;
        height: 250px;
        object-fit: cover;
        position: relative;
    }

    &:hover {
        img {
            filter: brightness(1);
        }

        .project-block-text {
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
        }
    }

    .project-block-text {
        font-size: 1.5rem;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 10px;
        width: fit-content;
        color: $color-dark;
        padding: 2px 6px;
    }
}
</style>
