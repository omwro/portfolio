<template>
    <nuxt-img src="/img/selfie/selfie.webp" class="h-[450px] w-[300px] justify-center bg-primary" alt="selfie"/>
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
