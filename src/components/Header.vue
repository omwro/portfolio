<template>
    <div id="header">
        <h1>Omer Erdem</h1>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #header {
        width: 100%;
        height: 75px;
        top: 0;
        position: absolute;
        z-index: 10;

        color: $dark0;
        backdrop-filter: blur(20px);

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 4rem;
        }
    }
</style>
