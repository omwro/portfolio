<template>
    <Section id="skills" :heading="$t('skills.title')">
        <Content class="sm:flex-row flex-wrap gap-8">
            <SkillCard v-for="(skillGroup, key) in groupedHomepageSkills" :key="key" :skillGroup="skillGroup"/>
            <ViewMoreLink title="skills.title" url="/skills" />
        </Content>
    </Section>
</template>

<script setup>
import skills from "../../assets/json/skills.json";
import Section from "../elements/Section";
import Content from "../elements/Content";
import { getGroupedSkills } from "../../composables/useSkills";
import SkillCard from "../elements/SkillCard";
import ViewMoreLink from "../elements/ViewMoreLink";

const groupedHomepageSkills = getGroupedSkills(skills, ['js', 'css', 'php']);
</script>

<script>
export default {
    name: "Skills"
};
</script>

