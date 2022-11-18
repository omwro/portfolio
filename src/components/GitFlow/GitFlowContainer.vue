<template>
    <div id="gitflow-container">
        <template v-for="(item, i) in items">
            <GitFlowRow v-if="loadMore || !item.showmore" :key="i">
                <GitFlowLeft :item="item" />
                <GitFlowRight :item="item" />
            </GitFlowRow>
        </template>
        <GitFlowRow class="gitflow-row-loadmore" v-if="!loadMore">
            <GitFlowLeft loadmore />
            <GitFlowRight loadmore @clicked="loadMore = true" />
        </GitFlowRow>
        <GitFlowRow>
            <GitFlowLeft start />
            <GitFlowRight start />
        </GitFlowRow>
    </div>
</template>

<script>
import json from "../../../public/data/timeline.json";
import GitFlowRow from "./GitFlowRow";
import GitFlowLeft from "./GitFlowLeft";
import GitFlowRight from "./GitFlowRight";

export default {
    name: "GitFlowContainer",
    components: { GitFlowRight, GitFlowLeft, GitFlowRow },
    data: () => ({
        items: json,
        loadMore: false,
    }),
};
</script>

<style lang="scss" scoped>
#gitflow-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
}
</style>
