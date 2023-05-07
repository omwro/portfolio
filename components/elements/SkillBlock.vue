<template>
    <div class="relative max-w-[96px] mt-4 mb-2 mx-2">
        <Icon :name="IconMapper[skill.name]"
              size="64px" class="bg-primary p-2 rounded-[25px_12px] text-primary-text-light dark:text-primary-text-dark"/>
        <div>
            <template v-if="t">
                {{ $t(skill.display_name) }}
            </template>
            <template v-else>
                {{ skill.display_name }}
            </template>
        </div>
        <div v-if="xp" class="absolute w-[70px] h-4 text-xs text-primary-text-light p-[3px] rounded-xl left-0.5 -top-3.5 bg-primary-light">{{ getExperienceString(skill) }}</div>
    </div>
</template>

<script setup>
import { IconMapper } from "../../composables/IconMapper";
</script>

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

<style scoped>

#app.dark .block .badge .badge,
#app.dark .badge {
    @apply bg-primary-bg-dark
}
</style>
