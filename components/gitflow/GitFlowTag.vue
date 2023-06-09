<template>
    <div class="gitflow-tag"
         :style="{'background-color': `rgba(${hexToRgb(color)}, 0.4)`, 'border-color': color}"
         v-html="message"/>
</template>

<script>
import moment from "moment/moment";

export default {
    name: "GitFlowTag",
    props: ["color", "message"],
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
.gitflow-tag {
    width: auto;
    height: fit-content;
    padding: 2px 5px;
    margin: 3px 0;
    display: flex;
    align-items: center;
    border-radius: 2px;
    border: solid 1px;
    align-self: center;
}
@media (min-width: 768px) {
    .gitflow-tag {
        width: 88px;
    }
}
</style>