<template>
    <NuxtLayout>
        <Section id="timeline-page" :heading="$t('timeline.title')" class="pt-4">
            <template #top>
                <BreadcrumbLink text="/ Home" url="/#timeline" />
            </template>
            <Content class="content">
                <GitFlow
                    class="gitflow-mobile"
                    :items="sortedGitItemsMobile($t)"
                    :colors="colors" />
                <GitFlow
                    class="gitflow-desktop"
                    :items="sortedGitItemsDesktop($t)"
                    :colors="colors" />
            </Content>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import Section from "../components/elements/Section";
import BreadcrumbLink from "../components/elements/BreadcrumbLink";
import Content from "../components/elements/Content";
import GitFlow from "../components/gitflow/GitFlow";

import timeline from "../assets/json/timeline.json";
import skills from "../assets/json/skills.json";
import moment from "moment/moment";
const colors = ["#000000", "#014F86", "#0078A7", "#009FAD", "#00C49C"];

const getSkillChips = (x) => {
    let str = "<div class='skill-chip-container'>";
    x.stack
        ? x.stack.forEach((stack) => {
            const skill = skills.find((x) => x.name === stack);
            str += `<div class="skill-chip-block" ` + `style="border-color: ${colors[x.line]}; ` + `">` + `<img src="${skill.img}" alt="${skill.name}" />` + `<span>${skill["display_name"]}</span>` + `</div>`;
        })
        : null;
    str += "</div>";
    return str;
}

const DATE_FORMAT = "MMM YYYY";

const sortedGitItemsMobile = ($t) => {
    let items = [];

    timeline.forEach((x) => {
        const startdate = moment(x.startdate, DATE_FORMAT);
        const enddate = moment(x.enddate, DATE_FORMAT);
        items.push({
            style: "commit",
            line: x.line,
            img: "./img/company/logo.webp",
            msg: `<div style="font-size: 1rem">${$t("timeline." + x.id + ".role")}<span style="font-size: 0.875rem"> @ ${$t("timeline." + x.id + ".company")}</span></div><div style="font-size: 0.75rem">${$t("timeline." + x.id + ".desc")}</div>` + getSkillChips(x),
            date: startdate.add(1, "days"),
            spacing: 4 - x.line,
            tag: `${$t(startdate.format(DATE_FORMAT))} - ${enddate.isValid() ? $t(enddate.format(DATE_FORMAT)) : $t("timeline.present")
            }`,
        });
    });
    items.push({
        style: "commit",
        line: 1,
        img: "./img/company/logo.webp",
        msg: $t(`timeline.initialCommit`),
        date: moment("01/01/1999"),
        spacing: 4 - 1,
    });
    return items.sort((a, b) => b.date - a.date);
}

const sortedGitItemsDesktop = ($t) => {
    let items = [];
    timeline.forEach((x) => {
        const startdate = moment(x.startdate, DATE_FORMAT);
        const enddate = moment(x.enddate, DATE_FORMAT);
        if (enddate.isValid()) {
            items.push({
                style: "merge",
                line: x.line,
                merge: x.parentline ? x.parentline : x.line - 1,
                date: enddate,
                tag: $t(enddate.format(DATE_FORMAT)),
                spacing: 4 - x.line,
                msg: x.type === "Internship" ? `<div style="font-size: 0.75rem">${$t("timeline.stoppedAsStudy")}</div>` : `<div style="font-size: 0.75rem">${$t("timeline.stoppedAs")} ${$t("timeline." + x.id + ".role")}</div>`,
            });
        }
        items.push({
            style: "commit",
            line: x.line,
            img: "./img/company/logo.webp",
            msg: `<div style="font-size: 1rem">${$t("timeline." + x.id + ".role")}<span style="font-size: 0.875rem"> @ ${$t("timeline." + x.id + ".company")}</span></div><div style="font-size: 0.75rem">${$t("timeline." + x.id + ".desc")}</div>` + getSkillChips(x),
            date: startdate.add(1, "days"),
            spacing: 4 - x.line,
        });
        items.push({
            style: "start",
            line: x.line,
            start: x.parentline ? x.parentline : x.line - 1,
            date: startdate,
            tag: $t(startdate.format(DATE_FORMAT)),
            spacing: 4 - x.line,
            msg: `<div style="font-size: 0.75rem; ">${$t("timeline.startedAs")} ${$t("timeline." + x.id + ".role")}</div>`,
        });
    });
    items.push({
        style: "commit",
        line: 1,
        img: "./img/company/logo.webp",
        msg: $t(`timeline.initialCommit`),
        date: moment("01/01/1999"),
        spacing: 4 - 1,
    });
    return items.sort((a, b) => b.date - a.date);
}
</script>

<script>
export default {
    name: "timeline"
};
</script>

<style>
#timeline-page .content * {
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
    @apply flex gap-1 px-1.5 py-[3px] rounded-[20px] border;
}
#gitflow .skill-chip-container .skill-chip-block img {
    @apply w-4 h-4 invert-[1] object-contain;
}
#gitflow .skill-chip-container .skill-chip-block span {
    @apply text-xs self-center;
}
</style>