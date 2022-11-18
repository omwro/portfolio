<template>
    <div class="gitflow-left">
        <GitFlowBlock :hideBullet="loadmore" />
        <GitFlowSpacer />
    </div>
</template>

<script>
import GitFlowSpacer from "./GitFlowSpacer";
import GitFlowBlock from "./GitFlowBlock";
export default {
    name: "GitFlowLeft",
    components: { GitFlowBlock, GitFlowSpacer },
    props: ["item", "start", "loadmore"],
};
</script>

<style lang="scss" scoped>
.gitflow-left {
    display: flex;
    flex-direction: row;
}
</style>
