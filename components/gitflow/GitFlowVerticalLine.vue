<template>
    <div class="gitflow-vertical-line"
         :style="{'z-index': index, 'border-color': color}"
         :class="[top ? 'gitflow-vertical-line-top' : '', bottom ? 'gitflow-vertical-line-bottom' : '']"/>

</template>

<script>
export default {
    name: "GitFlowVerticalLine",
    props: {
        index: Number,
        color: String,
        top: Boolean,
        bottom: Boolean
    }
}
</script>

<style scoped>
.gitflow-vertical-line {
    width: 13px;
    height: auto;
    margin-right: 13px;
    border-right: 4px solid;
    flex: none;
    position: absolute;
}
.gitflow-vertical-line.gitflow-vertical-line-top {
    height: 100% !important;
    top: 0;
}
.gitflow-vertical-line.gitflow-vertical-line-bottom {
    height: 100% !important;
    bottom: 0;
}
@media (min-width: 768px) {
    .gitflow-vertical-line {
        position: inherit;
    }
}
.gitflow-block .gitflow-vertical-line {
    position: absolute;
}
.gitflow-row:last-child .gitflow-block .gitflow-vertical-line.gitflow-vertical-line-top {
    height: 50% !important;
}
.gitflow-row:last-child .gitflow-block .gitflow-vertical-line.gitflow-vertical-line-bottom {
    height: 0 !important;
}

</style>