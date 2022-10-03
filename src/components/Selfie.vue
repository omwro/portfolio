<template>
    <img :src="'./img/selfie/selfie.webp'">
</template>

<script>
export default {
    name: "Selfie"
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

img {
    height: 450px;
    width: 300px;
    justify-content: center;
    background-color: $accent;
    mask-image: url("../../public/img/selfie/shape.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mask-position: center;
}
</style>