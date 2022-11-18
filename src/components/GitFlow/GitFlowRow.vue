<template>
    <div class="gitflow-row">
        <slot />
    </div>
</template>

<script>
export default {
    name: "GitFlowRow",
};
</script>

<style lang="scss" scoped>
.gitflow-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    column-gap: 12px;
    min-height: 36px;

    &:not(.gitflow-row-loadmore):hover {
        background-color: rgba(white, 0.1);
    }
}
</style>
