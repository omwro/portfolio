<template>
    <div class="card-block group/card relative rounded-[5px]">
        <div class="card flex flex-col items-center overflow-hidden z-[1] rounded-[5px] bg-primary-block-light">
            <div
                class="card-header relative w-[200px] h-[200px] bg-contain after:content-[''] after:absolute after:w-full after:h-full after:duration-500 after:bottom-0 group-hover/card:after:h-0 group-hover/card:after:duration-500"
                :style="'background-image: url(' + profile.img + ')'">
                <div class="absolute z-[1] w-full inset-x-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200">
                        <path class="polygon fill-primary-block-light" d="M-20,200,1000,0V200Z" />
                    </svg>
                </div>
            </div>
            <div class="card-body text-center w-full z-[1] p-2 bg-primary-block-light">
                <div>{{ profile.name }}</div>
                <div class=".role text-primary">{{ profile.role }}</div>
                <div class="card-buttons flex flex-row flex-nowrap w-full mt-4 justify-evenly">
                    <a
                        :href="profile.website"
                        v-if="profile.website != null"
                        target="_blank"
                        class="no-underline flex flex-col text-center items-center w-fit flex-1 group/button">
                        <Icon class="text-primary-text-dark group-hover/button:text-primary"
                              name="iconoir:www"
                              size="32px"/>
                        <span class="text-xs text-primary-text-dark mt-2 group-hover/button:text-primary">Website</span>
                    </a>
                    <a
                        :href="profile.linkedin"
                        v-if="profile.linkedin != null"
                        target="_blank"
                        class="no-underline flex flex-col text-center items-center w-fit flex-1 group/button">
                        <Icon class="text-primary-text-dark group-hover/button:text-primary"
                              name="mdi:linkedin"
                              size="32px"/>
                        <span class="text-xs text-primary-text-dark mt-2 group-hover/button:text-primary">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompetitorCard",
    props: ["profile"],
};
</script>

<style scoped>

.card .card-header:after {
    background: linear-gradient(to top, rgba(1, 79 , 134, 1), rgba(0, 0, 0, 0) 50%);
}
</style>
