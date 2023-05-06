<template>
    <div class="gitflow-transparent-background"
         :style="{'background-color': `rgba(${hexToRgb(color)}, 0.4)`}"
         :class="right ? 'gitflow-transparent-background-right' : ''"/>
</template>

<script>
export default {
    name: "GitFlowTransparentBackground",
    props: {
        color: String,
        right: Boolean
    },
    methods: {
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
                : "0, 0, 0";
        }
    }
}
</script>

<style scoped>
.gitflow-transparent-background {
    display: none;
    width: 30px;
    height: calc(100% - 6px);
    position: absolute;
    margin-top: 3px;
}
.gitflow-transparent-background.gitflow-transparent-background-right {
    display: block;
    width: 15px;
    margin-left: 15px;
}
@media (min-width: 768px) {
    .gitflow-transparent-background {
        display: block;
    }
}

</style>