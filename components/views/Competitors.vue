<template>
    <Section id="bg-primary-bg-light" :heading="$t('competitors.title')">
        <p class="text-center">{{ $t("competitors.desc") }}</p>
        <div class="content flex flex-row flex-wrap gap-8">
            <CompetitorCard
                v-for="profile in profiles"
                :profile="profile"
                :key="profile.name" />
        </div>
    </Section>
</template>

<script setup>
import profiles from "../../assets/json/competitors.json";
import CompetitorCard from "../elements/CompetitorCard";
import Section from "../elements/Section";
</script>

<script>
export default {
    name: "Competitors"
};
</script>