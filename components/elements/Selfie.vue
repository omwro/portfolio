<template>
    <nuxt-img src="/img/selfie/selfie.webp" class="justify-center bg-primary" alt="selfie" width="300" height="450"/>
</template>

<script>
export default {
    name: "Selfie",
};
</script>

<style scoped>
img {
    mask-image: url("/img/selfie/shape.png");
    mask-repeat: no-repeat;
    mask-size: cover;
    mask-position: center;
}
</style>
