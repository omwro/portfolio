<template>
    <div class="gitflow-tag"><slot /></div>
</template>

<script>
export default {
    name: "GitFlowTag",
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.gitflow-tag {
    background-color: rgb($accent, 0.4);
    border: solid 1px $accent;
    padding: 4px;
    border-radius: 2px;
    width: 135px;
    font-size: 0.875rem;
}
</style>
