<template>
    <section id="bg-primary-bg-light">
        <h1>{{ $t("competitors.title") }}</h1>
        <p class="text-center">{{ $t("competitors.desc") }}</p>
        <div class="content flex flex-row flex-wrap gap-8">
            <CompetitorCard
                v-for="profile in profiles"
                :profile="profile"
                :key="profile.name" />
        </div>
    </section>
</template>

<script setup>
import profiles from "../../assets/json/competitors.json";
import CompetitorCard from "../elements/CompetitorCard";
</script>

<script>
export default {
    name: "Competitors"
};
</script>