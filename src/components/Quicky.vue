<template>
    <div class="section quicky">
        <div class="gradient-top"></div>
        <div class="quicky-text">{{ msg }}</div>
        <div class="gradient-bottom"></div>
    </div>
</template>

<script>
export default {
    name: "Quicky",
    props: ['msg']
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.section.quicky {
    .gradient-top {
        height: 48px;
        background: $light0;
        background: linear-gradient(180deg, rgba($light0,1) 50%, rgba($light2,1) 100%);
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
        background: $light0;
        background: linear-gradient(0deg, rgba($light0,1) 50%, rgba($light2,1) 100%);
    }
}

#app.dark .section.quicky {
    .gradient-top {
        background: $dark1;
        background: linear-gradient(180deg, rgba($dark1,1) 50%, rgba($dark2,1) 100%);
    }

    .quicky-text {
        background-color: $dark2;
    }

    .gradient-bottom {
        background: $dark1;
        background: linear-gradient(0deg, rgba($dark1,1) 50%, rgba($dark2,1) 100%);
    }
}
</style>