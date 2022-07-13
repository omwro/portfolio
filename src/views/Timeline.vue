<template>
    <section id="timeline">
        <h1>{{ $t('timeline.title') }}</h1>
        <div class="content">
            <GitFlow :items="gitItems" :colors="colors"/>
        </div>
    </section>
</template>

<script>
import GitFlow from "gitflow-component";

export default {
    name: "Timeline",
    components: {
        GitFlow
    },
    data: () => ({
        colors: [
            "#000000",
            "#b51c14",
            "#0074A0",
            "#00764E",
            "#cd8700"
        ]
    }),
    computed: {
        gitItems() {
            return [
                {
                    line: 2,
                    tag: "Jun 2022",
                    style: "merge",
                    merge: 1,
                    spacing: 2,
                    msg: this.$t('timeline.mergeStudy')
                }, {
                    line: 3,
                    tag: "Jun 2022",
                    style: "merge",
                    merge: 2,
                    spacing: 1,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.infi.role'),
                    desc: this.$t('timeline.infi.desc'),
                    img: "./img/company/logo.webp"
                }, {
                    line: 3,
                    tag: "Feb 2022",
                    style: "start",
                    start: 2,
                    spacing: 1,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    line: 3,
                    tag: "Aug 2020",
                    style: "merge",
                    merge: 2,
                    spacing: 1,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.bold.role'),
                    desc: this.$t('timeline.bold.desc'),
                    img: "./img/company/logo.webp"
                }, {
                    line: 3,
                    tag: "Feb 2020",
                    style: "start",
                    start: 2,
                    spacing: 1,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    line: 2,
                    style: "commit",
                    spacing: 2,
                    msg: this.$t('timeline.hva.role'),
                    desc: this.$t('timeline.hva.desc'),
                    img: "./img/company/logo.webp"
                }, {
                    line: 2,
                    tag: "Sep 2018",
                    style: "start",
                    start: 1,
                    spacing: 2,
                    msg: this.$t('timeline.newStudyBranch')
                }, {
                    line: 2,
                    tag: "Jun 2018",
                    style: "merge",
                    merge: 1,
                    spacing: 2,
                    msg: this.$t('timeline.mergeWork')
                }, {
                    line: 3,
                    tag: "Jun 2018",
                    style: "merge",
                    merge: 1,
                    spacing: 1,
                    msg: this.$t('timeline.mergeStudy')
                }, {
                    line: 4,
                    tag: "Jun 2018",
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.dgd.role'),
                    desc: this.$t('timeline.dgd.desc'),
                    img: "./img/company/logo.webp"
                }, {
                    line: 4,
                    tag: "Feb 2018",
                    style: "start",
                    start: 3,
                    spacing: 0,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    line: 4,
                    tag: "Jan 2017",
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.kk.role'),
                    desc: this.$t('timeline.kk.desc'),
                    img: "./img/company/logo.webp"
                }, {
                    line: 4,
                    tag: "Sep 2016",
                    style: "start",
                    start: 3,
                    spacing: 0,
                    msg: this.$t('timeline.newInternshipBranch')
                },
                {
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.regio.role'),
                    desc: this.$t('timeline.regio.desc'),
                    img: "./img/company/logo.webp"
                },
                {
                    line: 3,
                    tag: "Sep 2015",
                    style: "start",
                    start: 1,
                    spacing: 1,
                    msg: this.$t('timeline.newStudyBranch')
                },
                {
                    line: 2,
                    style: "commit",
                    spacing: 2,
                    msg: this.$t('timeline.deugd.role'),
                    desc: this.$t('timeline.deugd.desc'),
                    img: "./img/company/logo.webp"
                },
                {
                    line: 2,
                    tag: "Jan 2015",
                    style: "start",
                    start: 1,
                    spacing: 2,
                    msg: this.$t('timeline.newWorkBranch')
                },
                {
                    line: 1,
                    style: "commit",
                    spacing: 3,
                    msg: this.$t('timeline.initialCommit'),
                    img: "./img/company/logo.webp"
                }
            ]
        }
    }
}
</script>

<style lang="scss">

#app.dark #gitflow .row:hover {
    background-color: rgba(white, .1);
}
</style>
