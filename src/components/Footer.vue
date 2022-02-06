<template>
    <div id="footer" class="section">
        <div>&copy; 2015 - 2022 Omer Erdem All Rights Reserved</div>
        <div>{{visitCount}}x visited this year!</div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data: () => {
        return {
            visitCount: 0
        }
    },
    async created() {
        this.visitCount = await this.axios
            .get("https://api.omererdem.nl/visitor/Portfolio/stats")
            .then((res) => res.data)
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

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
