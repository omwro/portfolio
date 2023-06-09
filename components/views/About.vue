<template>
    <Section id="about" :heading="$t('about.title')">
        <Content class="text-base leading-[1.8] max-w-[650px]">
            <p class="pb-5">{{ $t("about.paragraph1") }}</p>
            <p class="pb-5">{{ $t("about.paragraph2") }}</p>
            <p class="pb-5">{{ $t("about.hobbies") }}</p>
            <div class="flex flex-wrap gap-y-8">
                <SkillBlock v-for="(hobby, key) in hobbies" :key="key" :skill="hobby" :hideText="true" />
            </div>
        </Content>
    </Section>
</template>

<script setup>
import Section from "../elements/Section";
import Content from "../elements/Content";
import SkillBlock from "../elements/SkillBlock";
import skills from "../../assets/json/skills.json";
const hobbies = skills.filter(x => x.group === "Hobbies");
</script>

<script>
export default {
    name: "About"
};
</script>

<style scoped>

</style>