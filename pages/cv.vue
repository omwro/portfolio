<template>
    <div id="cv">
        <div class="header">
            <div class="profile-img">
                <img
                    alt="profile picture"
                    src="/img/selfie/selfie-squared.webp" />
            </div>
            <div class="information">
                <div class="name color-red uppercase">
                    {{ $t("general.firstname") }}
                </div>
                <div class="name color-blue uppercase">
                    {{ $t("general.lastname") }}
                </div>
                <div class="study bold uppercase">{{ $t("general.study") }}</div>
                <div>
                    <span class="bold">Age:</span>
                    <span class="color-grey">{{ $t("general.age") }}</span>
                </div>
                <div>
                    <span class="bold">Area:</span>
                    <span class="color-grey">{{ $t("general.area") }}</span>
                </div>
                <div>
                    <span class="bold">Email:</span>
                    <span class="color-grey">{{ $t("general.email") }}</span>
                </div>
                <div>
                    <span class="bold">Tel:</span>
                    <span class="color-grey">{{ $t("general.tel") }}</span>
                </div>
            </div>
            <div class="w-[330px]">
                <div class="text-xl text-center mb-2 bold">ABOUT ME</div>
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
                        <div class="title">{{ $t(edu.role, "en") }}</div>
                        <div class="location">{{ edu.company }}</div>
                        <div class="desc">{{ $t(edu.desc, "en") }}</div>
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
        <div class="flex flex-row justify-between">
            <div class="half container">
                <div class="container-title uppercase">Skills</div>
                <div class="content">
                    <div
                        class="skill"
                        v-for="cv in getCVSkills()"
                        :key="cv.name">
                        <div class="text-right">{{ cv.display_name }}</div>
                        <img :src="cv.img" :alt="cv.name" class="w-8 h-8 invert-[1] m-[5px]"/>
                        <div>{{ getExperienceString(cv) }}</div>
                    </div>
                </div>
            </div>
            <div class="text-center text-sm mx-auto my-0">
                <img src="/img/company/qr.png" alt="qrcode" class="w-[200px] h-[200px]"/>
                <div class="pt-1">Learn more about me at: https://www.omererdem.nl</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import timeline from "../assets/json/timeline.json";
import skills from "../assets/json/skills.json";

const getEducation = () => timeline.filter((x) => x.type === "Study")
const getExperience = () => timeline.filter((x) => x.type === "Internship")
const getSkillimg = (name) => skills.find((x) => x.name === name).img
const getCVSkills = () => skills.filter((x) => x.show_cv === true)
const getCompetencies = () => skills.filter((x) => x.type === "Competencies")
const getExperienceString = (skill) => {
    const totalxp = skill.xp
        .map((x) => x.months)
        .reduce((prevValue, currValue) => prevValue + currValue);
    let years = Math.floor(totalxp / 12);
    if (years) return years + " years";
    return totalxp + " months";
}
</script>

<script>

export default {
    name: "CV"
};
</script>

<style scoped>
/*@media print {
    body {
        @apply w-[21cm] h-[29.7cm];
    }
}
html body #app #cv {
    @apply w-[21cm] h-[30cm] flex flex-col text-xs text-primary-text-dark p-4;
    background: white;
    font-family: Arial, serif;
}
#cv .bold {
    @apply font-bold;
}
#cv .bolder {
    @apply font-black text-base;
}
#cv .header {
    @apply flex flex-row mb-8;
}
#cv .header .profile-img {
    @apply flex items-center justify-center overflow-hidden w-[200px] h-[200px] mr-4 rounded-[200px];
    background: rgba(black, 0.1);
}
#cv .header .profile-img img {
    @apply w-[190px] h-[190px] bg-white rounded-[190px];
}
#cv .header .information {
    @apply mr-4 pr-4 border-r border-r-[rgba(black,0.1)];
}
#cv .header .information > div:not(.name) {
    @apply px-0 py-1;
}
#cv .header .information > div:not(.name) .bold {
    @apply inline-block w-10;
}
#cv .header .information .name {
    @apply text-[22px] font-black;
}
#cv .header .information .study {
    @apply text-base;
}
#cv .container {
    @apply mb-8 pt-[5px] pb-2.5 px-2.5 rounded-[10px];
    background: rgba(black, 0.1);
}
#cv .container.half {
    @apply w-full;
}
#cv .container .container-title {
    @apply text-[22px] font-bolder text-center pb-[5px];
}
#cv .container .content {
    @apply flex flex-row flex-wrap justify-between p-2.5 rounded-[10px];
    background: white;
}
#cv .container .content .content-card {
    @apply w-[48%] mb-1;
}
#cv .container .content .content-card > div {
    @apply mb-1;
}
#cv .container .content .content-card .timeperiod {
    @apply inline-flex text-xs font-bolder p-1.5 rounded-[25px];
    background: rgba(black, 0.1);
}
#cv .container .content .skill {
    @apply w-1/2 flex flex-row justify-center;
}
#cv .container .content .skill div {
    @apply text-base self-center w-[75px];
}
#cv .container .content .skill img {
    @apply ;
}*/
</style>
