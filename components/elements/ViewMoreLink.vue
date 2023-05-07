<template>
    <a :href="url" class="cursor-pointer pb-0.5 border-b border-b-primary w-fit mx-auto hover:text-primary-light">
        {{ $t("general.viewmore") }} {{ $t(title) }} <Icon :name="IconMapper.arrowRight"
                                                           size="20px"/>
    </a>
</template>

<script setup>
import { IconMapper } from "../../composables/IconMapper";
</script>

<script>
export default {
    name: "ViewMoreLink",
    props: ["title", "url"],
};
</script>