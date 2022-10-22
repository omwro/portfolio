<template>
    <div class="contact-button-container"
         @click="goTo(url)"
         :style="[
             {'background-color': getColor()},
             {'border-color': getColor()},
          ]">
        <div class="contact-button-img-container">
            <img :src="img" alt="image"/>
        </div>
        <div class="text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: "ContactButton",
    props: ["img", "text", "url", "color"],
    methods: {
        goTo(url) {
            window.open(url)
        },
        getColor() {
            return `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.contact-button-container {
    height: 65px;
    width: 256px;
    display: flex;
    flex-direction: row;
    border: solid 2px;
    border-radius: 10px;
    margin: 16px;
    justify-content: left;
    cursor: pointer;

    &:hover {
        .contact-button-img-container {
            img {
                height: 46px;
                transition: .2s;
            }
        }

        .text {
            font-size: 38px;
            transition: .2s;
        }
    }

    .contact-button-img-container {
        width: 75px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 40px;
            filter: invert(0);
            transition: .2s;
        }
    }

    .text {
        display: flex;
        align-self: center;
        padding-left: 8px;
        font-size: 32px;
        font-weight: bold;
        color: $color-dark;
        transition: .2s;
    }
}
</style>