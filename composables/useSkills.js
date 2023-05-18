import moment from "moment/moment";

export const getExperienceString = (skill, $t, abbreviation = false) => {
    if (!skill.xp.length) return "";
    const totalxp = skill.xp
        .map((x) => {
            if (x.months) return x.months;
            if (x.start) return getMonthsBetween(x.start)
        })
        .reduce((prevValue, currValue) => prevValue + currValue);
    return getExperienceText(totalxp, $t, abbreviation)
};
const getExperienceText = (totalxp, $t, abbreviation) => {
    let years = Math.floor(totalxp / 12);
    if (years) return getYearText(years, $t, abbreviation);
    return getMonthText(totalxp, $t, abbreviation);
}
const getYearText = (years, $t, abbreviation) => {
    if (abbreviation) return `${years}${$t("skills.y")}`;
    else if (years > 1) return `${years} ${$t("skills.years")}`;
    return `${years} ${$t("skills.year")}`;
};
const getMonthText = (totalXp, $t, abbreviation) => {
    if (abbreviation) return `${totalXp}${$t("skills.m")}`;
    else if (totalXp > 1) return `${totalXp} ${$t("skills.months")}`;
    return `${totalXp} ${$t("skills.month")}`;
};

export const getGroupedSkills = (skills, filter = null) => {
    let groupedData = {};
    skills.forEach(skill => {
        if (!groupedData[skill.group]) groupedData[skill.group] = {};
        if (!groupedData[skill.group][skill.role]) groupedData[skill.group][skill.role] = [];
        groupedData[skill.group][skill.role].push(skill);
    });
    if (filter) {
        groupedData = Object.keys(groupedData).reduce((acc, key) => {
            if (filter.includes(key)) {
                acc[key] = groupedData[key];
            }
            return acc;
        }, {});
    }
    return groupedData;
};

const getMonthsBetween = (dateString, format = "D-M-YYYY") => {
    return Math.ceil(moment.duration(moment().diff(moment(dateString, format))).asMonths())
}

export const getExperienceType = (skill) => {
    if (skill.xp.filter(x => x.type === "work").length) return "work"
    if (skill.xp.filter(x => x.type === "education").length) return "education"
    if (skill.xp.filter(x => x.type === "hobby").length) return "hobby"
}

export const getGroupedExperience = (experiences, $t) => {
    let groupedData = {};
    experiences.forEach(xp => {
        if (!groupedData[xp.type]) groupedData[xp.type] = 0;
        if (xp.months) groupedData[xp.type] = groupedData[xp.type] + xp.months;
        if (xp.start) groupedData[xp.type] = groupedData[xp.type] + getMonthsBetween(xp.start);
    });
    Object.keys(groupedData).forEach((key) => groupedData[key] = getExperienceText(groupedData[key] ,$t, false));
    return groupedData
}

export const isSkillLive = (skill) => {
    return skill.xp.filter(xp => xp.start).length
}