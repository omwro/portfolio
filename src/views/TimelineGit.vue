<template>
    <section id="timelineGit">
        <h1>{{ $t('timeline.title') }}</h1>
        <div class="content">
            <div id="git">
                <div v-for="item in gitItems" :key="item.id" class="row">
                    <template v-if="item.tag">
                        <div :class="'tag color'+item.line">{{ item.tag }}</div>
                        <div :class="'hline hl-h color'+item.line"></div>
                    </template>
                    <template v-else>
                        <div class="spacer-1"></div>
                    </template>

                    <div class="flow">
                        <template v-for="i in item.line">
                            <template v-if="i === item.line">
                                <template v-if="item.style === 'commit'">
                                    <div :key="i" class="block">
                                        <div :class="'tpbg tpbg-h color'+i"/>
                                        <div :class="'vline vl-t color'+i"></div>
                                        <div :class="'vline vl-b color'+i"></div>
                                        <div :class="'bullet b-img color'+item.line">
                                            <img v-lazy="'./img/company/logo.webp'" alt="profile picture"/>
                                        </div>
                                    </div>
                                </template>
                                <template v-else-if="item.style === 'start'">
                                    <div class="block block-mobile" :key="i">
                                        <div :class="'tpbg color'+item.line"/>
                                        <div :class="'bottomcornerline color'+item.line"></div>
                                    </div>
                                    <!--                                <div :key="i" :class="'bottomcornerline color'+item.line"></div>-->
                                </template>
                                <template v-else-if="item.style === 'merge'">
                                    <div class="block block-mobile" :key="i">
                                        <div :class="'tpbg color'+item.line"/>
                                        <div :class="'topcornerline color'+item.line"></div>
                                    </div>
                                    <!--                                <div :key="i" :class="'topcornerline color'+item.line"></div>-->
                                </template>
                                <template v-else>
                                    <div :key="i" :class="'vline color'+i"></div>
                                </template>
                            </template>
                            <template v-else>
                                <template v-if="item.style === 'start'">
                                    <template v-if="i < item.start">
                                        <div :key="i" :class="'block block-mobile color'+i">
                                            <div :class="'vline vl-t color'+i"></div>
                                            <div :class="'vline vl-b color'+i"></div>
                                            <div :class="'hline hl-l hl-h color'+item.line"></div>
                                            <div :class="'hline hl-r hl-h color'+item.line"></div>
                                        </div>
                                    </template>
                                    <template v-else-if="i === item.start">
                                        <div :key="i" class="block">
                                            <div :class="'tpbg tpbg-h color'+item.line"/>
                                            <div :class="'vline vl-t color'+i"></div>
                                            <div :class="'vline vl-b color'+i"></div>
                                            <div :class="'hline hl-l hl-h color'+item.line"></div>
                                            <div :class="'hline hl-r color'+item.line"></div>
                                            <div :class="'bullet b-s color'+item.line"></div>
                                        </div>
                                    </template>
                                    <template v-else-if="i > item.start">
                                        <div :key="i" class="block block-mobile">
                                            <div :class="'tpbg color'+item.line"/>
                                            <div :class="'vline vl-t color'+i"></div>
                                            <div :class="'vline vl-b color'+i"></div>
                                            <div :class="'hline color'+item.line"></div>
                                            <div :class="'hline color'+item.line"></div>
                                        </div>
                                    </template>
                                </template>
                                <template v-else-if="item.style === 'commit'">
                                    <div :key="i" :class="'vline color'+i"></div>
                                </template>
                                <template v-else-if="item.style === 'merge'">
                                    <template v-if="i < item.merge">
                                        <div :key="i" class="block block-mobile">
                                            <div :class="'vline vl-t color'+i"></div>
                                            <div :class="'vline vl-b color'+i"></div>
                                            <div :class="'hline hl-h color'+item.line"></div>
                                        </div>
                                    </template>
                                    <template v-else-if="i === item.merge">
                                        <div :key="i" class="block">
                                            <div :class="'tpbg tpbg-h color'+item.line"/>
                                            <div :class="'vline vl-t color'+i"></div>
                                            <div :class="'vline vl-b color'+i"></div>
                                            <div :class="'hline hl-l hl-h color'+item.line"></div>
                                            <div :class="'hline hl-r color'+item.line"></div>
                                            <div :class="'bullet b-s color'+item.line"></div>
                                        </div>
                                    </template>
                                    <template v-else-if="i > item.merge">
                                        <div :key="i" :class="'block block-mobile color'+item.line">
                                            <div :class="'tpbg color'+item.line"/>
                                            <div :class="'vline vl-t color'+i"></div>
                                            <div :class="'vline vl-b color'+i"></div>
                                            <div :class="'hline color'+item.line"></div>
                                            <div :class="'hline color'+item.line"></div>
                                        </div>
                                    </template>
                                </template>
                                <template v-else>
                                    <div :key="i" :class="'vline color'+i"></div>
                                </template>
                            </template>
                        </template>
                    </div>

                    <template v-if="item.msg">
                        <div :class="'commit c-'+item.spacing+' color'+item.line">
                            <div></div>
                            <div class="commit-msg">
                                {{ item.msg }}
                                <div style="font-size: 12px">{{ item.desc }}</div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TimelineGit",
    computed: {
        gitItems() {
            return [
                {
                    id: 20,
                    line: 2,
                    tag: "Jun 2022",
                    style: "merge",
                    merge: 1,
                    spacing: 2,
                    msg: this.$t('timeline.mergeStudy')
                }, {
                    id: 19,
                    line: 3,
                    tag: "Jun 2022",
                    style: "merge",
                    merge: 2,
                    spacing: 1,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 18,
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.infi.role'),
                    desc: this.$t('timeline.infi.desc')
                }, {
                    id: 17,
                    line: 3,
                    tag: "Feb 2022",
                    style: "start",
                    start: 2,
                    spacing: 1,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    id: 16,
                    line: 3,
                    tag: "Aug 2020",
                    style: "merge",
                    merge: 2,
                    spacing: 1,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 15,
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.bold.role'),
                    desc: this.$t('timeline.bold.desc')
                }, {
                    id: 14,
                    line: 3,
                    tag: "Feb 2020",
                    style: "start",
                    start: 2,
                    spacing: 1,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    id: 13,
                    line: 2,
                    style: "commit",
                    spacing: 2,
                    msg: this.$t('timeline.hva.role'),
                    desc: this.$t('timeline.hva.desc')
                }, {
                    id: 12,
                    line: 2,
                    tag: "Sep 2018",
                    style: "start",
                    start: 1,
                    spacing: 2,
                    msg: this.$t('timeline.newStudyBranch')
                }, {
                    id: 111,
                    line: 2,
                    tag: "Jun 2018",
                    style: "merge",
                    merge: 1,
                    spacing: 2,
                    msg: this.$t('timeline.mergeWork')
                }, {
                    id: 11,
                    line: 3,
                    tag: "Jun 2018",
                    style: "merge",
                    merge: 1,
                    spacing: 1,
                    msg: this.$t('timeline.mergeStudy')
                }, {
                    id: 10,
                    line: 4,
                    tag: "Jun 2018",
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 9,
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.dgd.role'),
                    desc: this.$t('timeline.dgd.desc')
                }, {
                    id: 8,
                    line: 4,
                    tag: "Feb 2018",
                    style: "start",
                    start: 3,
                    spacing: 0,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    id: 7,
                    line: 4,
                    tag: "Jan 2017",
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 6,
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.kk.role'),
                    desc: this.$t('timeline.kk.desc')
                }, {
                    id: 5,
                    line: 4,
                    tag: "Sep 2016",
                    style: "start",
                    start: 3,
                    spacing: 0,
                    msg: this.$t('timeline.newInternshipBranch')
                },
                {
                    id: 4,
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.regio.role'),
                    desc: this.$t('timeline.regio.desc')
                },
                {
                    id: 3,
                    line: 3,
                    tag: "Sep 2015",
                    style: "start",
                    start: 1,
                    spacing: 1,
                    msg: this.$t('timeline.newStudyBranch')
                },
                {
                    id: 2,
                    line: 2,
                    style: "commit",
                    spacing: 2,
                    msg: this.$t('timeline.deugd.role'),
                    desc: this.$t('timeline.deugd.desc')
                },
                {
                    id: 1,
                    line: 2,
                    tag: "Jan 2015",
                    style: "start",
                    start: 1,
                    spacing: 2,
                    msg: this.$t('timeline.newWorkBranch')
                },
                {
                    id: 0,
                    line: 1,
                    style: "commit",
                    spacing: 3,
                    msg: this.$t('timeline.initialCommit')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$transparent: rgba(0, 0, 0, 0);

#timelineGit {
    display: flex;

    #git {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-size: 16px;
        margin: 0 8px;
        max-width: 1000px;

        .row {
            display: flex;
            flex-direction: row;
            height: auto;

            &:hover {
                background-color: rgba(black, .1);
            }

            .flow {
                display: inline-flex;
            }

            .vline, .bottomcornerline, .topcornerline {
                .color1 {
                    z-index: 1;
                }

                .color2 {
                    z-index: 2;
                }

                .color3 {
                    z-index: 3;
                }

                .color4 {
                    z-index: 4;
                }
            }

            .tag {
                width: 88px;
                height: 12px;
                padding: 5px;
                margin: 3px 0;
                display: flex;
                align-items: center;
                border-radius: 2px;

                &.color1 {
                    background-color: $accent-tp;
                    border: solid 1px $accent;
                }

                &.color2 {
                    background-color: $accent2-tp;
                    border: solid 1px $accent2;
                }

                &.color3 {
                    background-color: $accent3-tp;
                    border: solid 1px $accent3;
                }

                &.color4 {
                    background-color: $accent4-tp;
                    border: solid 1px $accent4;
                }
            }

            .block {
                width: 30px;
                display: flex;
                flex-wrap: wrap;
                position: relative;
                min-height: 30px;

                .hline,
                .vline,
                .b-s {
                    position: absolute;
                }

                .tpbg {
                    width: 30px;
                    height: calc(100% - 6px);
                    position: absolute;
                    margin-top: 3px;

                    &.tpbg-h {
                        width: 15px;
                        margin-left: 15px;
                    }

                    &.color1 {
                        background-color: $accent-tp;
                    }

                    &.color2 {
                        background-color: $accent2-tp;
                    }

                    &.color3 {
                        background-color: $accent3-tp;
                    }

                    &.color4 {
                        background-color: $accent4-tp;
                    }
                }
            }

            .bullet {
                height: 30px;
                width: 30px;
                border-radius: 50%;
                align-self: center;
                z-index: 5;

                &.b-s {
                    height: 16px;
                    width: 16px;
                    margin: 7px;
                    position: relative;
                }

                &.b-img {
                    height: 24px;
                    width: 24px;
                    border: 3px solid;
                    overflow: hidden;
                    flex: none;

                    img {
                        width: 24px;
                        height: 24px;
                        object-fit: contain;
                    }
                }

                &.color1 {
                    background-color: $accent;
                    border-color: $accent;
                }

                &.color2 {
                    background-color: $accent2;
                    border-color: $accent2;
                }

                &.color3 {
                    background-color: $accent3;
                    border-color: $accent3;
                }

                &.color4 {
                    background-color: $accent4;
                    border-color: $accent4;
                }
            }

            .hline {
                width: 30px;
                height: 13px;
                margin-top: 13px;
                border-top: 4px solid;

                &.hl-r {
                    width: 15px;
                    right: 0;
                }

                &.hl-l {
                    width: 15px;
                    left: 0;
                }

                &.hl-h {
                    height: 14px;
                    margin-top: 14px;
                    border-width: 2px;
                }
            }

            .vline {
                width: 13px;
                height: auto;
                margin-right: 13px;
                border-right: 4px solid;
                flex: none;

                &.vl-t {
                    height: 100%;
                    top: 0;
                }

                &.vl-b {
                    height: 100%;
                    bottom: 0;
                }
            }

            .topcornerline {
                width: 13px;
                height: 13px;
                margin: 13px 13px 0 0;
                border-top: 4px solid;
                border-right: 4px solid;
                border-radius: 0 15px 0 0;
            }

            .bottomcornerline {
                width: 13px;
                height: 13px;
                margin: 0 13px 13px 0;
                border-bottom: 4px solid;
                border-right: 4px solid;
                border-radius: 0 0 15px 0;
            }

            .hline,
            .vline,
            .topcornerline,
            .bottomcornerline {
                &.color1 {
                    border-color: $accent;
                }

                &.color2 {
                    border-color: $accent2;
                }

                &.color3 {
                    border-color: $accent3;
                }

                &.color4 {
                    border-color: $accent4;
                }
            }

            .spacer-1 {
                margin-left: 130px;
            }

            .commit {
                display: flex;
                width: auto;
                min-height: 30px;
                align-self: center;

                > div:first-child {
                    width: 50px;
                    border-right: 3px solid;
                    margin: 3px 10px 3px 0;
                }

                > div:last-child {
                    align-self: center;

                    &.commit-msg {
                        width: calc(100% - 155px);
                        flex: auto;
                        padding: 2px 0;
                    }
                }

                &.c-1 > div:first-child {
                    width: 80px;
                }

                &.c-2 > div:first-child {
                    width: 110px;
                }

                &.c-3 > div:first-child {
                    width: 140px;
                }

                &.c-4 > div:first-child {
                    width: 170px;
                }

                &.color1 > div:first-child {
                    border-color: $accent;
                    background-color: $accent-tp;
                }

                &.color2 > div:first-child {
                    border-color: $accent2;
                    background-color: $accent2-tp;
                }

                &.color3 > div:first-child {
                    border-color: $accent3;
                    background-color: $accent3-tp;
                }

                &.color4 > div:first-child {
                    border-color: $accent4;
                    background-color: $accent4-tp;
                }
            }
        }
    }

    @media (max-width: $mq-m) {
        #git {
            font-size: 14px;

            .row {

                .flow {
                    max-width: 30px;
                }

                .spacer-1 {
                    margin-left: 79px;
                }

                .vline {
                    position: absolute;
                }

                .block-mobile:not(.color2) {
                    position: absolute;
                    left: 87px;
                }

                .vline, .bottomcornerline, .topcornerline, .commit.c-0, .commit.c-1, .commit.c-2 {
                    border-radius: 0;
                    border-top: 0;
                    border-bottom: 0;
                }

                .hline.hl-h:not(.hl-r):not(.hl-l) {
                    width: 5px;
                }

                .hline.hl-r, .hline:not(.hl-h) {
                    display: none;
                }

                .topcornerline {
                    height: 17px;
                }

                .tag {
                    width: 62px;
                }

                .bullet {
                    &.b-img {
                        z-index: 5;
                    }

                    &.b-s {
                        z-index: 5;
                    }
                }

                .tpbg {
                    display: none;

                    &.tpbg-h {
                        display: block;
                    }
                }

                .commit {
                    > div:first-child {
                        width: 10px;
                    }

                    &.c-1 > div:first-child {
                        width: 10px;
                    }

                    &.c-2 > div:first-child {
                        width: 10px;
                    }

                    &.c-3 > div:first-child {
                        width: 10px;
                    }

                    &.c-4 > div:first-child {
                        width: 10px;
                    }
                }
            }
        }
    }
}

#app.dark #timelineGit .row {
    &:hover {
        background-color: rgba(white, .1);
    }
}
</style>
