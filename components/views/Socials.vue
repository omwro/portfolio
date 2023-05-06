<template>
    <Section id="socials" :heading="$t('socials.title')" :paragraph="$t('socials.desc')">
        <Content class="sm:flex-row flex-wrap">
            <ContactButton
                v-for="(s, i) in socials"
                :key="i"
                :icon="s.icon"
                :text="s.name"
                :url="s.url"
                :color="s.color" />
        </Content>
    </Section>
</template>

<script setup>
import socials from "../../assets/json/contact.json";
import ContactButton from "../elements/ContactButton";
import Section from "../elements/Section";
import Content from "../elements/Content";
</script>

<script>
export default {
    name: "Socials"
};
</script>