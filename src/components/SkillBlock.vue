<template>
    <div class="block">
        <img :data-src="skill.img" :alt="skill.name" />
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
                .map((x) => x.months)
                .reduce((prevValue, currValue) => prevValue + currValue);
            let years = Math.floor(totalxp / 12);
            if (years) return this.getYearText(years);
            return this.getMonthText(totalxp);
        },
        getYearText(years) {
            const yearText =
                years > 1 ? this.$t("skills.years") : this.$t("skills.year");
            return `${years} ${yearText}`;
        },
        getMonthText(totalXp) {
            const monthText =
                totalXp > 1
                    ? this.$t("skills.months")
                    : this.$t("skills.month");
            return `${totalXp} ${monthText}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/variables";

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
        object-fit: contain;
    }

    .badge {
        position: absolute;
        width: 70px;
        height: 16px;
        top: -14px;
        left: 2px;
        padding: 3px;
        border-radius: 12px;
        background: $accent-light;
        font-size: 12px;
        color: $color-dark;
    }
}

#app.dark .block .badge,
#app.dark {
    .badge {
        background: $background-dark;
    }
}
</style>
