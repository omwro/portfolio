<template>
    <Section id="socials" :heading="$t('socials.title')">
        <p class="text-center">{{ $t("socials.desc") }}</p>
        <div class="flex flex-row flex-wrap justify-center">
            <ContactButton
                v-for="(s, i) in socials"
                :key="i"
                :icon="s.icon"
                :text="s.name"
                :url="s.url"
                :color="s.color" />
        </div>
    </Section>
</template>

<script setup>
import socials from "../../assets/json/contact.json";
import ContactButton from "../elements/ContactButton";
import Section from "../elements/Section";
</script>

<script>
export default {
    name: "Socials"
};
</script>