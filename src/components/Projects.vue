<template>
    <div id="projects" class="section">
        <h1>Projects</h1>
        <div class="content">
            <img src="../assets/projects/project_corendon.webp" class="horizontal" alt="corendon">
            <img src="../assets/projects/project_amsta.webp" class="vertical" alt="amsta">
            <img src="../assets/projects/project_aquadis.webp" class="horizontal" alt="aquadis">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #projects {
        background-color: $light0;

        .content {
            flex-direction: row;
            flex-wrap: wrap;

            img {
                margin: 10px;

                &.horizontal {
                    max-width: 300px;
                    max-height: 150px;
                    @media all and (min-width: 420px) {
                        max-width: 400px;
                        max-height: 200px;
                    }
                }

                &.vertical {
                    max-width: 200px;
                    max-height: 400px;
                }
            }
        }
    }

    .dark #projects {
        background-color: $dark2;
        color: $light0;
    }
</style>
