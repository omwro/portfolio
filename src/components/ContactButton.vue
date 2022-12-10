<template>
    <a
        class="contact-button-container"
        :href="url"
        :style="[
            { 'background-color': getColor() },
            { 'border-color': getColor() },
        ]">
        <div class="contact-button-img-container">
            <img :src="img" alt="image" />
        </div>
        <div class="text">{{ text }}</div>
    </a>
</template>

<script>
export default {
    name: "ContactButton",
    props: ["img", "text", "url", "color"],
    methods: {
        getColor() {
            return `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.contact-button-container {
    height: 32px;
    width: 128px;
    display: flex;
    flex-direction: row;
    border: solid 2px;
    border-radius: 10px;
    margin: 8px;
    justify-content: left;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        .contact-button-img-container {
            img {
                height: 22px;
                transition: 0.2s;
            }
        }

        .text {
            font-size: 22px;
            transition: 0.2s;
        }
    }

    .contact-button-img-container {
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 18px;
            filter: invert(0);
            transition: 0.2s;
        }
    }

    .text {
        display: flex;
        align-self: center;
        padding-left: 8px;
        font-size: 18px;
        font-weight: bold;
        color: $color-dark;
        transition: 0.2s;
    }
}
</style>
