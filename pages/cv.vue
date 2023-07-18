<template>
    <div id="cv">
        <div class="header flex flex-col md:flex-row print:flex-row items-center gap-4 mb-4">
            <div
                class="flex items-center justify-center overflow-hidden w-[160px] h-[160px] rounded-[60px_15px] bg-gray-200 place-content-center">
                <nuxt-img width="150" height="150" quality="100" class="bg-white rounded-[55px_10px]"
                          alt="profile picture"
                          src="/img/selfie/selfie-squared.webp"/>
            </div>
            <div class="flex flex-col gap-1 flex-grow">
                <div class="text-xl font-black uppercase">
                    {{ $t("general.firstname") }} {{ $t("general.lastname") }}
                </div>
                <div class="text-base font-bold uppercase">{{ $t("general.study") }}</div>
                <div>
                    <span class="font-bold">Age: </span>
                    <span class="color-grey">{{ $t("general.age") }}</span>
                </div>
                <div>
                    <span class="font-bold">Area: </span>
                    <span class="color-grey">{{ $t("general.area", 1, {locale: "en"}) }}</span>
                </div>
                <div>
                    <span class="font-bold">Email: </span>
                    <span class="color-grey">info@omererdem.nl</span>
                </div>
                <div>
                    <span class="font-bold">Portfolio: </span>
                    <span class="color-grey">omererdem.nl</span>
                </div>
                <div>
                    <span class="font-bold">LinkedIn: </span>
                    <span class="color-grey">linkedin.com/in/omer-erdem/</span>
                </div>
            </div>
            <div>
                <nuxt-img src="/img/company/qr.png" alt="qrcode" width="140" height="140" class="mx-auto"/>
                <div>Explore more at my portfolio website</div>
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
                        <div class="text-base font-bold flex justify-between">
                            {{ $t(edu.role, 1, {locale: "en"}) }}
                            <div class="timeperiod">
                                {{ formatDate(edu.startdate) }} -
                                {{
                                    edu.enddate !== null ? formatDate(edu.enddate) : $t("timeline.present", 1, {locale: "en"})
                                }}
                            </div>
                        </div>
                        <div class="text-xs font-bold">{{ edu.company }}</div>
                        <div class="leading-[1.4]">{{ $t(edu.desc, 1, {locale: "en"}) }}</div>
                        <div class="flex flex-row flex-wrap gap-1">
                            <Chip v-for="stack in edu.stack" :text="getSkillDisplayName(stack)"/>
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
                    <div class="text-base font-bold flex justify-between">
                        {{ $t(xp.role, 1, {locale: "en"}) }}
                        <div class="timeperiod">
                            {{ formatDate(xp.startdate) }} -
                            {{
                                xp.enddate !== null ? formatDate(xp.enddate) : $t("timeline.present", 1, {locale: "en"})
                            }}
                        </div>
                    </div>
                    <div class="text-xs font-bold">{{ xp.company }}</div>
                    <div class="leading-[1.4]">{{ $t(xp.desc, 1, {locale: "en"}) }}</div>
                    <div class="flex flex-row flex-wrap gap-1">
                        <Chip v-for="stack in xp.stack" :text="getSkillDisplayName(stack)"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-2">
            <div v-for="skills in skillsSet" class="flex gap-1 items-center bg-gray-200 rounded-[20px_5px] p-1">
                <span class="inline-block w-[225px] uppercase font-bold p-1">{{ skills.name }}</span>
                <div class="flex flex-wrap gap-1 bg-white p-1 pl-2 w-full rounded-[15px_4px]">
                    <Chip v-for="stack in skills.skills" :text="getSkillDisplayName(stack)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import timeline from "../assets/json/timeline.json";
import skills from "../assets/json/skills.json";
import moment from "moment/moment";
import {DATE_FORMAT, RAW_DATE_FORMAT} from "../composables/useGitFlow";
import Chip from "../components/elements/Chip";

const skillsSet = [
    {
        name: "Languages",
        skills: ["js", "php", "java", "python", "csharp", "ts", "html", "css"]
    },
    {
        name: "Frontend Frameworks",
        skills: ["vue", "nuxt", "angular", "react", "jquery", "alpine", "sass", "tailwind"]
    },
    {
        name: "Backend Frameworks",
        skills: ["magento", "node", "spring", "laravel", "kotlin", "quarkus", "fastapi", "aspnet"]
    },
    {
        name: "Databases & Tools",
        skills: ["mysql", "mongodb", "firebase", "eventstore", "git", "docker", "Figma"]
    },
    {
        name: "Experience",
        skills: ["CRUD", "MVC", "OOP", "API", "SPA", "Design Patterns", "Algorithms", "Machine Learning", "Automation", "Google Tagmanager", "Core Web Vitals", "E-commerce"]
    },
    {
        name: "Hobby Projects",
        skills: ["Portfolio pages", "Landing pages", "Dashboards", "Automation Scripts", "Experiments"]
    }
]

const getEducation = () => timeline.filter((x) => x.type === "Study")
const getExperience = () => timeline.filter((x) => x.type === "Internship" || x.type === "Work").slice(0, 4)
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
    @apply inline-flex text-xs font-bold px-2 py-1 rounded-[15px_5px] bg-gray-200 w-fit whitespace-nowrap h-fit;
}
</style>
