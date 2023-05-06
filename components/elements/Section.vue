<template>
    <section
        class="flex flex-col justify-center overflow-auto px-4 pt-32 pb-24 text-primary-text-dark bg-primary-bg-light max-w-[1200px] mx-auto">
        <h2 v-if="props.heading" class="mx-auto mt-0 border-b text-center text-4xl font-bold mb-2.5 border-b-primary">
            {{ props.heading }}
        </h2>
        <p v-if="props.paragraph" class="text-center my-4">{{ props.paragraph }}</p>
        <slot />
    </section>
</template>

<script setup>
const props = defineProps({
    heading: String,
    paragraph: String
});
</script>
<script>
export default {
    name: "Section"
};
</script>