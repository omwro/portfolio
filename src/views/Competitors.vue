<template>
    <section id="competitors">
        <h1>{{ $t("competitors.title") }}</h1>
        <p>{{ $t("competitors.desc") }}</p>
        <div class="content">
            <CompetitorCard
                v-for="profile in profiles"
                :profile="profile"
                :key="profile.name" />
        </div>
    </section>
</template>

<script>
import json from "../../public/data/competitors.json";
import CompetitorCard from "@/components/CompetitorCard";

export default {
    name: "Competitors",
    components: { CompetitorCard },
    data: () => ({
        profiles: json,
    }),
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#competitors {
    background-color: $background-light;

    p {
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 32px;
    }
}

#app.dark #competitors {
    background-color: $background-dark;
    color: $background-light;
}
</style>
