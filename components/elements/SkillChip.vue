<template>
    <div
        class="flex gap-1 px-3 py-1 rounded-full border border-primary "
        :style="
            'border-color: #014F86' + color !== undefined ? color : '#014F86'
        ">
        <img :src="img" :alt="name" class="w-4 h-4 invert-[1] object-contain md:w-8 md:h-8"/>
        <span class="text-xs self-center md:text-base">{{ name }}</span>
    </div>
</template>

<script>
export default {
    name: "SkillChip",
    props: ["name", "img", "color"],
};
</script>
