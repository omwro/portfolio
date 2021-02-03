<template>
    <div id="timeline" class="section">
        <h1>Timeline</h1>
        <div class="content">
            <div id="git">
                <div class="row" v-for="item in gitItems" :key="item.id">
                    <template v-if="item.tag">
                        <div :class="'tag color'+item.line">{{item.tag}}</div>
                        <div :class="'hline hl-h color'+item.line"></div>
                    </template>
                    <template v-else>
                        <div class="spacer-1"></div>
                    </template>

                    <template v-for="i in item.line">
                        <template v-if="i === item.line">
                            <template v-if="item.style === 'commit'">
                                <div :class="'bullet b-img color'+item.line" :key="i">
                                    <img v-lazy="profile" alt="profile picture"/>
                                </div>
                            </template>
                            <template v-else-if="item.style === 'start'">
                                <div :class="'bottomcornerline color'+item.line" :key="i"></div>
                            </template>
                            <template v-else-if="item.style === 'merge'">
                                <div :class="'topcornerline color'+item.line" :key="i"></div>
                            </template>
                            <template v-else>
                                <div :class="'vline color'+i" :key="i"></div>
                            </template>
                        </template>
                        <template v-else>
                            <template v-if="item.style === 'start'">
                                <template v-if="i < item.start">
                                    <div class="block" :key="i">
                                        <div :class="'vline color'+i"></div>
                                        <div :class="'hline hl-l hl-h color'+item.line"></div>
                                        <div :class="'hline hl-r hl-h color'+item.line"></div>
                                    </div>
                                </template>
                                <template v-else-if="i === item.start">
                                    <div class="block" :key="i">
                                        <div :class="'vline color'+i"></div>
                                        <div :class="'hline hl-l hl-h color'+item.line"></div>
                                        <div :class="'hline hl-r color'+item.line"></div>
                                        <div :class="'bullet b-s color'+item.line"></div>
                                    </div>
                                </template>
                                <template v-else-if="i > item.start">
                                    <div class="block" :key="i">
                                        <div :class="'vline color'+i"></div>
                                        <div :class="'hline color'+item.line"></div>
                                        <div :class="'hline color'+item.line"></div>
                                    </div>
                                </template>
                            </template>
                            <template v-else-if="item.style === 'commit'">
                                <div :class="'vline color'+i" :key="i"></div>
                            </template>
                            <template v-else-if="item.style === 'merge'">
                                <template v-if="i < item.merge">
                                    <div :class="'vline color'+i" :key="i"></div>
                                </template>
                                <template v-else-if="i === item.merge">
                                    <div class="block" :key="i">
                                        <div :class="'vline color'+i"></div>
                                        <div :class="'hline hl-r color'+item.line"></div>
                                        <div :class="'bullet b-s color'+item.line"></div>
                                    </div>
                                </template>
                                <template v-else-if="i > item.merge">
                                    <div class="block" :key="i">
                                        <div :class="'vline color'+i"></div>
                                        <div :class="'hline color'+item.line"></div>
                                        <div :class="'hline color'+item.line"></div>
                                    </div>
                                </template>
                            </template>
                            <template v-else>
                                <div :class="'vline color'+i" :key="i"></div>
                            </template>
                        </template>
                    </template>

                    <template v-if="item.msg">
                        <div :class="'commit c-'+item.spacing+' color'+item.line">
                            <div></div>
                            <div>{{item.msg}}</div>
                        </div>
                    </template>
                </div>
            </div>

            <div id="timeline-table">
                <div class="event" data-date="Feb 2020">
                    <h3>Intern Magento Developer</h3>
                    <p>
                        Internship at Bold Commerce in Amsterdam an Id focused on improving frontend and
                        backend development while also helping in the Support team. Working with sprints
                        and Agile scrum while learning Magento 2, Laravel, SASS, Knockout.js and Vue.js.
                    </p>
                </div>
                <div class="event" data-date="Sep 2018">
                    <h3>Software Engineering</h3>
                    <p>
                        Following the 4 year plan study Software Engineering at Amsterdam University of
                        Applied Sciences. My goal is to improve skills in programming and business while
                        expanding my network and keep on going with my hobby projects. Learned the
                        languages Java, NoSQL, Angular and worked with Android Development.
                    </p>
                </div>
                <div class="event" data-date="Feb 2018">
                    <h3>Intern Frontend Developer</h3>
                    <p>
                        Graduation internship at DiGidot, subsidiary of InventDesign where I focused on
                        improving frontend skills by creating a web dashboard for the installations of
                        Digidot C4's. Independently designed and developed the dashboard in HTML, CSS,
                        Javascript, AJAX and API's
                    </p>
                </div>
                <div class="event" data-date="Sep 2016">
                    <h3>Intern Game Developer</h3>
                    <p>
                        Internship at Kenneth&Koh in Aalsmeer and focused on working within a company
                        setting and improve my programming skills by creating a mobile game in Unity in C#
                        and helped in the Testers team.
                    </p>
                </div>
                <div class="event" data-date="Sep 2015">
                    <h3>Application Developer</h3>
                    <p>
                        Following the 3 year plan study Application Development at Regio College Zaandam.
                        My goal is to get started with programming and maintain the leadership role in group
                        projects for a dictatorship. Learned the languages HTML5, CSS3, JavaScript, C#, PHP,
                        MySQL and ASP.NET.
                    </p>
                </div>
                <div class="event" data-date="Jan 2015">
                    <h3>Cashier</h3>
                    <p>
                        Working as a cashier at Deugd Erdem in Amsterdam with a 0 hour contract to
                        improve my communication skills with clients, while earning some pocket money.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timeline",
        data() {
            return {
                profile: require(`../assets/selfies/profile.png`),
                gitItems: [
                    {
                        id: 17,
                        line: 3
                    }, {
                        id: 16,
                        line: 4,
                        style: "merge",
                        merge: 3,
                        spacing: 0,
                        msg: "Merge Internship"
                    }, {
                        id: 15,
                        line: 4,
                        style: "commit",
                        spacing: 0,
                        msg: "Intern Magento Developer"
                    }, {
                        id: 14,
                        line: 4,
                        tag: "Feb 2020",
                        style: "start",
                        start: 3,
                        spacing: 0,
                        msg: "New Internship Branch"
                    }, {
                        id: 13,
                        line: 3,
                        style: "commit",
                        spacing: 1,
                        msg: "Software Engineering"
                    }, {
                        id: 12,
                        line: 3,
                        tag: "Sep 2018",
                        style: "start",
                        start: 1,
                        spacing: 1,
                        msg: "New Study Branch"
                    }, {
                        id: 11,
                        line: 3,
                        style: "merge",
                        merge: 1,
                        spacing: 1,
                        msg: "Merge Study"
                    }, {
                        id: 10,
                        line: 4,
                        style: "merge",
                        merge: 3,
                        spacing: 0,
                        msg: "Merge Internship"
                    }, {
                        id: 9,
                        line: 4,
                        style: "commit",
                        spacing: 0,
                        msg: "Intern Frontend Developer"
                    }, {
                        id: 8,
                        line: 4,
                        tag: "Feb 2018",
                        style: "start",
                        start: 3,
                        spacing: 0,
                        msg: "New Internship Branch"
                    }, {
                        id: 7,
                        line: 4,
                        style: "merge",
                        merge: 3,
                        spacing: 0,
                        msg: "Merge Internship"
                    }, {
                        id: 6,
                        line: 4,
                        style: "commit",
                        spacing: 0,
                        msg: "Intern Game Developer"
                    }, {
                        id: 5,
                        line: 4,
                        tag: "Sep 2016",
                        style: "start",
                        start: 3,
                        spacing: 0,
                        msg: "New Internship Branch"
                    },
                    {
                        id: 4,
                        line: 3,
                        style: "commit",
                        spacing: 1,
                        msg: "Application Development"
                    },
                    {
                        id: 3,
                        line: 3,
                        tag: "Sep 2015",
                        style: "start",
                        start: 1,
                        spacing: 1,
                        msg: "New Study Branch"
                    },
                    {
                        id: 2,
                        line: 2,
                        style: "commit",
                        spacing: 2,
                        msg: "Cashier"
                    },
                    {
                        id: 1,
                        line: 2,
                        tag: "Jan 2015",
                        style: "start",
                        start: 1,
                        spacing: 2,
                        msg: "New Work Branch"
                    },
                    {
                        id: 0,
                        line: 1,
                        style: "commit",
                        spacing: 3,
                        msg: "Initial Commit"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    $color1: $brilliant-red;
    $color2: $brilliant-blue;
    $color3: $brilliant-green;
    $color4: $brilliant-orange;
    $transparent: rgba(0, 0, 0, 0);
    $hover-color: rgba(white, .1);

    #timeline {
        background-color: $light0;

        #timeline-table {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;

            .event {
                display: flex;
                flex-direction: column;
                border: dashed 1px black;
                border-right: solid 1px black;
                border-left: solid 3px $brilliant_red;
                padding: 10px;

                &:first-child {
                    border-top: solid 1px black;
                }

                &:last-child {
                    border-bottom: solid 1px black;
                }

                &::before {
                    content: attr(data-date);
                }

                @media all and (min-width: 768px) {
                    max-width: 900px;
                    margin-left: 100px;

                    &::before {
                        position: relative;
                        left: -100px;
                        top: 19px;
                        height: 0;
                    }

                    &::after {
                        position: absolute;
                        height: 8px;
                        width: 8px;
                        border: solid 3px $brilliant_red;
                        border-radius: 50%;
                        content: "";
                        margin-left: -19px;
                        margin-top: 19px;
                        background-color: $brilliant_red;
                    }
                }
            }
        }

        #git {
            display: none;
            flex-direction: column;
            height: 100%;
            font-size: 16px;
            margin: 0 8px;

            .row {
                display: flex;
                flex-direction: row;
                height: 30px;

                &:hover {
                    background-color: $hover-color;
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
                    height: 30px;
                    width: 30px;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;

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

                        img {
                            width: 24px;
                            height: 24px;
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
                    height: 30px;
                    margin-right: 13px;
                    border-right: 4px solid;
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
                    height: 30px;
                    align-self: center;

                    > div:first-child {
                        width: 50px;
                        border-right: 3px solid;
                        margin: 3px 10px 3px 0;
                    }

                    > div:last-child {
                        align-self: center;
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

        @media (max-width: $breakpoint-m) {
            #git {
                font-size: 14px;
                min-width: 386px;

                .row {
                    .spacer-1 {
                        margin-left: 79px;
                    }

                    .vline, .bottomcornerline, .topcornerline, .commit.c-0, .commit.c-1, .commit.c-2 {
                        &.color2 {
                            position: relative;
                            left: -30px;
                        }

                        &.color3 {
                            position: relative;
                            left: -60px;
                        }

                        &.color4 {
                            position: relative;
                            left: -90px;
                        }

                        border-radius: 0;
                        border-top: 0;
                        border-bottom: 0;
                    }

                    .topcornerline.color4 {
                        top: 5px;
                    }

                    .hline.hl-h:not(.hl-r):not(.hl-l) {
                        width: 5px;
                    }

                    .hline.hl-r, .hline:not(.hl-h) {
                        display: none;
                    }

                    .block:not(:nth-of-type(3)) .hline.color4:not(:first-of-type){
                        display: none;
                    }

                    .tag {
                        width: 62px;
                    }


                    .bullet {
                        &.b-img {
                            z-index: 5;
                            &.color2 {
                                left: -30px;
                                position: relative;
                            }

                            &.color3 {
                                left: -60px;
                                position: relative;
                            }

                            &.color4 {
                                left: -90px;
                                position: relative;
                            }
                        }

                        &.b-s {
                            z-index: 4;
                            &.color4 {
                                left: -60px;
                                top: -30px;
                            }
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

    .dark #timeline {
        background-color: $dark2;
        color: $light0;

        #timeline-table .event {
            border-top-color: $light0;
            border-right-color: $light0;
            border-bottom-color: $light0;
        }
    }

    .programmer #timeline {
        #git {
            display: flex;
        }

        #timeline-table {
            display: none;
        }
    }
</style>
