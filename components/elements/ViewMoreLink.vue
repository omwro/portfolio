<template>
    <a :href="url" class="cursor-pointer pb-0.5 border-b border-b-primary w-fit mx-auto hover:text-primary-light">
        {{ $t("general.viewmore") }} {{ $t(title) }} <IconWrapper name="arrowRight" size="20px"/>
    </a>
</template>

<script setup>
import IconWrapper from "./IconWrapper";
</script>

<script>
export default {
    name: "ViewMoreLink",
    props: ["title", "url"],
};
</script>