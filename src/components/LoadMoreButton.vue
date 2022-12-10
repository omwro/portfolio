<template>
    <div class="loadmore-button" @click="onLoadMore(value)">
        {{ $t("general.loadmore") }}
    </div>
</template>

<script>
export default {
    name: "LoadMoreButton",
    props: ["value"],
    methods: {
        onLoadMore(value) {
            this.$emit("clicked", value);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.loadmore-button {
    display: block;
    padding: 8px 32px;
    border: solid 2px $accent-dark;
    background-color: rgb($accent, 0.9);
    color: $color-dark;
    width: fit-content;
    border-radius: 3px;
    margin: 0 auto;
    cursor: pointer;
    box-shadow: 0 0 10px 1px $accent-dark;

    &:hover {
        background-color: $accent;
    }
}

.dark .loadmore-button {
    background-color: rgb($accent, 0.7);

    &:hover {
        background-color: $accent;
    }
}
</style>
