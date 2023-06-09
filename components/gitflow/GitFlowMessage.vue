<template>
    <div class="gitflow-message-container">
        <div class="gitflow-message-spacer"
             :style="{'border-color': color, 'background-color': `rgba(${hexToRgb(color)}, 0.4)`}"
             :class="'ms'+spacing"/>
        <div class="gitflow-message-block">
            <template v-if="tag">
                <GitFlowTag class="gitflow-tag-mobile" :color="color" :message="tag"/>
            </template>
            <div class="py-1" v-html="message"/>
        </div>
    </div>
</template>

<script setup>
import GitFlowTag from "./GitFlowTag";

</script>

<script>
export default {
    name: "GitFlowMessage",
    props: ["spacing", "color", "message", "description", "tag"],
    methods: {
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
                : "0, 0, 0";
        }
    }
}
</script>

<style scoped>
.gitflow-message-container {
    display: flex;
    width: auto;
    min-height: 36px;
    align-self: center;
}
.gitflow-message-container .gitflow-message-spacer {
    width: 10px;
    border-right: 3px solid;
    margin: 3px 10px 3px 0;
}
@media (min-width: 768px) {
    .gitflow-message-container .gitflow-message-spacer.ms1 {
        width: 40px;
    }
    .gitflow-message-container .gitflow-message-spacer.ms2 {
        width: 70px;
    }
    .gitflow-message-container .gitflow-message-spacer.ms3 {
        width: 100px;
    }
    .gitflow-message-container .gitflow-message-spacer.ms4 {
        width: 130px;
    }
}
.gitflow-message-container .gitflow-message-block {
    align-self: center;
    width: calc(100% - 155px);
    flex: auto;
    padding: 2px 0;
}
.gitflow-message-container .gitflow-message-block .gitflow-tag-mobile {
    display: flex;
}
@media (min-width: 768px) {
    .gitflow-message-container .gitflow-message-block .gitflow-tag-mobile {
        display: none;
    }
}

</style>