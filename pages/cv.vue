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
                    <span class="font-bold">Portfolio: </span>
                    <span class="color-grey">www.omererdem.nl</span>
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
                        <div class="flex flex-row flex-wrap gap-1">
                            <div v-for="stack in edu.stack" class="border rounded-lg px-2 py-0.5 w-fit">{{ getSkillDisplayName(stack) }}</div>
                        </div>
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
                    <div class="flex flex-row flex-wrap gap-1">
                        <div v-for="stack in xp.stack" class="border rounded-lg px-2 py-0.5 w-fit">{{ getSkillDisplayName(stack) }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row flex-wrap md:flex-nowrap print:flex-nowrap">
            <div class="w-full flex flex-col gap-2">
                <div class="flex gap-1 items-center bg-gray-200 rounded-[20px_5px] p-2 uppercase font-bold">
                    <span class="inline-block w-[200px]">Languages</span>
                    <IconWrapper v-for="icon in languageIcons" :name="icon" size="24"/>
                </div>
                <div class="flex gap-1 items-center bg-gray-200 rounded-[20px_5px] p-2 uppercase font-bold">
                    <span class="inline-block w-[200px]">Frontend Frameworks</span>
                    <IconWrapper v-for="icon in frontendFrameworkIcons" :name="icon" size="24"/>
                </div>
                <div class="flex gap-1 items-center bg-gray-200 rounded-[20px_5px] p-2 uppercase font-bold">
                    <span class="inline-block w-[200px]">Backend Frameworks</span>
                    <IconWrapper v-for="icon in backendFrameworkIcons" :name="icon" size="24"/>
                </div>
                <div class="flex gap-1 items-center bg-gray-200 rounded-[20px_5px] p-2 uppercase font-bold">
                    <span class="inline-block w-[200px]">Databases & Tools</span>
                    <IconWrapper v-for="icon in databasesIcons" :name="icon" size="24"/>
                </div>
            </div>
            <div class="text-center text-sm my-0 basis-1/3">
                <nuxt-img src="/img/company/qr.png" alt="qrcode" width="160" height="160" class="mx-auto"/>
                <div>https://www.omererdem.nl</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import timeline from "../assets/json/timeline.json";
import skills from "../assets/json/skills.json";
import IconWrapper from "../components/elements/IconWrapper";
import moment from "moment/moment";
import {DATE_FORMAT, RAW_DATE_FORMAT} from "../composables/useGitFlow";

const languageIcons = ["js", "php", "java", "python", "csharp", "ts", "html", "css"]
const frontendFrameworkIcons = ["vue", "nuxt", "angular", "jquery", "alpine", "knockout", "sass", "tailwind", "bootstrap"]
const backendFrameworkIcons = ["magento", "node", "spring", "laravel", "kotlin", "quarkus", "fastapi", "aspnet"]
const databasesIcons = ["mysql", "mongodb", "firebase", "eventstore", "git", "docker"]

const getEducation = () => timeline.filter((x) => x.type === "Study")
const getExperience = () => timeline.filter((x) => x.type === "Internship" || x.type === "Work").slice(0, 4)
const getCVSkills = () => skills.filter((x) => x.show_cv === true)
const formatDate = (date) => moment(date, RAW_DATE_FORMAT).format(DATE_FORMAT);
const getSkillDisplayName = (skill) => skills.find(x => x.name === skill) ? skills.find(x => x.name === skill).display_name : skill;
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
    @apply grid justify-between p-2.5 rounded-[30px_15px_40px] gap-4 bg-white;
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
