<template>
    <div id="cv">
        <div class="header">
            <div class="profile-img">
                <img alt="profile picture" src="../../public/img/selfie/selfie-squared.webp">
            </div>
            <div class="information">
                <div class="name color-red capital">{{ $t('general.firstname') }}</div>
                <div class="name color-blue capital">{{ $t('general.lastname') }}</div>
                <div class="study bold capital">{{ $t('general.study') }}</div>
                <div>
                    <span class="bold">Age:</span>
                    <span class="color-grey">{{ $t('general.age') }}</span>
                </div>
                <div>
                    <span class="bold">Area:</span>
                    <span class="color-grey">{{ $t('general.area') }}</span>
                </div>
                <div>
                    <span class="bold">Email:</span>
                    <span class="color-grey">{{ $t('general.email') }}</span>
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
        <div class="container">
            <div class="container-title capital">Education</div>
            <div class="content">
                <div class="content-card" v-for="edu in getEducation()" :key="edu.role">
                    <div class="timeperiod">{{ edu.startdate }} - {{ edu.enddate }}</div>
                    <div class="title">{{ edu.role }}</div>
                    <div class="location">{{ edu.company }}</div>
                    <div class="desc">{{ edu.desc }}</div>
                    <div class="stack-container left">
                        <img v-for="s in edu.stack"
                             :key="s"
                             :src="getSkillimg(s)"
                             :alt="s"
                             class="stack"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="container-title capital">Experience</div>
            <div class="content">
                <div class="content-card" v-for="xp in getExperience()" :key="xp.role">
                    <div class="timeperiod">{{ xp.startdate }} - {{ xp.enddate }}</div>
                    <div class="title">{{ xp.role }}</div>
                    <div class="location">{{ xp.company }}</div>
                    <div class="desc">{{ xp.desc }}</div>
                    <div class="stack-container left">
                        <img v-for="s in xp.stack"
                             :key="s"
                             :src="getSkillimg(s)"
                             :alt="s"
                             class="stack"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-half">
            <div class="container half">
                <div class="container-title capital">Skills</div>
                <div class="content">
                    <div class="skill" v-for="cv in getCVSkills()" :key="cv.name">
                        <div class="displayname">{{ cv.display_name }}</div>
                        <img :src="cv.img" :alt="cv.name"/>
                        <div>{{getExperienceString(cv)}}</div>
                    </div>
                </div>
            </div>
            <div class="qrcode">
                <img src="../../public/img/company/qr.png" alt="qrcode"/>
                <div>Learn more about me at: https://www.omererdem.nl</div>
            </div>
        </div>
    </div>
</template>

<script>
import timeline from "../../public/data/timeline.json"
import skills from "../../public/data/skills.json"

export default {
    name: "CV",
    methods: {
        getEducation() {
            return timeline.filter(x => x.type === "Study")
        },
        getExperience() {
            return timeline.filter(x => x.type === "Internship")
        },
        getSkillimg(name) {
            return skills.find(x => x.name === name).img
        },
        getCVSkills() {
            return skills.filter(x => x.show_cv === true)
        },
        getCompetencies() {
            return skills.filter(x => x.type === "Competencies")
        },
        getExperienceString(skill) {
            const totalxp = skill.xp
                .map(x => x.months)
                .reduce((prevValue, currValue) => prevValue + currValue)
            let years = Math.floor(totalxp / 12)
            if (years) return years+" years"
            return totalxp+" months"
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
    background: $background-dark repeat;
    display: flex;
    flex-direction: column;
    font-family: Arial, serif;
    font-size: 12px;
    padding: 16px;

    .capital {
        text-transform: uppercase;
    }

    .color-red {
        color: rgba($accent, 0.9);
    }

    .color-blue {
        color: rgba($accent2, 0.9);
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
        margin-bottom: 16px;

        .profile-img {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: 200px;
            height: 200px;
            background: linear-gradient(90deg, rgba($accent, 0.9) 0%, rgba($accent2, 0.9) 100%);
            border-radius: 200px;
            margin-right: 16px;

            img {
                width: 190px;
                height: 190px;
                border-radius: 190px;
                background-color: $background-dark;
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

    .container {
        padding: 5px 10px 10px;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba($accent, 0.4) 0%, rgba($accent2, 0.4) 100%);
        color: $light2;
        margin-bottom: 16px;

        &.half {
            width: 100%;
        }

        .container-title {
            font-size: 22px;
            font-weight: bolder;
            text-align: center;
            padding-bottom: 5px;
        }

        .content {
            background: $background-dark;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 10px;
            border-radius: 10px;
            justify-content: space-between;

            .content-card {
                width: 48%;
                margin-bottom: 4px;

                > div {
                    margin-bottom: 4px;
                }

                .timeperiod {
                    display: inline-flex;
                    font-size: 12px;
                    font-weight: bolder;
                    background: linear-gradient(90deg, rgba($accent, 0.6) 0%, rgba($accent2, 0.6) 100%);
                    padding: 6px;
                    border-radius: 25px;
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

                .stack-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    &.left {
                        justify-content: left;
                    }

                    &.right {
                        justify-content: right;
                    }

                    .stack {
                        height: 24px;
                        width: 24px;
                        margin: 0 4px 4px;
                    }
                }
            }

            .skill {
                width: 50%;
                display: flex;
                flex-direction: row;
                justify-content: center;

                div {
                    font-size: 16px;
                    align-self: center;
                    width: 75px;
                }

                .displayname {
                    text-align: right;
                }

                img {
                    width: 32px;
                    height: 32px;
                    margin: 5px;
                }
            }
        }
    }

    .container-half {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .qrcode {
        text-align: center;
        font-size: 14px;
        margin: auto ;

        img {
            width: 200px;
            height: 200px;
        }

        div {
            color: $light2;
            padding-top: 4px;
        }
    }
}
</style>
