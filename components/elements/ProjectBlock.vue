<template>
    <a :href="'/projects/' + project.id" class="relative cursor-pointer rounded-[20px] overflow-hidden">
        <nuxt-img :src="project.img" :alt="project.title" class="object-cover relative" width="380" height="250"/>
        <div class="text-2xl absolute w-fit text-primary-text-light mx-auto my-0 p-1.5 top-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-br-xl">
            <IconWrapper :name="project.mainstack" size="32px"/>
        </div>
        <div class="text-2xl absolute w-fit text-primary-text-light mx-auto my-0 p-0.5 pl-4 pr-1.5 bottom-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-tr-xl">
            {{ project.title }}
        </div>
        <div v-if="project.live" class="absolute p-3 top-0 right-0">
            <LivePulse/>
        </div>
    </a>
</template>

<script setup>
import LivePulse from "./LivePulse";
import IconWrapper from "./IconWrapper";

defineProps(["project"])
</script>

<script>
export default {
    name: "ProjectBlock",
};
</script>