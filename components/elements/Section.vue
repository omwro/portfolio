<template>
    <section
        class="flex flex-col justify-center overflow-auto px-4 pt-32 pb-16 text-primary-text-dark bg-primary-bg-light">
        <h2 v-if="props.heading" class="mx-auto mt-0 border-b text-center text-4xl font-bold mb-2.5 border-b-primary">
            {{ props.heading }}</h2>
        <slot />
    </section>
</template>

<script setup>
const props = defineProps({
    heading: String
});
</script>
<script>
export default {
    name: "Section"
};
</script>