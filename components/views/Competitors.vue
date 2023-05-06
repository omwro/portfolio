<template>
    <Section id="bg-primary-bg-light" :heading="$t('competitors.title')" :paragraph="$t('competitors.desc')">
        <Content class="sm:flex-row flex-wrap gap-8">
            <CompetitorCard
                v-for="profile in profiles"
                :profile="profile"
                :key="profile.name" />
        </Content>
    </Section>
</template>

<script setup>
import profiles from "../../assets/json/competitors.json";
import CompetitorCard from "../elements/CompetitorCard";
import Section from "../elements/Section";
import Content from "../elements/Content";
</script>

<script>
export default {
    name: "Competitors"
};
</script>