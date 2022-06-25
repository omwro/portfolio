<template>
    <div id="cv">
        <div class="header">
            <div class="profile-img">
                <img alt="profile picture" src="../../public/img/selfie/selfie-squared.webp">
            </div>
            <div class="information">
                <div class="name color-red capital">{{$t('general.firstname')}}</div>
                <div class="name color-blue capital">{{$t('general.lastname')}}</div>
                <div class="study bold capital">{{$t('general.study')}}</div>
                <div>
                    <span class="bold">Age:</span>
                    <span class="color-grey">{{$t('general.age')}}</span>
                </div>
                <div>
                    <span class="bold">Area:</span>
                    <span class="color-grey">{{$t('general.area')}}</span>
                </div>
                <div>
                    <span class="bold">Email:</span>
                    <span class="color-grey">{{$t('general.email')}}</span>
                </div>
            </div>
            <div class="aboutme">
                <div class="title bold">ABOUT ME</div>
                <div class="desc color-grey">
                    I am a hardworking web- and software developer who is every day in search for new projects
                    and challenges to improve my skills to become a Full Stack Developer. I am really
                    passionate in programming and would not mind to get my hands dirty again. I am eager to learn new
                    techniques and I am surely not afraid of hardware. I am someone who likes to make the world a better
                    place, even if it goes unnoticed.
                </div>
            </div>
        </div>
        <div class="timeline">
            <div class="experience">
                <div v-for="xp in getExperience()" :key="xp.role">
                    <div class="timeperiod">{{xp.startdate}} - {{xp.enddate}}</div>
                    <div class="title">{{xp.role}}</div>
                    <div class="location">{{xp.company}}</div>
                    <div class="desc">{{xp.desc}}</div>
                </div>
            </div>
            <div class="vertical_names">
                <div>
                    <div>EXPERIENCE</div>
                </div>
                <div>
                    <div>EDUCATION</div>
                    <div>WEBSITE</div>
                </div>
            </div>
            <div class="education">
                <div v-for="edu in getEducation()" :key="edu.role">
                    <div class="timeperiod">{{edu.startdate}} - {{edu.enddate}}</div>
                    <div class="title">{{edu.role}}</div>
                    <div class="location">{{edu.company}}</div>
                    <div class="desc">{{edu.desc}}</div>
                </div>
                <div class="qrcode">
                    <img alt="qrcode" src="../../public/img/company/qr.png">
                    <div>https://www.omererdem.nl</div>
                </div>
            </div>
        </div>
        <div class="skills">
            <div class="title">SKILLS</div>
            <div class="body">
                <div class="col">
                    <div>
                        <div>HTML5</div>
                        <img alt="html" src="../../public/img/language/html.png"/>
                        <stars stars="9"/>
                    </div>
                    <div>
                        <div>JAVASCRIPT</div>
                        <img alt="javascript" src="../../public/img/language/js.png"/>
                        <stars stars="9"/>
                    </div>
                    <div>
                        <div>PHP</div>
                        <img alt="php" src="../../public/img/language/php.png"/>
                        <stars stars="8"/>
                    </div>
                    <div>
                        <div>JAVA</div>
                        <img alt="java" src="../../public/img/language/java.png"/>
                        <stars stars="8"/>
                    </div>
                </div>
                <div class="col">
                    <div>
                        <div>CSS3</div>
                        <img alt="css3" src="../../public/img/language/css.png"/>
                        <stars stars="8"/>
                    </div>
                    <div>
                        <div>VUE.JS 2</div>
                        <img alt="vuejs" src="../../public/img/language/vue.png"/>
                        <stars stars="8"/>
                    </div>
                    <div>
                        <div>ANGULAR 8</div>
                        <img alt="angular" src="../../public/img/language/angular.png"/>
                        <stars stars="6"/>
                    </div>
                    <div>
                        <div>MYSQL</div>
                        <img alt="mysql" src="../../public/img/language/mysql.png"/>
                        <stars stars="6"/>
                    </div>
                </div>
                <div class="col">
                    <div>
                        <div>HARD WORKER</div>
                        <img alt="fist" src="../../public/img/language/fist.png"/>
                        <stars stars="9"/>
                    </div>
                    <div>
                        <div>TEAM PLAYER</div>
                        <img alt="team" src="../../public/img/language/team.png"/>
                        <stars stars="8"/>
                    </div>
                    <div>
                        <div>PROBLEM SOLVER</div>
                        <img alt="problem" src="../../public/img/language/problem.png"/>
                        <stars stars="8"/>
                    </div>
                    <div>
                        <div>CREATIVITY</div>
                        <img alt="creative" src="../../public/img/language/creative.png"/>
                        <stars stars="8"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import timeline from "../../public/data/timeline.json"
import Stars from "@/components/Stars";

export default {
    name: "CV",
    components: {Stars},
    methods: {
        getEducation() {
            return timeline.filter(x => x.type === "Study")
        },
        getExperience() {
            return timeline.filter(x => x.type === "Internship")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

@media print {
    body {
        width: 21cm;
        height: 29.7cm;
    }
}

html body #app #cv {
    width: 21cm !important;
    height: 30cm !important;
    background: $dark1 repeat;
    display: flex;
    flex-direction: column;
    font-family: Arial, serif;
    font-size: 12px;
    padding: 16px;

    .capital {
        text-transform: uppercase;
    }

    .color-red {
        color: rgba($brilliant-red, 0.9);
    }

    .color-blue {
        color: rgba($brilliant-blue, 0.9);
    }

    .color-grey {
        color: $light5;
    }

    .bold {
        font-weight: bold;
    }

    .bolder {
        font-weight: 900;
        font-size: 16px;
    }

    .header {
        display: flex;
        flex-direction: row;
        color: $light2;
        margin-bottom: 32px;

        .profile-img {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: 200px;
            height: 200px;
            background: linear-gradient(180deg, rgba($brilliant-red, 0.9) 0%, rgba($brilliant-blue, 0.9) 100%);
            border-radius: 200px;
            margin-right: 16px;

            img {
                width: 190px;
                height: 190px;
                border-radius: 190px;
            }
        }

        .information {
            padding-right: 16px;
            border-right: solid 1px $grey;
            margin-right: 16px;

            & > div:not(.name) {
                padding: 4px 0;

                .bold {
                    display: inline-block;
                    width: 40px;
                }
            }

            .name {
                font-size: 22px;
                font-weight: 900;
            }

            .study {
                font-size: 16px;
            }
        }

        .aboutme {
            width: 330px;

            .title {
                font-size: 20px;
                text-align: center;
                margin-bottom: 8px;
            }

            .desc {
                font-size: 14px;
                line-height: 1.35;
            }
        }
    }

    .timeline {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: $light2;
        width: calc(100% - 16px);
        padding: 8px;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba($brilliant-red, 0.4) 0%, rgba($brilliant-blue, 0.4) 100%);

        .experience, .education {
            width: calc(100% - 100px / 2);
        }

        .experience, .vertical_names, .education {
            display: flex;
            flex-direction: column;

            div > div {
                margin-bottom: 4px;
            }

            .timeperiod {
                display: inline-flex;
                font-size: 12px;
                font-weight: bolder;
                background: linear-gradient(90deg, rgba($brilliant-blue, 0.6) 0%, rgba($brilliant-red, 0.6) 100%);
                padding: 6px;
                border-radius: 25px;
                margin-top: 8px;
            }

            .title {
                font-size: 16px;
                font-weight: bold;
            }

            .location {
                font-size: 12px;
                font-weight: bold;
            }

            .desc {
                color: $light5;
                line-height: 1.4;
            }
        }

        .experience {
            text-align: right;
            margin-left: auto;

            .timeperiod {
                margin-left: auto;
            }
        }

        .vertical_names {
            flex-direction: row;

            > div {
                display: flex;
                justify-content: space-around;
                writing-mode: vertical-rl;
                text-orientation: mixed;
                font-weight: bolder;
                font-size: 22px;
                padding: 8px;
                text-align: center;
            }
        }

        .education {
            text-align: left;
            margin-right: auto;

            .timeperiod {
                margin-right: auto;
            }

            .qrcode {
                text-align: center;
                margin-top: 32px;
                font-size: 14px;

                img {
                    width: 200px;
                    height: 200px;
                }

                div {
                    padding-top: 8px;
                }
            }
        }
    }

    .skills {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: $light2;
        width: calc(100% - 16px);
        padding: 8px;
        border-radius: 10px;
        margin-top: 32px;
        background: linear-gradient(90deg, rgba($brilliant-red, 0.4) 0%, rgba($brilliant-blue, 0.4) 100%);

        .title {
            font-size: 22px;
            font-weight: bolder;
            text-align: center;
            width: 100%;
            margin-bottom: 8px;
        }

        .body {
            display: flex;
            flex-direction: row;
            font-size: 16px;
            justify-content: space-around;

            .col {
                display: flex;
                flex-direction: column;

                > div {
                    display: flex;
                    flex-direction: row;
                    text-align: right;
                    margin-left: auto;

                    > * {
                        padding: 4px;
                        align-self: center;
                    }
                }
            }

            img {
                width: 32px;
                height: 32px;
            }
        }
    }
}
</style>
