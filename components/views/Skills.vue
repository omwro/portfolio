<template>
    <section id="skills">
        <h1>{{ $t("skills.title") }}</h1>
        <div class="content">
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.languages") }}</h1>
                <div
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getLanguages()"
                        :key="skill.name"
                        :skill="skill"
                        :xp="true" />
                </div>
            </div>
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.frameworks") }}</h1>
                <div
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getFrameworks()"
                        :key="skill.name"
                        :skill="skill"
                        :xp="true" />
                </div>
            </div>
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.environments") }}</h1>
                <div
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getEnvironments()"
                        :key="skill.name"
                        :skill="skill"
                        :xp="true" />
                </div>
            </div>
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.competencies") }}</h1>
                <div
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getCompetencies()"
                        :key="skill.name"
                        :skill="skill"
                        :t="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import skills from "../../assets/json/skills.json";
import SkillBlock from "../elements/SkillBlock";

const getTotalMonths = (skill) => skill.xp
        .map((x) => x.months)
        .reduce((prevValue, currValue) => prevValue + currValue);

const getExperienceString = (skill) => {
    const totalxp = getTotalMonths(skill);
    let years = Math.floor(totalxp / 12);
    if (years) return `${years} ${this.$t("skills.years")}`;
    return `${totalxp} ${this.$t("skills.months")}`;
};

const getLanguages = () => skills
    .filter(
        (x) => x.type === "Language" && x.show_portfolio === true
    )
    .sort(
        (x, y) => getTotalMonths(y) - getTotalMonths(x)
    );


const getFrameworks = () => skills
    .filter(
        (x) => x.type === "Framework" && x.show_portfolio === true
    )
    .sort(
        (x, y) => getTotalMonths(y) - getTotalMonths(x)
    );


const getEnvironments = () => skills
    .filter(
        (x) =>
            x.type === "Environments" && x.show_portfolio === true
    )
    .sort(
        (x, y) => getTotalMonths(y) - getTotalMonths(x)
    );


const getCompetencies = () => skills
    .filter(
        (x) => x.type === "Competencies" && x.show_portfolio === true
    );
</script>

<script>
export default {
    name: "Skills"
};
</script>

<style scoped>
.content {
    @apply flex flex-col gap-8 mt-0;
}
.content .skill-container {
    @apply bg-primary-block-light flex flex-col p-4 rounded-[5px] border-x-4 border-x-primary;
}
.content .skill-container h1 {
    @apply mt-0 border-b-primary;
}
.content .img-container {
    @apply flex flex-row flex-wrap text-center justify-center text-[0.9rem];
}
#app.dark .content .skill-container {
    @apply bg-primary-block-dark;
}
</style>
