<template>
    <section id="footer">
        <div>&copy; 1999 - 2022 Omer Erdem All Rights Reserved</div>
    </section>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "src/variables";

#app #footer {
    color: $color-light;
    background-color: $block-light;
    font-style: italic;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    text-align: center;
    overflow: hidden;

    > div {
        padding: 0 0.5rem;
        white-space: nowrap;
    }
}

#app.dark #footer {
    color: $color-dark;
    background-color: $block-dark;
}
</style>
