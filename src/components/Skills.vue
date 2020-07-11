<template>
    <div id="skills">
        <h1>Skills</h1>
        <div class="content">
            <div>
                <h2>Enviroment</h2>
                <canvas id="eviromentChart"></canvas>
            </div>
            <div>
                <h2>Frontend</h2>
                <canvas id="frontendChart"></canvas>
            </div>
            <div>
                <h2>Backend</h2>
                <canvas id="backendChart"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #skills {
        background-color: $light3;

        .content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            text-align: center;
        }
    }
</style>
