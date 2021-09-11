<template>
    <div id="timelineGit" class="section">
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

                    <template v-for="i in item.line">
                        <template v-if="i === item.line">
                            <template v-if="item.style === 'commit'">
                                <div :key="i" class="block">
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'bullet b-img color'+item.line">
                                        <img v-lazy="'./img/company/logo.webp'" alt="profile picture"/>
                                    </div>
                                </div>
                            </template>
                            <template v-else-if="item.style === 'start'">
                                <div :key="i" :class="'bottomcornerline color'+item.line"></div>
                            </template>
                            <template v-else-if="item.style === 'merge'">
                                <div :key="i" :class="'topcornerline color'+item.line"></div>
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
                                    <div :key="i" :class="'block block-mobile color'+item.line">
                                        <div :class="'vline vl-t color'+i"></div>
                                        <div :class="'vline vl-b color'+i"></div>
                                        <div :class="'hline hl-l hl-h color'+item.line"></div>
                                        <div :class="'hline hl-r color'+item.line"></div>
                                        <div :class="'bullet b-s color'+item.line"></div>
                                    </div>
                                </template>
                                <template v-else-if="i > item.start">
                                    <div :key="i" class="block">
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
                                    <div :key="i" :class="'vline color'+i"></div>
                                </template>
                                <template v-else-if="i === item.merge">
                                    <div :key="i" class="block">
                                        <div :class="'vline vl-t color'+i"></div>
                                        <div :class="'vline vl-b color'+i"></div>
                                        <div :class="'hline hl-r color'+item.line"></div>
                                        <div :class="'bullet b-s color'+item.line"></div>
                                    </div>
                                </template>
                                <template v-else-if="i > item.merge">
                                    <div :key="i" :class="'block block-mobile color'+item.line">
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
    </div>
</template>

<script>
export default {
    name: "TimelineGit",
    computed: {
        gitItems() {
            return [
                {
                    id: 17,
                    line: 3
                }, {
                    id: 16,
                    line: 4,
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 15,
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.boldRole'),
                    desc: this.$t('timeline.boldDescription')
                }, {
                    id: 14,
                    line: 4,
                    tag: "Feb 2020",
                    style: "start",
                    start: 3,
                    spacing: 0,
                    msg: this.$t('timeline.newInternshipBranch')
                }, {
                    id: 13,
                    line: 3,
                    style: "commit",
                    spacing: 1,
                    msg: this.$t('timeline.hvaRole'),
                    desc: this.$t('timeline.hvaDescription')
                }, {
                    id: 12,
                    line: 3,
                    tag: "Sep 2018",
                    style: "start",
                    start: 1,
                    spacing: 1,
                    msg: this.$t('timeline.newStudyBranch')
                }, {
                    id: 11,
                    line: 3,
                    style: "merge",
                    merge: 1,
                    spacing: 1,
                    msg: this.$t('timeline.mergeStudy')
                }, {
                    id: 10,
                    line: 4,
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 9,
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.dgdRole'),
                    desc: this.$t('timeline.dgdDescription')
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
                    style: "merge",
                    merge: 3,
                    spacing: 0,
                    msg: this.$t('timeline.mergeInternship')
                }, {
                    id: 6,
                    line: 4,
                    style: "commit",
                    spacing: 0,
                    msg: this.$t('timeline.kkRole'),
                    desc: this.$t('timeline.kkDescription')
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
                    msg: this.$t('timeline.regioRole'),
                    desc: this.$t('timeline.regioDescription')
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
                    msg: this.$t('timeline.deugdRole'),
                    desc: this.$t('timeline.deugdDescription')
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
@import "src/styles/variables";

$color1: $brilliant-red;
$color2: $brilliant-blue;
$color3: $brilliant-green;
$color4: $brilliant-orange;
$transparent: rgba(0, 0, 0, 0);
$hover-color: rgba(white, .1);

#timelineGit {
    display: none;

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

            .vline, .bottomcornerline, .topcornerline{
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
                    background-color: rgba($color1, 0.5);
                    border: solid 1px $color1;
                }

                &.color2 {
                    background-color: rgba($color2, 0.5);
                    border: solid 1px rgba($color2, 1);
                }

                &.color3 {
                    background-color: rgba($color3, 0.5);
                    border: solid 1px rgba($color3, 1);
                }

                &.color4 {
                    background-color: rgba($color4, 0.5);
                    border: solid 1px rgba($color4, 1);
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
                    background-color: $color1;
                    border-color: $color1;
                }

                &.color2 {
                    background-color: $color2;
                    border-color: $color2;
                }

                &.color3 {
                    background-color: $color3;
                    border-color: $color3;
                }

                &.color4 {
                    background-color: $color4;
                    border-color: $color4;
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
                    border-color: $color1;
                }

                &.color2 {
                    border-color: $color2;
                }

                &.color3 {
                    border-color: $color3;
                }

                &.color4 {
                    border-color: $color4;
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
                    border-color: $color1;
                    background: linear-gradient(
                            to right,
                            $transparent 0%,
                            rgba($color1, 0.2) 50%,
                            rgba($color1, 0.5) 100%
                    );
                }

                &.color2 > div:first-child {
                    border-color: $color2;
                    background: linear-gradient(
                            to right,
                            $transparent 0%,
                            rgba($color2, 0.2) 50%,
                            rgba($color2, 0.5) 100%
                    );
                }

                &.color3 > div:first-child {
                    border-color: $color3;
                    background: linear-gradient(
                            to right,
                            $transparent 0%,
                            rgba($color3, 0.2) 50%,
                            rgba($color3, 0.5) 100%
                    );
                }

                &.color4 > div:first-child {
                    border-color: $color4;
                    background: linear-gradient(
                            to right,
                            $transparent 0%,
                            rgba($color4, 0.2) 50%,
                            rgba($color4, 0.5) 100%
                    );
                }
            }
        }
    }

    @media (max-width: $mq-m) {
        #git {
            font-size: 14px;

            .row {
                .spacer-1 {
                    margin-left: 79px;
                }

                .vline {
                    position: absolute;
                }

                .bottomcornerline, .topcornerline, .block-mobile:not(.color2) {
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

                .block:not(:nth-of-type(3)) .hline.color4:not(:first-of-type) {
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

.programmer #timelineGit {
    display: flex;
}
</style>
