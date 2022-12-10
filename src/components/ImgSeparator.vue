<template>
    <div class="container">
        <img v-if="extern" :src="extern" alt="extern" class="absolute" />
        <img :src="object" alt="object" :class="absolute ? 'absolute' : ''" />
        <div class="separator">
            <div :style="'background-image: url(' + img + ');'" class="line" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ImgSeparator",
    props: ["img", "object", "absolute", "extern"],
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.container {
    position: relative;
    img {
        object-fit: cover;
        background-color: transparent;

        &.absolute {
            position: absolute;
        }

        &:not(&.absolute) {
            margin-bottom: -4px;
        }
    }

    .separator {
        height: 16px;
        width: 100%;
        display: flex;

        img {
            object-fit: cover;
        }

        .line {
            width: 100%;
            background-repeat: repeat;
        }
    }
}

#app.dark {
    .separator,
    .container {
        background-color: $background-dark;
    }
}
</style>
