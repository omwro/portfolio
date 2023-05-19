<template>
    <h2 class="mx-auto mt-0 border-b text-center text-4xl font-bold mb-2.5 border-b-primary">
        {{ text }}
    </h2>
</template>

<script>
export default {
    name: "Heading",
    props: ["text"]
};
</script>