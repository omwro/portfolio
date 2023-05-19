<template>
    <div class="gitflow-block" :class="mobile ? 'gitflow-block-mobile' : ''">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "GitFlowBlock",
    props: {
        mobile: Boolean
    }
}
</script>

<style scoped>
.gitflow-block {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    min-height: 30px;
}
.gitflow-block.gitflow-block-mobile {
    position: absolute;
    left: 0;
    height: 100%;
}
@media (min-width: 768px) {
    .gitflow-block.gitflow-block-mobile {
        position: relative;
    }
}
</style>