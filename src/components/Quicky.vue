<template>
    <section class="quicky">
        <div class="gradient-top"></div>
        <div class="quicky-text">{{ msg }}</div>
        <div class="gradient-bottom"></div>
    </section>
</template>

<script>
export default {
    name: "Quicky",
    props: ['msg']
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

section.quicky {
    .gradient-top {
        height: 48px;
        background: $background-light;
        background: linear-gradient(180deg, rgba($background-light,1) 50%, rgba($light2,1) 100%);
    }

    .quicky-text {
        padding: 1rem 0.5rem;
        font-size: 0.9rem;
        text-align: center;
        font-style: italic;
        background-color: $light2;
    }

    .gradient-bottom {
        height: 48px;
        background: $background-light;
        background: linear-gradient(0deg, rgba($background-light,1) 50%, rgba($light2,1) 100%);
    }
}

#app.dark section.quicky {
    .gradient-top {
        background: $background-dark;
        background: linear-gradient(180deg, rgba($background-dark,1) 50%, rgba($block-dark,1) 100%);
    }

    .quicky-text {
        background-color: $block-dark;
    }

    .gradient-bottom {
        background: $background-dark;
        background: linear-gradient(0deg, rgba($background-dark,1) 50%, rgba($block-dark,1) 100%);
    }
}
</style>