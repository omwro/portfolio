<template>
    <div class="container">
        <img :src="object" alt="object"/>
        <div class="separator" :class="getSide()">
            <div :style="'background-image: url('+img+');'" class="line"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImgSeparator",
    props: ["left", "right", "img", "object"],
    methods: {
        getSide() {
            if (this.left) {
                return 'left'
            } else if (this.right) {
                return 'right'
            } else {
                return null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

img {
    object-fit: cover;
    background-color: transparent;
    position: relative;
    bottom: -5px;
}

.separator {
    height: 16px;
    width: 100%;
    display: flex;

    &.left {
        justify-content: left;
    }

    &.right {
        justify-content: right;
    }

    &.left .line, &.right .line {
        width: 67%;
    }

    img {
        object-fit: cover;
    }

    .line {
        width: 100%;
        background-repeat: repeat;
    }
}

#app.dark{
    .separator, .container {
        background-color: $dark1;
    }
}
</style>
