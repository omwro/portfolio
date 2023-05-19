<template>
    <div class="relative w-24 flex flex-col gap-2 items-center text-center">
        <IconWrapper :name="skill.name"
              size="64px" class="bg-primary p-2 mysql25px_12px] text-primary-text-light"/>
        <div>
            <template v-if="translate">
                {{ $t(skill.display_name) }}
            </template>
            <template v-else>
                {{ skill.display_name }}
            </template>
        </div>
    </div>
</template>

<script setup>
import IconWrapper from "./IconWrapper";
</script>

<script>
export default {
    name: "SkillBlock",
    props: ["skill", "translate"]
};
</script>
