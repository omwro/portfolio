<template>
    <div id="cv">
        <div class="header flex flex-col md:flex-row print:flex-row mb-2 items-center">
            <div class="flex items-center justify-center overflow-hidden w-[200px] h-[200px] mr-4 rounded-[60px_15px] bg-gray-200 place-content-center">
                <nuxt-img width="190" height="190" quality="100" class="bg-white rounded-[55px_10px]"
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
                    <span class="font-bold">Age: </span>
                    <span class="color-grey">{{ $t("general.age") }}</span>
                </div>
                <div class="px-0 py-1">
                    <span class="font-bold">Area: </span>
                    <span class="color-grey">{{ $t("general.area", 1, {locale: "en"}) }}</span>
                </div>
                <div class="px-0 py-1">
                    <span class="font-bold">Email: </span>
                    <span class="color-grey">info@omererdem.nl</span>
                </div>
                <div class="px-0 py-1">
                    <span class="font-bold">Tel: </span>
                    <span class="color-grey">{{ $t("general.tel") }}</span>
                </div>
            </div>
            <div class="max-w-[330px]">
                <div class="text-xl text-center mb-2 font-bold">ABOUT ME</div>
                <div class="text-sm leading-[1.35] color-grey">
                    {{ $t("about.paragraph2", 1, {locale: "en"}) }}
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
                            {{ formatDate(edu.startdate) }} -
                            {{ edu.enddate !== null ? formatDate(edu.enddate) : $t("timeline.present", 1, {locale: "en"}) }}
                        </div>
                        <div class="text-base font-bold">
                            <span v-if="edu.type === 'Minor'">{{ $t(edu.type, 1, {locale: "en"}) }}</span>
                            {{ $t(edu.role, 1, {locale: "en"}) }}
                        </div>
                        <div class="text-xs font-bold">{{ edu.company }}</div>
                        <div class="leading-[1.4]">{{ $t(edu.desc, 1, {locale: "en"}) }}</div>
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
                        {{ formatDate(xp.startdate) }} -
                        {{ xp.enddate !== null ? formatDate(xp.enddate) : $t("timeline.present", 1, {locale: "en"}) }}
                    </div>
                    <div class="text-base font-bold">{{ $t(xp.role, 1, {locale: "en"}) }}</div>
                    <div class="text-xs font-bold">{{ xp.company }}</div>
                    <div class="leading-[1.4]">{{ $t(xp.desc, 1, {locale: "en"}) }}</div>
                </div>
            </div>
        </div>
        <div class="flex flex-row flex-wrap md:flex-nowrap print:flex-nowrap">
            <div class="half container skills-container">
                <div class="container-title uppercase">Skills</div>
                <div class="content">
                    <div class="flex flex-row text-base items-center gap-1"
                        v-for="cv in getCVSkills()"
                        :key="cv.name">
                        <IconWrapper :name="cv.name" size="64" />
                        <div class="flex flex-col">
                            <div>{{ cv.display_name }}</div>
                            <div>{{ getExperienceString(cv, $t, false, "en") }}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="text-center text-sm my-0 basis-1/3">
                <nuxt-img src="/img/company/qr.png" alt="qrcode" width="190" height="190" class="mx-auto"/>
                <div>https://www.omererdem.nl</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import timeline from "../assets/json/timeline.json";
import skills from "../assets/json/skills.json";
import { getExperienceString } from "../composables/useSkills";
import IconWrapper from "../components/elements/IconWrapper";
import moment from "moment/moment";
import {DATE_FORMAT, RAW_DATE_FORMAT} from "../composables/useGitFlow";
const getEducation = () => [
    ...timeline.filter((x) => x.type === "Study"),
    ...timeline.filter((x) => x.type === "Minor")
]
const getExperience = () => timeline.filter((x) => x.type === "Internship" || x.type === "Work").slice(0, 4)
const getCVSkills = () => skills.filter((x) => x.show_cv === true)
const formatDate = (date) => moment(date, RAW_DATE_FORMAT).format(DATE_FORMAT);
</script>

<style scoped>
@page {
    size: A4;
    margin: 0;
}
html, body, #app, #cv {
    @apply md:max-w-[210mm] md:max-h-[297mm] flex flex-col text-xs text-primary-text-dark p-4 bg-white;
    font-family: Arial, serif;
}
#cv .container {
    @apply mb-3 pt-1 pb-2.5 px-2.5 rounded-[50px_15px] w-full sm:max-w-full bg-gray-200;
}
#cv .container .container-title {
    @apply text-xl font-bold text-center pb-1;
}
#cv .container .content {
    @apply grid justify-between p-2.5 rounded-[40px_15px] gap-4 bg-white;
}
.container .content {
    @apply sm:grid-cols-2;
}
.container.skills-container .content {
    @apply md:grid-cols-3 print:grid-cols-3;
}
#cv .container .content .content-card {
    @apply flex flex-col gap-0.5;
}
#cv .container .content .content-card .timeperiod {
    @apply inline-flex text-xs font-bold px-2 py-1 rounded-[15px_5px] bg-gray-200 w-fit;
}
</style>
