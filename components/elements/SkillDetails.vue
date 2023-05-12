<template>
    <div class="flex flex-row gap-4 bg-primary-block-light dark:bg-primary-block-dark p-4 pr-8 rounded-[60px_15px] border-4 border-primary items-center relative">
        <Icon :name="IconMapper[skill.name]" size="64" class="sm:w-[128px] sm:h-[128px]"/>
        <div class="flex flex-col gap-2 self-start">
            <span class="text-2xl sm:text-4xl">{{skill.display_name}}</span>
            <div>
                <div v-for="(xp, type) in getGroupedExperience(skill.xp, $t)">
                    <Icon :name="IconMapper[type]" size="20" class="mr-1 sm:h-[24px] sm:w-[24px]"/>
                    <span class="text-sm sm:text-md">{{xp}} {{ $t(`skills.${type}`) }} {{ $t("skills.xp") }}</span>
                </div>
            </div>
        </div>
        <div class="absolute top-2 right-2">
            <LivePulse v-if="isSkillLive(skill)"/>
        </div>
    </div>
</template>

<script setup>
import { IconMapper } from "../../composables/IconMapper";
import { getGroupedExperience, isSkillLive } from "../../composables/useSkills";
import LivePulse from "./LivePulse";
</script>

<script>
export default {
    name: "SkillDetails",
    props: ["skill"]
};
</script>