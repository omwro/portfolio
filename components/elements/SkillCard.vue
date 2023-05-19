<template>
    <div
        class="flex flex-col gap-1 border-8 sm:w-[320px] border-primary rounded-[60px_15px] bg-primary-block-light dark:bg-primary-block-dark">
        <div v-if="mainSkill" class="p-4 pb-0 flex flex-col gap-1">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-xl font-bold pl-2">{{ mainSkill.display_name }}</h3>
                <div class="flex flex-row gap-4">
                    <IconWrapper :name="getExperienceType(mainSkill)" size="24"
                          class="text-primary dark:text-primary-text-light " />
                    <LivePulse v-if="isSkillLive(mainSkill)"/>
                </div>
            </div>
            <div
                class="w-full border-4 border bg-gradient-to-br text-center border-primary from-primary-bg-dark to-primary-light">
                <IconWrapper :name="mainSkill.name" size="128px" class="text-primary-text-light p-2" />
            </div>
            <div class="w-full border text-center border-primary bg-primary text-primary-text-light leading-[0]">
                <span class="text-sm">{{ getExperienceString(mainSkill, $t) }} {{ $t("skills.xp") }} *</span>
            </div>
        </div>
        <div v-if="bodySkills" class="px-4">
            <span class="text-xs font-bold">{{ $t("skills.inuse") }}</span>
            <div v-for="skill in bodySkills" :key="skill.name" class="flex flex-row items-center gap-4 justify-between">
                <IconWrapper :name="skill.name" size="32px" class="text-primary dark:text-primary-text-light" />
                <span>{{ skill.display_name }}</span>
                <IconWrapper :name="getExperienceType(skill)" size="20px"
                      class="text-primary dark:text-primary-text-light" />
            </div>
        </div>
        <div v-if="deprecatedSkills" class="px-4">
            <div class="border-primary mt-auto" :class="bodySkills ? 'border-t' : ''">
                <span class="text-xs font-bold">{{ $t("skills.deprecated") }}</span>
            </div>
            <div class="flex flex-row flex-wrap gap-2">
                <div v-for="skill in deprecatedSkills" :key="skill.name" class="flex flex-col items-center">
                    <IconWrapper :name="skill.name" size="20" class="text-primary dark:text-primary-text-light" />
                    <span class="text-xs">{{ skill.display_name }}</span>
                </div>
            </div>
        </div>
        <a class="pl-4 py-1 underline mt-auto" :href="`/skills/${mainSkill.name}`">
            <span class="text-sm">{{$t('home.readmore')}}</span>
            <IconWrapper name="arrowRight" size="20"/>
        </a>
    </div>
</template>

<script setup>
import { getExperienceString, getExperienceType, isSkillLive } from "../../composables/useSkills";
import LivePulse from "./LivePulse";
import IconWrapper from "./IconWrapper";

const props = defineProps({
    skillGroup: Object
});

let mainSkill = props.skillGroup.main;
if (mainSkill) mainSkill = mainSkill[0];
const bodySkills = props.skillGroup.body;
const deprecatedSkills = props.skillGroup.deprecated;
</script>

<script>
export default {
    name: "SkillCard"
};
</script>