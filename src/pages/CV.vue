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
                <div>
                    <span class="bold">Tel:</span>
                    <span class="color-grey">{{ $t('general.tel') }}</span>
                </div>
            </div>
            <div class="aboutme">
                <div class="title bold">ABOUT ME</div>
                <div class="desc color-grey">
                    {{ $t('about.desc3', 'en') }}
                    {{ $t('about.desc4', 'en') }}
                    {{ $t('about.desc5', 'en') }}
                    {{ $t('about.desc6', 'en') }}
                    {{ $t('about.desc7', 'en') }}
                </div>
            </div>
        </div>
        <div class="container">
            <div class="container-title capital">Education</div>
            <div class="content">
                <template v-for="edu in getEducation()">
                    <div class="content-card" :key="edu.role" v-if="!edu.hidecv">
                        <div class="timeperiod">
                            {{ edu.startdate }} - {{ edu.enddate !== null ? edu.enddate : "Present" }}
                        </div>
                        <div class="title">{{ $t(edu.role, 'en') }}</div>
                        <div class="location">{{ edu.company }}</div>
                        <div class="desc">{{ $t(edu.desc, 'en') }}</div>
                    </div>
                </template>
            </div>
        </div>
        <div class="container">
            <div class="container-title capital">Experience</div>
            <div class="content">
                <div class="content-card" v-for="xp in getExperience()" :key="xp.role">
                    <div class="timeperiod">{{ xp.startdate }} - {{
                            xp.enddate !== null ? xp.enddate : "Present"
                        }}
                    </div>
                    <div class="title">{{ $t(xp.role, 'en') }}</div>
                    <div class="location">{{ xp.company }}</div>
                    <div class="desc">{{ $t(xp.desc, 'en') }}</div>
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
                        <div>{{ getExperienceString(cv) }}</div>
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
            if (years) return years + " years"
            return totalxp + " months"
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
    background: white;
    display: flex;
    flex-direction: column;
    font-family: Arial, serif;
    font-size: 12px;
    padding: 16px;
    color: $color-light;

    .capital {
        text-transform: uppercase;
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
        margin-bottom: 32px;

        .profile-img {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: 200px;
            height: 200px;
            background: rgba(black, 0.1);
            border-radius: 200px;
            margin-right: 16px;

            img {
                width: 190px;
                height: 190px;
                border-radius: 190px;
                background-color: white;
            }
        }

        .information {
            padding-right: 16px;
            border-right: solid 1px rgba(black, 0.1);
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
        background: rgba(black, 0.1);
        margin-bottom: 32px;

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
            background: white;
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
                    background: rgba(black, 0.1);
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
                    line-height: 1.4;
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
                    filter: invert(1);
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
        margin: 0 auto;

        img {
            width: 200px;
            height: 200px;
        }

        div {
            padding-top: 4px;
        }
    }
}
</style>
