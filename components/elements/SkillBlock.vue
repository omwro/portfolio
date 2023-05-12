<template>
    <div class="relative w-24 flex flex-col gap-2 items-center text-center">
        <Icon :name="IconMapper[skill.name]"
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
import { IconMapper } from "../../composables/IconMapper";
</script>

<script>
export default {
    name: "SkillBlock",
    props: ["skill", "translate"]
};
</script>
