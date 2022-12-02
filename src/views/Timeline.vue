<template>
    <section id="timeline">
        <h1>{{ $t("timeline.title") }}</h1>
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
    </section>
</template>

<script>
import GitFlow from "gitflow-component";
import timelineJson from "../../public/data/timeline.json";
import skillsJson from "../../public/data/skills.json";
import moment from "moment/moment";

export default {
    name: "Timeline",
    components: {
        GitFlow,
    },
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
                      console.log(stack, skill);
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
            timelineJson.forEach((x) => {
                const startdate = moment(x.startdate, DATE_FORMAT);
                const enddate = moment(x.enddate, DATE_FORMAT);
                items.push({
                    style: "commit",
                    line: x.line,
                    img: "./img/company/logo.webp",
                    msg:
                        `<div style="font-size: 1rem">${this.$t(
                            "timeline." + x.id + ".role"
                        )}<span style="font-size: 0.875rem"> @ ${this.$t(
                            "timeline." + x.id + ".company"
                        )}</span></div><div style="font-size: 0.75rem">${this.$t(
                            "timeline." + x.id + ".desc"
                        )}</div>` + this.getSkillChips(x),
                    date: startdate.add(1, "days"),
                    spacing: 4 - x.line,
                    tag: `${this.$t(startdate.format(DATE_FORMAT))} - ${
                        enddate.isValid()
                            ? this.$t(enddate.format(DATE_FORMAT))
                            : this.$t("timeline.present")
                    }`,
                });
                console.log(
                    this.$t(startdate.format(DATE_FORMAT)),
                    enddate.isValid(),
                    this.$t(enddate.format(DATE_FORMAT))
                );
            });
            items.push({
                style: "commit",
                line: 1,
                img: "./img/company/logo.webp",
                msg: this.$t(`timeline.initialCommit`),
                date: moment("01/01/1999"),
                spacing: 4 - 1,
            });
            return items.sort((a, b) => b.date - a.date);
        },
        sortedGitItemsDesktop() {
            const DATE_FORMAT = "MMM YYYY";
            let items = [];
            timelineJson.forEach((x) => {
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
                        msg: " ",
                    });
                }
                items.push({
                    style: "commit",
                    line: x.line,
                    img: "./img/company/logo.webp",
                    msg:
                        `<div style="font-size: 1rem">${this.$t(
                            "timeline." + x.id + ".role"
                        )}<span style="font-size: 0.875rem"> @ ${this.$t(
                            "timeline." + x.id + ".company"
                        )}</span></div><div style="font-size: 0.75rem">${this.$t(
                            "timeline." + x.id + ".desc"
                        )}</div>` + this.getSkillChips(x),
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
                    msg: " ",
                });
            });
            items.push({
                style: "commit",
                line: 1,
                img: "./img/company/logo.webp",
                msg: this.$t(`timeline.initialCommit`),
                date: moment("01/01/1999"),
                spacing: 4 - 1,
            });
            return items.sort((a, b) => b.date - a.date);
        },
    },
};
</script>

<style lang="scss">
@import "../styles/variables";

#gitflow {
    &.gitflow-mobile {
        display: flex !important;

        .gitflow-tag.gitflow-tag-mobile {
            width: 135px;
        }

        @media (min-width: $mq-m) {
            display: none !important;
        }
    }

    &.gitflow-desktop {
        display: none !important;

        @media (min-width: $mq-m) {
            display: flex !important;
        }
    }

    .skill-chip-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
        padding-top: 4px;

        .skill-chip-block {
            display: flex;
            gap: 4px;
            border: solid 1px;
            border-radius: 20px;
            padding: 3px 6px;

            img {
                width: 16px;
                height: 16px;
                filter: invert(1);
            }

            span {
                font-size: 12px;
                align-self: center;
            }
        }
    }
}

#app.dark #gitflow {
    .gitflow-row:hover {
        background-color: rgba(white, 0.1);
    }
    .skill-chip-block img {
        filter: invert(0);
    }
}
</style>
