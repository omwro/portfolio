<template>
    <Section id="home"
             class="h-fit flex flex-col flex-wrap justify-center gap-y-16 gap-x-16 items-center content-center overflow-hidden lg:flex-row-reverse lg:pt-[200px]">
        <Selfie class="mx-0 relative" />
        <div
            class="message-box mx-0 flex flex-col gap-2 relative w-fit h-fit text-[2rem] bg-primary-block-light dark:bg-primary-block-dark p-4 rounded-[10px] border border-primary before:content-[''] before:absolute before:mt-[-15px] before:top-[-15px] before:z-[1] before:border-b-primary before:border-[15px] before:border-transparent before:left-1/2 lg:before:mt-[-15px] lg:before:right-[-30px] lg:before:border-l-primary lg:before:border-transparent lg:before:left-full lg:before:top-1/2">
            <div>{{ $t("home.intro1") }}</div>
            <div>
                {{ $t("general.firstname") }} {{ $t("general.lastname") }}
            </div>
            <div class="text-[1.6rem]">{{ $t("home.catchphrase") }}</div>
            <div>
                <div class="flex flex-row">
                    <div v-for="(c, i) in contact" :key="i" class="items-center">
                        <a :href="c.url" class="p-2 group hover:bg-primary hover:rounded-lg" :aria-label="c.name">
                            <IconWrapper class="text-primary-text-dark dark:text-primary-text-light group-hover:text-primary-text-light"
                                  :name="c.icon"
                                  size="32px"/>
                        </a>
                    </div>
                </div>
                <a href="#about" class="text-base w-fit text-primary-text-dark dark:text-primary-text-light group flex flex-row gap-2 items-center no-underline p-2 rounded-[10px] border border-primary hover:bg-primary hover:text-primary-text-light">
                    <span class="group-hover:text-primary-text-light">{{ $t("home.readmore") }}</span>
                    <IconWrapper class="group-hover:text-primary-text-light animate-bounce"
                          name="arrowDown"
                          size="32px"/>
                </a>
            </div>
        </div>
    </Section>
</template>

<script setup>
import contact from "../../assets/json/contact.json";
import Selfie from "../elements/Selfie";
import Section from "../elements/Section";
import IconWrapper from "../elements/IconWrapper";
</script>

<script>
export default {
    name: "Home"
};
</script>

<style scoped>
.message-box > div {
    @apply px-0 py-0.5 first:text-[1.2rem] last:flex last:flex-row last:justify-between last:flex-wrap last:gap-y-2 last:mt-8;
}
</style>
