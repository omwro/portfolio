<template>
    <div class="gitflow-right">
        <template v-if="item">
            <GitFlowTag>
                {{ $t(item.startdate) }} -
                {{ $t(item.enddate ? item.enddate : $t("timeline.present")) }}
            </GitFlowTag>
            <span class="gitflow-role">{{ $t(item.role) }}</span>
            <span class="gitflow-company">{{ item.company }}</span>
            <span class="gitflow-desc">{{ $t(item.desc) }}</span>
        </template>
        <template v-if="loadmore !== undefined">
            <LoadMoreButton @clicked="onLoadMore" />
        </template>
        <template v-if="start !== undefined">
            <span class="gitflow-role">{{ $t("timeline.initialCommit") }}</span>
        </template>
    </div>
</template>

<script>
import GitFlowTag from "./GitFlowTag";
import LoadMoreButton from "../LoadMoreButton";

export default {
    name: "GitFlowRight",
    components: { LoadMoreButton, GitFlowTag },
    props: ["item", "start", "loadmore"],
    methods: {
        onLoadMore(value) {
            this.$emit("clicked", value);
        },
    },
};
</script>

<style lang="scss" scoped>
.gitflow-right {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    padding: 4px 0;
    align-self: center;

    .gitflow-company {
        font-size: 0.875rem;
    }

    .gitflow-desc {
        font-size: 0.75rem;
    }
}
</style>
