<template>
    <div
        class="skill-chip-block"
        :style="
            'border-color: #014F86' + color !== undefined ? color : '#014F86'
        ">
        <img :src="img" :alt="name" />
        <span>{{ name }}</span>
    </div>
</template>

<script>
export default {
    name: "SkillChip",
    props: ["name", "img", "color"],
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.skill-chip-block {
    display: flex;
    gap: 4px;
    border: solid 2px $accent;
    border-radius: 25px;
    padding: 3px 6px;

    img {
        width: 16px;
        height: 16px;
        filter: invert(1);
        object-fit: contain;
    }

    span {
        font-size: 12px;
        align-self: center;
    }

    @media (min-width: $mq-m) {
        padding: 4px 12px;

        img {
            width: 32px;
            height: 32px;
        }

        span {
            font-size: 16px;
        }
    }
}

#app.dark .skill-chip-block img {
    filter: invert(0);
}
</style>
