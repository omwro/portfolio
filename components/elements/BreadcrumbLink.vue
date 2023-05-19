<template>
    <a :href="url" class="cursor-pointer w-fit pb-0.5 hover:text-primary-light">{{ text }}</a>
</template>

<script>
export default {
    name: "BreadcrumbLink",
    props: ["text", "url"],
};
</script>
