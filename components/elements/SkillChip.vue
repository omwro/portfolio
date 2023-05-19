<template>
    <div
        class="flex gap-1 px-3 py-1 rounded-full border border-primary rounded-[15px_5px] items-center bg-primary-block-light dark:bg-primary-block-dark"
        :style="
            'border-color: #014F86' + color !== undefined ? color : '#014F86'
        ">
        <IconWrapper :name="icon" size="20px" class="text-primary-text-dark dark:text-primary-text-light"/>
        <span class="text-xs self-center md:text-base">{{ name }}</span>
    </div>
</template>

<script setup>
import IconWrapper from "./IconWrapper";
</script>

<script>
export default {
    name: "SkillChip",
    props: ["name", "icon", "color"],
};
</script>
