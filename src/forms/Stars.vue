<template>
    <div>
        <font-awesome-icon :icon="['fas', 'star']" class="star"/>
        <font-awesome-icon :icon="['fas', 'star']" class="star"/>
        <font-awesome-icon :icon="['fas', 'star-half-alt']" class="star"/>
        <font-awesome-icon :icon="['far', 'star']" class="star"/>
        <font-awesome-icon :icon="['far', 'star']" class="star"/>
    </div>
</template>

<script>
const fullStar = '<font-awesome-icon :icon="[\'fas\', \'star\']" class="star"/>';
export default {
    name: "Stars",
    props: ['stars'],
    created() {
        console.log(this.stars, fullStar);
    }
}
</script>

<style scoped lang="scss">
    .star {
        color: gold;
        width: 16px;
        height: 16px;
    }
</style>