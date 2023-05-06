<template>
    <div :style="{'z-index': index, 'border-color': color}"
         :class="[top ? 'gitflow-cornerline-top' : '', bottom ? 'gitflow-cornerline-bottom' : '']"/>

</template>

<script>
export default {
    name: "GitFlowCornerLine",
    props: {
        index: Number,
        color: String,
        top: Boolean,
        bottom: Boolean
    }
}
</script>

<style scoped>
.gitflow-cornerline-top {
    width: 13px;
    height: calc(50% + 8px);
    border-right: 4px solid;
    border-radius: 0;
    border-top: 0;
    margin-top: calc(50% + 2px);
    position: absolute;
}
@media (min-width: 768px) {
    .gitflow-cornerline-top {
        border-radius: 0 15px 0 0;
        border-top: 4px solid;
        position: relative;
        height: calc(50% - 2px);
        margin-top: calc(50% + 1px);
    }
}
.gitflow-cornerline-bottom {
    width: 13px;
    height: calc(50% + 8px);
    border-bottom: 0;
    border-right: 4px solid;
    border-radius: 0;
    position: absolute;
}
@media (min-width: 768px) {
    .gitflow-cornerline-bottom {
        border-radius: 0 0 15px 0;
        border-bottom: 4px solid;
        position: relative;
        height: calc(50% - 2px);
    }
}
</style>