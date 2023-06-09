<template>
    <Section id="timeline" :heading="$t('timeline.title')">
        <Content class="content">
            <GitFlow
                class="gitflow-mobile"
                :items="sortedGitItemsMobile($t, true)"
                :colors="colors" />
            <GitFlow
                class="gitflow-desktop"
                :items="sortedGitItemsDesktop($t, true)"
                :colors="colors" />
        </Content>
        <ViewMoreLink title="timeline.title" url="/timeline" />
    </Section>
</template>

<script setup>
import ViewMoreLink from "../elements/ViewMoreLink";
import GitFlow from "../gitflow/GitFlow";
import Section from "../elements/Section";
import Content from "../elements/Content";
import {sortedGitItemsDesktop, sortedGitItemsMobile, colors} from "../../composables/useGitFlow";
</script>

<script>
export default {
    name: "Timeline",
};
</script>

<style>
#timeline .content * {
    box-sizing: content-box;
}

#gitflow.gitflow-mobile {
    @apply flex md:hidden;
}
#gitflow.gitflow-mobile .gitflow-tag.gitflow-tag-mobile {
    @apply w-[135px];
}

#gitflow.gitflow-desktop {
    @apply hidden md:flex;
}
#gitflow .skill-chip-container {
    @apply flex flex-row flex-wrap gap-2 pt-1;
}
#gitflow .skill-chip-container .skill-chip-block img {
    @apply w-4 h-4 invert-[1] object-contain;
}
#gitflow .skill-chip-container .skill-chip-block span {
    @apply text-xs self-center;
}
#app.dark #gitflow .gitflow-row:hover {
    @apply bg-[rgba(white,0.1)];
}
#app.dark #gitflow .skill-chip-block img {
    @apply invert-0;
}
</style>
