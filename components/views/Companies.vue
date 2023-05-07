<template>
    <div class="overflow-hidden bg-primary-bg-light px-0 py-16 dark:bg-primary-bg-dark">
        <div class="flex flex-row flex-wrap -rotate-3 bg-primary-block-light overflow-hidden justify-center w-[calc(106%)] ml-[-3%] dark:bg-primary-block-dark">
            <a
                v-for="c in companies"
                :key="c.name"
                :href="c.url"
                target="_blank"
                rel="author"
                class="self-center p-4">
                <img :src="c.img" :alt="c.name" class="w-auto h-auto max-w-[128px] max-h-16 invert dark:invert-0"/>
            </a>
        </div>
    </div>
</template>

<script setup>
import companies from "../../assets/json/companies.json";
</script>

<script>
export default {
    name: "Companies"
};
</script>