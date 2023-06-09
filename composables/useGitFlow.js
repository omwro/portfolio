import moment from "moment/moment";
import skills from "assets/json/skills.json";
import {IconMapper} from "~/composables/IconMapper";
import timeline from "assets/json/timeline.json";

export const colors = ["#000000", "#014F86", "#0078A7", "#009FAD", "#00C49C"];
export const RAW_DATE_FORMAT = "D-M-YYYY";
export const DATE_FORMAT = "MMM YYYY";
const logoPath = "./img/company/logo.webp";
const DEFAULT_LINE_SPACING = 4

export const sortedGitItemsMobile = ($t, isHomePage = false) => {
    let items = [];

    timeline.forEach((x) => {
        if (isHomePage && !x.homepage) return;

        const startDate = moment(x.startdate, RAW_DATE_FORMAT);
        const endDate = moment(x.enddate, RAW_DATE_FORMAT);

        items.push({
            style: "commit",
            line: x.line,
            img: logoPath,
            msg: `<div style="font-size: 1rem">${$t("timeline." + x.id + ".role")}<span style="font-size: 0.875rem"> @ ${$t("timeline." + x.id + ".company")}</span></div>` + getHtml($t("timeline." + x.id + ".desc"), 0.75) + (!isHomePage ? getSkillChips(x) : ''),
            date: startDate,
            spacing: DEFAULT_LINE_SPACING - x.line,
            tag: `${startDate.format(DATE_FORMAT)} - ${endDate.isValid() ? endDate.format(DATE_FORMAT) : $t("timeline.present")
            }`,
        });
    });

    items.push(initialCommit($t));

    return sortByDates(items);
}

export const sortedGitItemsDesktop = ($t, isHomePage = false) => {
    let items = [];

    timeline.forEach((x) => {
        if (isHomePage && !x.homepage) return;

        const startDate = moment(x.startdate, RAW_DATE_FORMAT);
        const endDate = moment(x.enddate, RAW_DATE_FORMAT);

        if (endDate.isValid()) {
            items.push({
                style: "merge",
                line: x.line,
                merge: x.parentline ? x.parentline : x.line - 1,
                date: endDate,
                tag: endDate.format(DATE_FORMAT),
                spacing: DEFAULT_LINE_SPACING - x.line,
                msg: getMessage('stopped', x, $t),
            });
        }

        items.push({
            style: "commit",
            line: x.line,
            img: logoPath,
            msg: `<div style="font-size: 1rem">${$t("timeline." + x.id + ".role")}<span style="font-size: 0.875rem"> @ ${$t("timeline." + x.id + ".company")}</span></div>` + getHtml($t("timeline." + x.id + ".desc"), 0.75) + (!isHomePage ? getSkillChips(x) : ''),
            date: startDate,
            spacing: DEFAULT_LINE_SPACING - x.line,
        });

        items.push({
            style: "start",
            line: x.line,
            start: x.parentline ? x.parentline : x.line - 1,
            date: startDate,
            tag: startDate.format(DATE_FORMAT),
            spacing: DEFAULT_LINE_SPACING - x.line,
            msg: getMessage('started', x, $t),
        });
    });

    items.push(initialCommit($t));

    return sortByDates(items);
}

const getSkillChips = (x) => {
    let str = "<div class='skill-chip-container'>";
    x.stack
        ? x.stack.forEach((stack) => {
            const skill = skills.find((x) => x.name === stack);
            if (skill) {
                str += `<div class="skill-chip-block" ` + `style="border-color: ${colors[x.line]}; ` + `">` + `<Icon name="${IconMapper[skill.name]}" size="16" />` + `<span>${skill["display_name"]}</span>` + `</div>`;
            }

        })
        : null;
    str += "</div>";
    return str;
}

const sortByDates = (items) => {
    return items.sort((a, b) => b.date - a.date);
}

const initialCommit = ($t) => {
    return {
        style: "commit",
        line: 1,
        img: logoPath,
        msg: $t(`timeline.initialCommit`),
        date: moment("1-4-1999", RAW_DATE_FORMAT),
        spacing: DEFAULT_LINE_SPACING - 1,
    }
};

const getHtml = (text, fontsize) => `<div style="font-size: ${fontsize}rem;">${text}</div>`;

const getMessage = (type, item, $t) => getHtml($t(`timeline.${type}${item.type}`) + $t("timeline." + item.id + ".role"), 0.75);