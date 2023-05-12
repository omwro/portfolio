<template>
    <section
        class="flex flex-col justify-center overflow-auto px-4 pt-32 pb-24 max-w-[1200px] mx-auto">
        <slot name="top"/>
        <Heading v-if="props.heading" :text="props.heading" />
        <p v-if="props.paragraph" class="text-center my-4">{{ props.paragraph }}</p>
        <slot />
    </section>
</template>

<script setup>
import Heading from "./Heading";

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