<template>
    <NuxtLayout>
        <Section :heading="$t('skills.competencies')" class="skills-section">
            <template #top>
                <BreadcrumbLink text="/ Home" url="/#skills" />
            </template>
            <div class="flex flex-row flex-wrap gap-4 justify-center my-8">
                <SkillBlock v-for="(skill, key) in competencies" :key="key" :skill="skill" :translate="true" />
            </div>
        </Section>
        <Section :heading="$t('skills.title')" class="pt-0">
            <div class="columns-[300px_3] space-y-4 mt-8 self-center">
                <SkillCard v-for="(skillGroup, key) in groupedTechStack" :key="key" :skillGroup="skillGroup"
                           class="break-inside-avoid-column mx-auto" />
            </div>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import skills from "../../assets/json/skills.json";
import Section from "../../components/elements/Section";
import { getGroupedSkills } from "../../composables/useSkills";
import BreadcrumbLink from "../../components/elements/BreadcrumbLink";
import SkillCard from "../../components/elements/SkillCard";
import SkillBlock from "../../components/elements/SkillBlock";

const groupedTechStack = getGroupedSkills(skills.filter(x => !["Competencies", "Hobbies"].includes(x.group)));
const competencies = skills.filter(x => x.group === "Competencies");
</script>

<script>
export default {
    name: "skills"
};
</script>

<style scoped>
section {
    @apply py-4;
}
</style>