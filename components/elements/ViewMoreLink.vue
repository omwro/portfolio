<template>
    <a :href="url" class="cursor-pointer pb-0.5 border-b-2 border-b-primary hover:text-primary-light">
        {{ $t("general.viewmore") }} {{ $t(title) }} <span class="text-primary">&#x2B9E;</span>
    </a>
</template>

<script>
export default {
    name: "ViewMoreLink",
    props: ["title", "url"],
};
</script>