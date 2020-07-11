<template>
    <div id="footer">
        <div class="copyright">&copy; 2020 Omer Erdem All Rights Reserved</div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #footer {
        background-color: $dark5;

        .copyright {
            font-style: italic;
            color: white;
            text-align: center;
            margin: 10px;
            font-size: 14px;
        }
    }
</style>
