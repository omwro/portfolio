<template>
    <section id="skills">
        <h1>{{ $t('skills.title') }}</h1>
        <div class="content">
            <h1 class="small">{{ $t('skills.languages') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <SkillBlock v-for="skill in getLanguages()"
                            :key="skill.name"
                            :skill="skill"
                            :xp="true"/>
            </div>
            <h1 class="small">{{ $t('skills.frameworks') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <SkillBlock v-for="skill in getFrameworks()"
                            :key="skill.name"
                            :skill="skill"
                            :xp="true"/>
            </div>
            <h1 class="small">{{ $t('skills.environments') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <SkillBlock v-for="skill in getEnvironments()"
                            :key="skill.name"
                            :skill="skill"
                            :xp="true"/>
            </div>
            <h1 class="small">{{ $t('skills.projects') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <SkillBlock v-for="skill in getProjects()"
                            :key="skill.name"
                            :skill="skill"/>
            </div>
            <h1 class="small">{{ $t('skills.competencies') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <SkillBlock v-for="skill in getCompetencies()"
                            :key="skill.name"
                            :skill="skill"
                            :t="true"/>
            </div>
        </div>
    </section>
</template>

<script>
import json from "../../public/data/skills.json"
import SkillBlock from "@/components/SkillBlock";

export default {
    name: "Skills",
    components: {SkillBlock},
    methods: {
        getExperienceString(skill) {
            const totalxp = skill.xp
                .map(x => x.months)
                .reduce((prevValue, currValue) => prevValue + currValue)
            let years = Math.floor(totalxp / 12)
            if (years) return `${years} ${this.$t('skills.years')}`
            return `${totalxp} ${this.$t('skills.months')}`
        },
        getLanguages() {
            return json.filter(x => x.type === "Language" && x.show_portfolio === true)
        },
        getFrameworks() {
            return json.filter(x => x.type === "Framework" && x.show_portfolio === true)
        },
        getEnvironments() {
            return json.filter(x => x.type === "Environments" && x.show_portfolio === true)
        },
        getProjects() {
            return json.filter(x => x.type === "Projects" && x.show_portfolio === true)
        },
        getCompetencies() {
            return json.filter(x => x.type === "Competencies" && x.show_portfolio === true)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.content {
    margin-top: 0;

    .img-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        margin: 0 15px;
        font-size: 0.9rem;
    }

    h1.small.desc {
        margin-top: 0;
        border-bottom-color: $grey;
    }
}
</style>
