<template>
    <div class="gitflow-spacer"/>
</template>

<script>
export default {
    name: "GitFlowSpacer"
}
</script>

<style scoped>
.gitflow-spacer {
    margin-left: 79px;
    display: none;
}
@media (min-width: 768px) {
    .gitflow-spacer {
        margin-left: 130px;
        display: flex;
    }
}

</style>