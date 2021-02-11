<template>
    <div class="section">
        <div class="quicky-text">{{ msg }}</div>
    </div>
</template>

<script>
export default {
    name: "Quicky",
    props: ['msg']
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.section {
    background-color: $light1;
    padding: 16px;

    .quicky-text {
        font-size: 14px;
        text-align: center;
        font-style: italic;
    }
}

.dark .section {
    background-color: $dark2;
}
</style>