<template>
    <div class="section quicky">
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

.quicky-text {
    margin: 1rem 0.5rem;
    font-size: 0.9rem;
    text-align: center;
    font-style: italic;
}
</style>