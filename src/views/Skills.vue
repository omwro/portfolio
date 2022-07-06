<template>
    <section id="skills">
        <h1>{{ $t('skills.title') }}</h1>
        <div class="content">
            <h1 class="small">{{ $t('skills.languages') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div class="block" v-for="skill in getLanguages()" :key="skill.name">
                    <img :class="'c'+skill.color" :data-src="skill.img" :alt="skill.name"/>
                    <div>{{ skill.display_name }}</div>
                    <div class="badge">{{ getExperienceString(skill) }}</div>
                </div>
            </div>
            <h1 class="small">{{ $t('skills.frameworks') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div class="block" v-for="skill in getFrameworks()" :key="skill.name">
                    <img :class="'c'+skill.color" :data-src="skill.img" :alt="skill.name"/>
                    <div>{{ skill.display_name }}</div>
                    <div class="badge">{{ getExperienceString(skill) }}</div>
                </div>
            </div>
            <h1 class="small">{{ $t('skills.environments') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div class="block" v-for="skill in getEnvironments()" :key="skill.name">
                    <img :class="'c'+skill.color" :data-src="skill.img" :alt="skill.name"/>
                    <div>{{ skill.display_name }}</div>
                    <div class="badge">{{ getExperienceString(skill) }}</div>
                </div>
            </div>
            <h1 class="small">{{ $t('skills.projects') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div class="block" v-for="skill in getProjects()" :key="skill.name">
                    <img :class="'c'+skill.color" :data-src="skill.img" :alt="skill.name"/>
                    <div>{{ skill.display_name }}</div>
                </div>
            </div>
            <h1 class="small">{{ $t('skills.competencies') }}</h1>
            <div v-lazy-container="{ selector: 'img' }" class="img-container">
                <div class="block" v-for="skill in getCompetencies()" :key="skill.name">
                    <img :class="'c'+skill.color" :data-src="skill.img" :alt="skill.name"/>
                    <div>{{ $t(skill.display_name) }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import json from "../../public/data/skills.json"

export default {
    name: "Skills",
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
}

.content .star-scheme {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    margin-bottom: 16px;

    > * {
        margin: 0 8px;
        padding: 4px;
        border-radius: 10px;
    }
}

.content .img-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 0 15px;
    font-size: 0.9rem;

    img {
        width: 64px;
        height: 64px;
        padding: 8px;
        border-radius: 25px 12px;
    }

    > div {
        max-width: 96px;
        margin: 16px 8px 8px;
    }
}

.c1 {
    background-color: $accent;
}

.c2 {
    background-color: $accent2;
}

.c3 {
    background-color: $accent3;
}

.c4 {
    background-color: $accent4;
}

.c5 {
    background-color: $dark5;
}

.line {
    width: 95%;
    height: 1px;
    background-color: $grey;
    margin-top: 16px;
    align-self: center;
}

h1.small.desc {
    margin-top: 0;
    border-bottom-color: $grey;
}

.badge {
    width: 40px;
    height: 16px;
    padding: 3px;
    border-radius: 6px 10px;
    background: $light6;
    font-size: 12px;
    text-align: center;
    margin-right: 4px;
}

.block {
    position: relative;

    .badge {
        position: absolute;
        width: 64px;
        height: 16px;
        top: -14px;
        left: 8px;
        padding: 3px;
        border-radius: 6px 12px;
        background: $light6;
        font-size: 12px;
    }
}

.inline-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

#app.dark .block .badge, #app.dark .badge {
    background: $dark6;
}
</style>
