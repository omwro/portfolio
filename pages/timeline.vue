<template>
    <NuxtLayout>
        <Section id="timeline-page" :heading="$t('timeline.title')" class="pt-4">
            <template #top>
                <BreadcrumbLink text="/ Home" url="/#timeline" />
            </template>
            <Content class="content">
                <GitFlow
                    class="gitflow-mobile"
                    :items="sortedGitItemsMobile($t)"
                    :colors="colors" />
                <GitFlow
                    class="gitflow-desktop"
                    :items="sortedGitItemsDesktop($t)"
                    :colors="colors" />
            </Content>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import Section from "../components/elements/Section";
import BreadcrumbLink from "../components/elements/BreadcrumbLink";
import Content from "../components/elements/Content";
import GitFlow from "../components/gitflow/GitFlow";
import {sortedGitItemsDesktop, sortedGitItemsMobile, colors} from "../composables/useGitFlow";
</script>

<script>
export default {
    name: "timeline"
};
</script>

<style>
#timeline-page .content * {
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
#gitflow .skill-chip-container .skill-chip-block {
    @apply flex gap-1 px-1.5 rounded-[15px_7px] border;
}
#gitflow .skill-chip-container .skill-chip-block img {
    @apply w-4 h-4 invert-[1] object-contain;
}
#gitflow .skill-chip-container .skill-chip-block span {
    @apply text-xs self-center;
}
</style>