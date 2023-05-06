<template>
    <Section id="timeline" :heading="$t('timeline.title')">
        <div class="content">
            <GitFlow
                class="gitflow-mobile"
                :items="sortedGitItemsMobile"
                :colors="colors" />
            <GitFlow
                class="gitflow-desktop"
                :items="sortedGitItemsDesktop"
                :colors="colors" />
        </div>
        <ViewMoreLink title="timeline.title" url="/timeline" />
    </Section>
</template>

<script setup>
import ViewMoreLink from "../elements/ViewMoreLink";
import GitFlow from "../gitflow/GitFlow";
import Section from "../elements/Section";
</script>

<script>
import timelineJson from "../../assets/json/timeline.json";
import skillsJson from "../../assets/json/skills.json";
import moment from "moment/moment";

export default {
    name: "Timeline",
    data: () => ({
        colors: ["#000000", "#014F86", "#0078A7", "#009FAD", "#00C49C"],
        timelineJson: timelineJson,
        skillsJson: skillsJson,
    }),
    methods: {
        getSkillChips(x) {
            let str = "<div class='skill-chip-container'>";
            x.stack
                ? x.stack.forEach((stack) => {
                    const skill = skillsJson.find((x) => x.name === stack);
                    str +=
                        `<div class="skill-chip-block" ` +
                        `style="border-color: ${this.colors[x.line]}; ` +
                        `">` +
                        `<img src="${skill.img}" alt="${skill.name}" />` +
                        `<span>${skill["display_name"]}</span>` +
                        `</div>`;
                })
                : null;
            str += "</div>";
            return str;
        },
    },
    computed: {
        sortedGitItemsMobile() {
            const DATE_FORMAT = "MMM YYYY";
            let items = [];
            timelineJson
                .filter((x) => x.homepage)
                .forEach((x) => {
                    const startdate = moment(x.startdate, DATE_FORMAT);
                    const enddate = moment(x.enddate, DATE_FORMAT);
                    items.push({
                        style: "commit",
                        line: x.line,
                        img: "./img/company/logo.webp",
                        msg: `<div style="font-size: 1rem">${this.$t(
                            "timeline." + x.id + ".role"
                        )}<span style="font-size: 0.875rem"> @ ${this.$t(
                            "timeline." + x.id + ".company"
                        )}</span></div><div style="font-size: 0.75rem">${this.$t(
                            "timeline." + x.id + ".desc"
                        )}</div>`,
                        date: startdate.add(1, "days"),
                        spacing: 4 - x.line,
                        tag: `${this.$t(startdate.format(DATE_FORMAT))} - ${
                            enddate.isValid()
                                ? this.$t(enddate.format(DATE_FORMAT))
                                : this.$t("timeline.present")
                        }`,
                    });
                });
            return items.sort((a, b) => b.date - a.date);
        },
        sortedGitItemsDesktop() {
            const DATE_FORMAT = "MMM YYYY";
            let items = [];
            timelineJson
                .filter((x) => x.homepage)
                .forEach((x) => {
                    const startdate = moment(x.startdate, DATE_FORMAT);
                    const enddate = moment(x.enddate, DATE_FORMAT);
                    if (enddate.isValid()) {
                        items.push({
                            style: "merge",
                            line: x.line,
                            merge: x.parentline ? x.parentline : x.line - 1,
                            date: enddate,
                            tag: this.$t(enddate.format(DATE_FORMAT)),
                            spacing: 4 - x.line,
                            msg:
                                x.type === "Internship"
                                    ? `<div style="font-size: 0.75rem">${this.$t(
                                        "timeline.stoppedAsStudy"
                                    )}</div>`
                                    : `<div style="font-size: 0.75rem">${this.$t(
                                        "timeline.stoppedAs"
                                    )} ${this.$t(
                                        "timeline." + x.id + ".role"
                                    )}</div>`,
                        });
                    }
                    items.push({
                        style: "commit",
                        line: x.line,
                        img: "./img/company/logo.webp",
                        msg: `<div style="font-size: 1rem">${this.$t(
                            "timeline." + x.id + ".role"
                        )}<span style="font-size: 0.875rem"> @ ${this.$t(
                            "timeline." + x.id + ".company"
                        )}</span></div><div style="font-size: 0.75rem">${this.$t(
                            "timeline." + x.id + ".desc"
                        )}</div>`,
                        date: startdate.add(1, "days"),
                        spacing: 4 - x.line,
                    });
                    items.push({
                        style: "start",
                        line: x.line,
                        start: x.parentline ? x.parentline : x.line - 1,
                        date: startdate,
                        tag: this.$t(startdate.format(DATE_FORMAT)),
                        spacing: 4 - x.line,
                        msg: `<div style="font-size: 0.75rem; ">${this.$t(
                            "timeline.startedAs"
                        )} ${this.$t("timeline." + x.id + ".role")}</div>`,
                    });
                });
            return items.sort((a, b) => b.date - a.date);
        },
    },
};
</script>

<style>
#timeline .content * {
    box-sizing: content-box;
}

#gitflow.gitflow-mobile {
    @apply flex md:hidden;
}
#gitflow.gitflow-mobile .gitflow-tag.gitflow-tag-mobile {
    @apply w-[135px];
}

#gitflow.gitflow-desktop {
    @apply hidden md:flex;
}
#gitflow .skill-chip-container {
    @apply flex flex-row flex-wrap gap-2 pt-1;
}
#gitflow .skill-chip-container .skill-chip-block {
    @apply flex gap-1 px-1.5 py-[3px] rounded-[20px] border-[solid];
}
#gitflow .skill-chip-container .skill-chip-block img {
    @apply w-4 h-4 invert-[1] object-contain;
}
#gitflow .skill-chip-container .skill-chip-block span {
    @apply text-xs self-center;
}
#app.dark #gitflow .gitflow-row:hover {
    @apply bg-[rgba(white,0.1)];
}
#app.dark #gitflow .skill-chip-block img {
    @apply invert-0;
}
</style>
