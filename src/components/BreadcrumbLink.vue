<template>
    <a :href="url" class="breadcrumb-link">{{ text }}</a>
</template>

<script>
export default {
    name: "BreadcrumbLink",
    props: ["text", "url"],
};
</script>

<style lang="scss" scoped>
@import "src/variables";

#app .breadcrumb-link {
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: solid 2px $accent;
    width: fit-content;

    &:hover {
        color: $accent-light;
    }
}
</style>
