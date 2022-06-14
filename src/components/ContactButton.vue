<template>
    <div class="contact-button-container" @click="goTo(url)">
        <div class="contact-button-img-container">
            <img :src="img" alt="image"/>
        </div>
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: "ContactButton",
    props: ["img", "text", "url"],
    methods: {
        goTo(url) {
            window.open(url)
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
    background-color: $dark2;
    border: solid 2px $brilliant-red;
    border-radius: 10px;
    margin: 16px;
    justify-content: left;
    cursor: pointer;

    .contact-button-img-container {
        width: 75px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 48px;

        }
    }

    .text {
        display: flex;
        align-self: center;
        padding-left: 8px;
        font-size: 32px;
        font-weight: bold;
    }


}
</style>