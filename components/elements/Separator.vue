<template>
    <div class="flex h-2 w-full separator" :class="getSide()">
        <div class="w-full line bg-primary"></div>
    </div>
</template>

<script>
export default {
    name: "Separator",
    props: ["left", "right"],
    methods: {
        getSide() {
            if (this.left) {
                return "left";
            } else if (this.right) {
                return "right";
            } else {
                return null;
            }
        }
    }
};
</script>

<style scoped>
.separator.left {
    justify-content: left;
}

.separator.right {
    justify-content: right;
}

.separator.left .line,
.separator.right .line {
    @apply w-2/3;
}

.separator.right .line {
    @apply rounded-[10px_0_0_10px];
}

.separator.left .line {
    @apply rounded-[0_10px_10px_0];
}
</style>
