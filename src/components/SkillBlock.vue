<template>
    <div class="block">
        <img :data-src="skill.img" :alt="skill.name"/>
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
        background-color: $accent;
    }

    .badge {
        position: absolute;
        width: 64px;
        height: 16px;
        top: -14px;
        left: 8px;
        padding: 3px;
        border-radius: 6px 12px;
        background: $accent-light;
        font-size: 12px;

    }
}

#app.dark .block .badge, #app.dark {
    .badge {
        background: $accent-dark;
    }
}
</style>