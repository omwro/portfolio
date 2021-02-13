<template>
    <div>
        <template v-for="i in Math.floor(parseInt(this.stars) / 2)">
            <font-awesome-icon v-if="i > 0" :key="'0'+i" :icon="['fas', 'star']" class="star"/>
        </template>
        <template v-for="i in Math.floor(parseInt(this.stars) % 2)">
            <font-awesome-icon v-if="i > 0" :key="'1'+i" :icon="['fas', 'star-half-alt']" class="star"/>
        </template>
        <template v-for="i in Math.floor(5 - (parseInt(this.stars) / 2))">
            <font-awesome-icon v-if="i > 0" :key="'2'+i" :icon="['far', 'star']" class="star"/>
        </template>
    </div>
</template>

<script>
export default {
    name: "Stars",
    props: ['stars']
}
</script>

<style lang="scss" scoped>
.star {
    color: gold;
    width: 16px;
    height: 16px;
}
</style>