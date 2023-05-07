<template>
    <div class="relative select-none w-fit mx-auto md:mx-0"
         @focusout="toggleDropdown(false)"
         tabindex="0">
        <div class="relative flex h-8 cursor-pointer items-center p-1 uppercase border-1 border-primary-text-dark dark:border-primary-text-light" @click="toggleDropdown()">
            {{currentLanguage}}
            <Icon v-show="dropdownStatus"
                  name="ic:baseline-keyboard-arrow-up"
                  size="24px"/>
            <Icon v-show="!dropdownStatus"
                  name="ic:baseline-keyboard-arrow-down"
                  size="24px"/>
        </div>
        <div class="absolute right-0 bottom py-1 flex-col bg-primary-bg-light dark:bg-primary-bg-dark border-1 border-primary-text-dark dark:border-primary-text-light" :class="dropdownStatus ? 'flex' : 'hidden'">
            <div class="flex gap-2 px-2 py-1 cursor-pointer hover:bg-primary-block-light dark:hover:bg-primary-block-dark" @click="setLanguage('nl')">
                <Icon name="twemoji:flag-netherlands"
                      size="24px"/>
                <span>Nederlands</span>
            </div>
            <div class="flex gap-2 px-2 py-1 cursor-pointer hover:bg-primary-block-light dark:hover:bg-primary-block-dark" @click="setLanguage('en')">
                <Icon name="twemoji:flag-united-kingdom"
                      size="24px"/>
                <span>English</span>
            </div>

        </div>
    </div>
</template>

<script setup>
import { useI18n } from '#imports'
const { locale, setLocale } = useI18n()

let dropdownStatus = ref(false);
const toggleDropdown = (value = null) => {
    if (value !== null) dropdownStatus.value = value
    else dropdownStatus.value = !dropdownStatus.value;
}

let currentLanguage = locale.value;
const setLanguage = (value) => {
    setLocale(value);
    currentLanguage = locale.value;
    toggleDropdown()
}
</script>

<script>
export default {
    name: "LanguageSwitcher"
}
</script>