<template>
    <section id="skills">
        <h1>{{ $t("skills.title") }}</h1>
        <div class="content">
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.languages") }}</h1>
                <div
                    v-lazy-container="{ selector: 'img' }"
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getLanguages()"
                        :key="skill.name"
                        :skill="skill"
                        :xp="true" />
                </div>
            </div>
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.frameworks") }}</h1>
                <div
                    v-lazy-container="{ selector: 'img' }"
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getFrameworks()"
                        :key="skill.name"
                        :skill="skill"
                        :xp="true" />
                </div>
            </div>
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.environments") }}</h1>
                <div
                    v-lazy-container="{ selector: 'img' }"
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getEnvironments()"
                        :key="skill.name"
                        :skill="skill"
                        :xp="true" />
                </div>
            </div>
            <div class="skill-container">
                <h1 class="small">{{ $t("skills.competencies") }}</h1>
                <div
                    v-lazy-container="{ selector: 'img' }"
                    class="img-container">
                    <SkillBlock
                        v-for="skill in getCompetencies()"
                        :key="skill.name"
                        :skill="skill"
                        :t="true" />
                </div>
            </div>
            <!--            <h1 class="small">{{ $t('skills.projects') }}</h1>-->
            <!--            <div v-lazy-container="{ selector: 'img' }" class="img-container">-->
            <!--                <SkillBlock v-for="skill in getProjects()"-->
            <!--                            :key="skill.name"-->
            <!--                            :skill="skill"/>-->
            <!--            </div>-->
        </div>
    </section>
</template>

<script>
import json from "../../public/data/skills.json";
import SkillBlock from "@/components/SkillBlock";

export default {
    name: "Skills",
    components: { SkillBlock },
    methods: {
        getTotalMonths(skill) {
            return skill.xp
                .map((x) => x.months)
                .reduce((prevValue, currValue) => prevValue + currValue);
        },
        getExperienceString(skill) {
            const totalxp = this.getTotalMonths(skill);
            let years = Math.floor(totalxp / 12);
            if (years) return `${years} ${this.$t("skills.years")}`;
            return `${totalxp} ${this.$t("skills.months")}`;
        },
        getLanguages() {
            return json
                .filter(
                    (x) => x.type === "Language" && x.show_portfolio === true
                )
                .sort(
                    (x, y) => this.getTotalMonths(y) - this.getTotalMonths(x)
                );
        },
        getFrameworks() {
            return json
                .filter(
                    (x) => x.type === "Framework" && x.show_portfolio === true
                )
                .sort(
                    (x, y) => this.getTotalMonths(y) - this.getTotalMonths(x)
                );
        },
        getEnvironments() {
            return json
                .filter(
                    (x) =>
                        x.type === "Environments" && x.show_portfolio === true
                )
                .sort(
                    (x, y) => this.getTotalMonths(y) - this.getTotalMonths(x)
                );
        },
        // getProjects() {
        //     return json.filter(x => x.type === "Projects" && x.show_portfolio === true)
        // },
        getCompetencies() {
            return json.filter(
                (x) => x.type === "Competencies" && x.show_portfolio === true
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/variables";

.content {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .skill-container {
        background-color: $block-light;
        border-left: solid 5px $accent;
        border-right: solid 5px $accent;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: 16px;

        h1 {
            margin-top: 0;
            border-bottom-color: $accent;
        }
    }

    .img-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        font-size: 0.9rem;
    }
}

#app.dark .content {
    .skill-container {
        background-color: $block-dark;
    }
}
</style>
