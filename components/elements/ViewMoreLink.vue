<template>
    <a :href="url" class="cursor-pointer pb-0.5 border-b border-b-primary w-fit mx-auto hover:text-primary-light">
        {{ $t("general.viewmore") }} {{ $t(title) }} <span class="text-primary">&#x2B9E;</span>
    </a>
</template>

<script>
export default {
    name: "ViewMoreLink",
    props: ["title", "url"],
};
</script>