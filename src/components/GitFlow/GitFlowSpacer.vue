<template>
    <div class="gitflow-spacer"></div>
</template>

<script>
export default {
    name: "GitFlowSpacer",
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.gitflow-spacer {
    width: 12px;
    height: calc(100% - 8px);
    background-color: rgb($accent, 0.4);
    border-right: solid 3px $accent;
    margin: 4px 0;
}
</style>
