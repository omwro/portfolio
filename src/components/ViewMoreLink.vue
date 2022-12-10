<template>
    <a :href="url" class="view-more-link">
        {{ $t("general.viewmore") }} {{ $t(title) }} <span>&#x2B9E;</span>
    </a>
</template>

<script>
export default {
    name: "ViewMoreLink",
    props: ["title", "url"],
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.view-more-link {
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: solid 2px $accent;

    &:hover {
        color: $accent-light;
    }

    span {
        color: $accent;
    }
}
</style>
