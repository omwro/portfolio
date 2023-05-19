<template>
    <Section id="about" :heading="$t('about.title')">
        <Content class="text-base leading-[1.8] max-w-[650px]">
            <p class="pb-5">{{ $t("about.paragraph1") }}</p>
            <p class="pb-5">{{ $t("about.paragraph2") }}</p>
        </Content>
    </Section>
</template>

<script setup>
import Section from "../elements/Section";
import Content from "../elements/Content";
</script>

<script>
export default {
    name: "About"
};
</script>

<style scoped>

</style>