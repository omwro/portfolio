<template>
    <div class="gitflow-block-container">
        <div class="gitflow-block-h-line" />
        <div class="gitflow-block-bg-half" />
        <div v-if="hideBullet === undefined" class="gitflow-block-bullet">
            <img src="img/company/logo.webp" alt="logo" />
        </div>
    </div>
</template>

<script>
export default {
    name: "GitFlowBlock",
    props: ["hideBullet"],
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.gitflow-block-container {
    position: relative;

    .gitflow-block-bg-half {
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 50%,
            rgba($accent, 0.4) 50%
        );
        height: calc(100% - 8px);
        margin: 4px 0;
        width: 30px;
        position: relative;
    }

    .gitflow-block-h-line {
        width: 4px;
        height: 100%;
        background: $accent;
        position: absolute;
        left: 13px;
    }

    .gitflow-block-bullet {
        height: 24px;
        width: 24px;
        border-radius: 100%;
        border: solid 3px $accent;
        background-color: $accent;
        align-self: center;
        position: absolute;
        top: calc(50% - 15px);

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

.dark .gitflow-block-bullet img {
    filter: invert(1);
}

#gitflow-container .gitflow-row {
    &:last-child .gitflow-block-h-line {
        height: calc(50%);
    }
}
</style>
