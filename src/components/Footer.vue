<template>
    <div id="footer" class="section">
        <div class="copyright">&copy; 2021 Omer Erdem All Rights Reserved</div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.copyright {
    color: $light2;
    font-style: italic;
    text-align: center;
    margin: 0.5rem;
    font-size: 0.9rem;
}
</style>
