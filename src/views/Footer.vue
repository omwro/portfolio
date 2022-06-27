<template>
    <section id="footer">
        <div>&copy; 1999 - 2022 Omer Erdem All Rights Reserved</div>
    </section>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#app #footer {
    color: $light2;
    font-style: italic;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
        padding: 0 0.5rem;
    }
}
</style>
