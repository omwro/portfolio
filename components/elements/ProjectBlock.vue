<template>
    <a :href="'/projects/' + project.id" class="relative cursor-pointer rounded-[20px] overflow-hidden">
        <img :src="project.img" :alt="project.title" class="w-[380px] h-[250px] object-cover relative"/>
        <div class="text-2xl absolute w-fit text-primary-text-light mx-auto my-0 p-1.5 top-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-br-xl">
            <Icon :name="IconMapper[project.mainstack]" size="32"/>
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
import { IconMapper } from "../../composables/IconMapper";
import LivePulse from "./LivePulse";

defineProps(["project"])
</script>

<script>
export default {
    name: "ProjectBlock",
};
</script>