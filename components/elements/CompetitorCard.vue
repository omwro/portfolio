<template>
    <div class="card-block group relative rounded-[5px]">
        <div class="card flex flex-col items-center overflow-hidden z-[1] rounded-[5px] bg-primary-block-light">
            <div
                class="card-header relative w-[200px] h-[200px] bg-contain after:content-[''] after:absolute after:w-full after:h-full after:transition-[0.5s] after:bottom-0"
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
                <div class="card-buttons flex flex-row flex-nowrap w-full mt-4">
                    <a
                        :href="profile.website"
                        v-if="profile.website != null"
                        target="_blank"
                        class="no-underline flex flex-col text-center items-center w-full flex-1">
                        <Icon class="text-primary-text-dark"
                              name="iconoir:www"
                              size="32px"/>
                        <span>Website</span>
                    </a>
                    <a
                        :href="profile.linkedin"
                        v-if="profile.linkedin != null"
                        target="_blank"
                        class="no-underline flex flex-col text-center items-center w-full flex-1">
                        <Icon class="text-primary-text-dark"
                              name="mdi:linkedin"
                              size="32px"/>
                        <span>LinkedIn</span>
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
.card-block:hover .card-header:after {
    @apply h-0 transition-[0.5s];
}

.card .card-body .card-buttons .globe,
.card .card-body .card-buttons .linkedin {
    @apply w-8 h-8 text-[white] cursor-pointer brightness-0;
}

.card .card-body .card-buttons > a:hover .globe,
.card .card-body .card-buttons > a:hover .linkedin {
    @apply brightness-100 text-primary;
}
.card .card-body .card-buttons > a:hover span {
    @apply text-primary;
}
.card .card-body .card-buttons > a span {
    @apply text-xs text-primary-text-dark mt-2;
}
.card .card-header:after {
    /*background: linear-gradient(to top, rgba($accent, 1), rgba(white, 0) 50%);*/
}

#app.dark .card,
#app.dark .card .card-header svg .polygon {
    @apply fill-primary-block-dark bg-primary-block-dark;
}
#app.dark .card .globe,
#app.dark .card .linkedin,
#app.dark .card .card-header svg .polygon .globe,
#app.dark .card .card-header svg .polygon .linkedin {
    @apply brightness-100;
}
#app.dark .card .card-body,
#app.dark .card .card-header svg .polygon .card-body {
    @apply bg-primary-block-dark;
}
#app.dark .card span,
#app.dark .card .card-header svg .polygon span {
    @apply text-primary-text-light;
}
#app.dark .card .role,
#app.dark .card .card-header svg .polygon .role {
    @apply text-primary-light;
}
#app.dark .card a:hover .globe,
#app.dark .card a:hover .linkedin,
#app.dark .card .card-header svg .polygon a:hover .globe,
#app.dark .card .card-header svg .polygon a:hover .linkedin {
    @apply text-primary-light;
}
#app.dark .card a:hover span,
#app.dark .card .card-header svg .polygon a:hover span {
    @apply text-primary-light;
}
</style>
