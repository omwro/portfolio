<template>
    <div class="block">
        <img :class="'c'+skill.color" :data-src="skill.img" :alt="skill.name"/>
        <div>
            <template v-if="t">
                {{ $t(skill.display_name) }}
            </template>
            <template v-else>
                {{ skill.display_name }}
            </template>
        </div>
        <div v-if="xp" class="badge">{{ getExperienceString(skill) }}</div>
    </div>
</template>

<script>
export default {
    name: "SkillBlock",
    props: ["skill", "xp", "t"],
    methods: {
        getExperienceString(skill) {
            const totalxp = skill.xp
                .map(x => x.months)
                .reduce((prevValue, currValue) => prevValue + currValue)
            let years = Math.floor(totalxp / 12)
            if (years) return `${years} ${this.$t('skills.years')}`
            return `${totalxp} ${this.$t('skills.months')}`
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.block {
    position: relative;
    max-width: 96px;
    margin: 16px 8px 8px;

    img {
        width: 64px;
        height: 64px;
        padding: 8px;
        border-radius: 25px 12px;
    }

    .badge {
        position: absolute;
        width: 64px;
        height: 16px;
        top: -14px;
        left: 8px;
        padding: 3px;
        border-radius: 6px 12px;
        background: $light6;
        font-size: 12px;
    }

    .c1 {
        background-color: $accent;
    }

    .c2 {
        background-color: $accent2;
    }

    .c3 {
        background-color: $accent3;
    }

    .c4 {
        background-color: $accent4;
    }

    .c5 {
        background-color: $dark5;
    }
}

#app.dark .block .badge, #app.dark .badge {
    background: $dark6;
}
</style>