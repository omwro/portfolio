<template>
    <div class="gitflow-horizontal-line"
         :style="{'z-index': index, 'border-color': color}"
         :class="[
             left ? 'gitflow-horizontal-line-left' : '',
             right ? 'gitflow-horizontal-line-right' : '',
             half ? 'gitflow-horizontal-line-half' : '']"/>

</template>

<script>
export default {
    name: "GitFlowHorizontalLine",
    props: {
        index: Number,
        color: String,
        left: Boolean,
        right: Boolean,
        half: Boolean
    }
}
</script>

<style scoped>
.gitflow-horizontal-line {
    width: 30px;
    height: auto;
    align-self: center;
    border-top: 4px solid;
    display: none;
}
@media (min-width: 768px) {
    .gitflow-horizontal-line {
        display: flex;
    }
}
.gitflow-horizontal-line.gitflow-horizontal-line-right {
    width: 15px;
    right: 0;
}
.gitflow-horizontal-line.gitflow-horizontal-line-left {
    width: 15px;
    left: 0;
}
.gitflow-horizontal-line.gitflow-horizontal-line-half {
    height: 14px;
    margin-top: 14px;
    border-width: -1px;
}
.gitflow-horizontal-line.gitflow-horizontal-line-half:not(.gitflow-horizontal-line-right):not(.gitflow-horizontal-line-left) {
    width: 5px;
}
.gitflow-horizontal-line.gitflow-horizontal-line-right, .gitflow-horizontal-line:not(.gitflow-horizontal-line-half) {
    display: none;
}
@media (min-width: 768px) {
    .gitflow-horizontal-line.gitflow-horizontal-line-half:not(.gitflow-horizontal-line-right):not(.gitflow-horizontal-line-left) {
        width: 30px;
    }
    .gitflow-horizontal-line.gitflow-horizontal-line-right, .gitflow-horizontal-line:not(.gitflow-horizontal-line-half) {
        display: flex;
    }
}
.gitflow-block .gitflow-horizontal-line {
    position: absolute;
}

</style>