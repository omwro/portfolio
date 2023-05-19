<template>
    <a
        class="h-8 w-36 flex flex-row cursor-pointer no-underline m-2 gap-2 rounded-[10px] border group"
        :href="url"
        :style="[
            { 'background-color': getColor() },
            { 'border-color': getColor() },
        ]">
        <div class="w-8 flex justify-center items-center">
            <IconWrapper class="text-primary-text-light h-5 w-5 duration-200 ease-in-out group-hover:h-7 group-hover:w-7"
                  :name="icon" size="20"/>
        </div>
        <div class="flex self-center text-lg font-bold text-primary-text-light duration-200 ease-in-out group-hover:text-2xl">
            {{ text }}
        </div>
    </a>
</template>

<script setup>
import IconWrapper from "./IconWrapper";
const prop = defineProps(["icon", "text", "url", "color"])

const getColor = () => `rgb(${prop.color.r}, ${prop.color.g}, ${prop.color.b})`;
</script>
