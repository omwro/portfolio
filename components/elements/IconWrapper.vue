<template>
    <Icon :name="IconMapper[name]" :size="size" />
</template>

<script setup>
defineProps(["name", "size"]);
import { IconMapper } from "../../composables/IconMapper";
</script>
