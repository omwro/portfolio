<template>
    <Section id="home"
             class="h-fit flex flex-col flex-wrap justify-center gap-y-16 gap-x-16 items-center bg-primary-bg-light content-center overflow-hidden lg:flex-row-reverse lg:pt-[200px]">
        <Selfie class="mx-0 relative" />
        <div
            class="container mx-0 flex flex-col relative w-fit h-fit text-[2rem] bg-primary-block-light p-4 rounded-[10px] border border-primary before:content-[''] before:absolute before:mt-[-15px] before:top-[-15px] before:z-[1] before:border-b-primary before:border-[15px] before:border-transparent before:left-2/4">
            <div>{{ $t("home.intro1") }}</div>
            <div>
                {{ $t("general.firstname") }} {{ $t("general.lastname") }}
            </div>
            <div class="text-[1.6rem]">{{ $t("home.catchphrase") }}</div>
            <div>
                <div class="socials flex flex-row">
                    <div v-for="(c, i) in contact" :key="i" class="items-center">
                        <a :href="c.url" class="p-2 group hover:bg-primary hover:rounded-lg">
                            <Icon class="text-primary-text-dark group-hover:text-primary-text-light"
                                  :name="c.icon"
                                  size="32px"/>
                        </a>
                    </div>
                </div>
                <a href="#about" class="readmore text-base w-fit text-primary-text-dark flex items-center no-underline p-2 rounded-[10px] border border-primary">
                    <span>{{ $t("home.readmore") }}</span>
                    <svg class="text-primary-text-dark ml-1" stroke="currentColor" fill="currentColor" stroke-width="0"
                         viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </a>
            </div>
        </div>
    </Section>
</template>

<script setup>
import contact from "../../assets/json/contact.json";
import Selfie from "../elements/Selfie";
import Section from "../elements/Section";
</script>

<script>
export default {
    name: "Home"
};
</script>

<style scoped>

#home .container:before {
    @apply lg:mt-[-15px] lg:right-[-30px] lg:border-l-primary lg:border-transparent lg:left-full lg:top-1/2;
}

#home .container > div {
    @apply px-0 py-0.5 first:text-[1.2rem] last:flex last:flex-row last:justify-between last:flex-wrap last:gap-y-2 last:mt-8;
}

.readmore:hover,
.readmore:focus {
    @apply bg-primary text-primary-text-light;
}

.readmore:hover svg,
.readmore:focus svg {
    @apply text-primary-text-light;
}

.readmore svg {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: bounce;
    animation-timing-function: ease;
}

@keyframes bounce {
    0% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(-5px);
    }
}

#app.dark #home {
    @apply bg-primary-bg-dark text-primary-text-light;
}

#app.dark #home .readmore {
    @apply text-primary-text-light;
}

#app.dark #home .container {
    @apply bg-primary-block-dark;
}

#app.dark #home .socials img {
    filter: unset;
}

#app.dark #home svg {
    @apply text-primary-text-light;
}
</style>
