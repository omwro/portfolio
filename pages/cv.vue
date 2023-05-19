<template>
    <div id="cv">
        <div class="header flex flex-col sm:flex-row mb-8">
            <div class="flex items-center justify-center overflow-hidden w-[200px] h-[200px] mr-4 rounded-[200px] bg-gray-200">
                <img class="w-[190px] h-[190px] bg-white rounded-[190px]"
                    alt="profile picture"
                    src="/img/selfie/selfie-squared.webp" />
            </div>
            <div class="mr-4 pr-4 md:border-r border-r-gray-200">
                <div class="text-xl font-black color-red uppercase">
                    {{ $t("general.firstname") }}
                </div>
                <div class="text-xl font-black color-blue uppercase">
                    {{ $t("general.lastname") }}
                </div>
                <div class="px-0 py-1 text-base font-bold uppercase">{{ $t("general.study") }}</div>
                <div class="px-0 py-1">
                    <span class="font-bold">Age:</span>
                    <span class="color-grey">{{ $t("general.age") }}</span>
                </div>
                <div class="px-0 py-1">
                    <span class="font-bold">Area:</span>
                    <span class="color-grey">{{ $t("general.area") }}</span>
                </div>
                <div class="px-0 py-1">
                    <span class="font-bold">Email:</span>
                    <span class="color-grey">{{ $t("general.email") }}</span>
                </div>
                <div class="px-0 py-1">
                    <span class="font-bold">Tel:</span>
                    <span class="color-grey">{{ $t("general.tel") }}</span>
                </div>
            </div>
            <div class="w-[330px]">
                <div class="text-xl text-center mb-2 font-bold">ABOUT ME</div>
                <div class="text-sm leading-[1.35] color-grey">
                    {{ $t("about.paragraph1", "en") }}
                </div>
            </div>
        </div>
        <div class="container">
            <div class="container-title uppercase">Education</div>
            <div class="content">
                <template v-for="edu in getEducation()">
                    <div
                        class="content-card"
                        :key="edu.role"
                        v-if="!edu.hidecv">
                        <div class="timeperiod">
                            {{ edu.startdate }} -
                            {{ edu.enddate !== null ? edu.enddate : "Present" }}
                        </div>
                        <div class="text-base font-bold">{{ $t(edu.role, "en") }}</div>
                        <div class="text-xs font-bold">{{ edu.company }}</div>
                        <div class="leading-[1.4]">{{ $t(edu.desc, "en") }}</div>
                    </div>
                </template>
            </div>
        </div>
        <div class="container">
            <div class="container-title uppercase">Experience</div>
            <div class="content">
                <div
                    class="content-card"
                    v-for="xp in getExperience()"
                    :key="xp.role">
                    <div class="timeperiod">
                        {{ xp.startdate }} -
                        {{ xp.enddate !== null ? xp.enddate : "Present" }}
                    </div>
                    <div class="text-base font-bold">{{ $t(xp.role, "en") }}</div>
                    <div class="text-xs font-bold">{{ xp.company }}</div>
                    <div class="leading-[1.4]">{{ $t(xp.desc, "en") }}</div>
                </div>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="half container skills-container">
                <div class="container-title uppercase">Skills</div>
                <div class="content">
                    <div class="flex flex-row text-base items-center gap-1"
                        v-for="cv in getCVSkills()"
                        :key="cv.name">
                        <IconWrapper :name="cv.name" size="64" />
                        <div class="flex flex-col">
                            <div>{{ cv.display_name }}</div>
                            <div>{{ getExperienceString(cv, $t) }}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="text-center text-sm my-0 basis-1/3">
                <img src="/img/company/qr.png" alt="qrcode" class="w-[200px] h-[200px] mx-auto"/>
                <div class="pt-1">https://www.omererdem.nl</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import timeline from "../assets/json/timeline.json";
import skills from "../assets/json/skills.json";
import { getExperienceString } from "../composables/useSkills";
import IconWrapper from "../components/elements/IconWrapper";
const getEducation = () => timeline.filter((x) => x.type === "Study")
const getExperience = () => timeline.filter((x) => x.type === "Internship")
const getCVSkills = () => skills.filter((x) => x.show_cv === true)
</script>

<style scoped>
html, body, #app, #cv {
    @apply print:w-[21cm] print:h-[30cm] max-w-screen-lg flex flex-col text-xs text-primary-text-dark p-4 bg-white;
    font-family: Arial, serif;
}
#cv .container {
    @apply mb-3 pt-1 pb-2.5 px-2.5 rounded-xl w-full sm:max-w-full bg-gray-200;
}
#cv .container .container-title {
    @apply text-xl font-bold text-center pb-1;
}
#cv .container .content {
    @apply grid justify-between p-2.5 rounded gap-4 bg-white;
}
.container .content {
    @apply sm:grid-cols-2;
}
.container.skills-container .content {
    @apply md:grid-cols-3 print:grid-cols-3;
}
#cv .container .content .content-card {
    @apply flex flex-col gap-1;
}
#cv .container .content .content-card .timeperiod {
    @apply inline-flex text-xs font-bold p-1.5 rounded-[25px] bg-gray-200 w-fit;
}
</style>
