<template>
    <NuxtLayout>
        <Section v-if="groupedSkill" :heading="mainSkill.display_name" class="flex flex-col gap-4 pt-4">
            <template #top>
                <div class="flex flex-row gap-2">
                    <BreadcrumbLink text="/ Home" url="/#skills" />
                    <BreadcrumbLink text="/ Skills" url="/skills" />
                </div>
            </template>
            <div v-if="mainSkill">
                <SkillDetails :skill="mainSkill"/>
            </div>
            <Heading v-if="bodySkills" :text="$t('skills.inuse')" class="pt-8"/>
            <div v-if="bodySkills" class="grid gap-4" :class="{'md:grid-cols-2': bodySkills.length >= 2}">
                <SkillDetails v-for="skill in bodySkills" :skill="skill"/>
            </div>
            <Heading v-if="deprecatedSkills" :text="$t('skills.deprecated')" class="pt-8"/>
            <div v-if="deprecatedSkills" :class="{'md:grid-cols-2': deprecatedSkills.length >= 2}" class="grid md:grid-cols-2 gap-4">
                <SkillDetails v-for="skill in deprecatedSkills" :skill="skill"/>
            </div>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import skills from "../../assets/json/skills.json"
import { getGroupedSkills } from "../../composables/useSkills";
import Section from "../../components/elements/Section";
import BreadcrumbLink from "../../components/elements/BreadcrumbLink";
import SkillDetails from "../../components/elements/SkillDetails";
import Heading from "../../components/elements/Heading";

const groupedSkill = getGroupedSkills(skills, [useRoute().params.name])[[useRoute().params.name]]
const mainSkill = groupedSkill.main[0]
const bodySkills = groupedSkill.body
const deprecatedSkills = groupedSkill.deprecated
</script>

<script>
export default {
    name: "[name]"
};
</script>