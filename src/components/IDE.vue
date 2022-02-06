<template>
    <div>
        <div v-for="(row, i) in code" class="row" :key="i" :data-line="i+1">
            <span>{{row}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "IDE",
    data: () => ({
        code: null
    }),
    async created() {
        const code = await fetch("/ide/Introduction.ts").then((res) => res.text())
        this.code = code.replaceAll("\r", "").split("\n")
    }
}
</script>

<style scoped lang="scss">
.row {
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 28px;
    white-space: break-spaces;

    &:before {
        content: attr(data-line);
        color: gray;
        display: inline-block;
        width: 32px;
    }
}
</style>