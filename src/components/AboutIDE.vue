<template>
    <div id="aboutIde" class="section">
        <h1>{{ $t('about.title') }}</h1>
        <div class="content">
            <div class="tabs">
                <div class="tab"
                     :class="activeTab === 'ts' ? 'active' : ''"
                     @click="onTab('ts')">
                    Introduction.ts
                </div>
                <div class="tab"
                     :class="activeTab === 'java' ? 'active' : ''"
                     @click="onTab('java')">
                    Skills.java
                </div>
                <div class="tab"
                     :class="activeTab === 'php' ? 'active' : ''"
                     @click="onTab('php')">
                    Projects.php
                </div>
                <div class="tab"
                     :class="activeTab === 'py' ? 'active' : ''"
                     @click="onTab('py')">
                    Companies.py
                </div>
            </div>
            <div class="ide" v-if="activeTab === 'ts'">
                <IDE filename="Introduction.ts"/>
            </div>
            <div class="ide" v-if="activeTab === 'java'">
<!--                <IDE filename="Skills.java"/>-->
                <div class="row" data-line="1">
                    <span class="orange">public class</span> Skills {
                </div>
                <div class="row" data-line="2"></div>
                <div class="row" data-line="3">
                    <div class="spacing">
                        <span class="orange">public static</span>
                        List&lt;Language&gt;
                        <span class="yellow">getLanguages</span>() {
                    </div>
                </div>
                <div class="row" data-line="4">
                    <div class="spacing2">
                        <span class="orange">return</span> Arrays.asList(
                    </div>
                </div>
                <template v-for="(lan, i) in languages">
                    <div class="row" :data-line="i+languageLine" :key="lan">
                        <div class="spacing3">
                            <span class="orange">new</span>
                            Language(
                            <span class="green">"{{lan[0]}}"</span>,
                            <span class="blue">{{lan[1]}}</span>),
                        </div>
                    </div>
                </template>
                <div class="row" data-line="16">
                    <div class="spacing2">)</div>
                </div>
                <div class="row" data-line="17">
                    <div class="spacing">}</div>
                </div>
                <div class="row" data-line="18"></div>
                <div class="row" data-line="19">
                    <div class="spacing">
                        <span class="orange">public static</span>
                        List&lt;Framework&gt;
                        <span class="yellow">getFrameworks</span>() {
                    </div>
                </div>
                <div class="row" data-line="20">
                    <div class="spacing2">
                        <span class="orange">return</span> Arrays.asList(
                    </div>
                </div>
                <template v-for="(fra, i) in frameworks">
                    <div class="row" :data-line="i+frameworkLine" :key="fra">
                        <div class="spacing3">
                            <span class="orange">new</span>
                            Framework(
                            <span class="green">"{{fra[0]}}"</span>,
                            <span class="blue">{{fra[1]}}</span>),
                        </div>
                    </div>
                </template>
                <div class="row" data-line="35">
                    <div class="spacing2">)</div>
                </div>
                <div class="row" data-line="36">
                    <div class="spacing">}</div>
                </div>
                <div class="row" data-line="37"></div>
                <div class="row" data-line="38">
                    <div class="spacing">
                        <span class="orange">public static</span>
                        List&lt;Environment&gt;
                        <span class="yellow">getEnvironments</span>() {
                    </div>
                </div>
                <div class="row" data-line="39">
                    <div class="spacing2">
                        <span class="orange">return</span> Arrays.asList(
                    </div>
                </div>
                <template v-for="(env, i) in environments">
                    <div class="row" :data-line="i+environmentLine" :key="env">
                        <div class="spacing3">
                            <span class="orange">new</span>
                            Environment(
                            <span class="green">"{{env[0]}}"</span>,
                            <span class="blue">{{env[1]}}</span>),
                        </div>
                    </div>
                </template>
                <div class="row" data-line="48">
                    <div class="spacing2">)</div>
                </div>
                <div class="row" data-line="49">
                    <div class="spacing">}</div>
                </div>
                <div class="row" data-line="50"></div>
                <div class="row" data-line="51">
                    <div class="spacing">
                        <span class="orange">public static</span>
                        List&lt;Project&gt;
                        <span class="yellow">getProjects</span>() {
                    </div>
                </div>
                <div class="row" data-line="52">
                    <div class="spacing2">
                        <span class="orange">return</span> Arrays.asList(
                    </div>
                </div>
                <template v-for="(pro, i) in projects">
                    <div class="row" :data-line="i+projectLine" :key="pro">
                        <div class="spacing3">
                            <span class="orange">new</span>
                            Project(
                            <span class="green">"{{pro[0]}}"</span>,
                            <span class="blue">{{pro[1]}}</span>),
                        </div>
                    </div>
                </template>
                <div class="row" data-line="62">
                    <div class="spacing2">)</div>
                </div>
                <div class="row" data-line="63">
                    <div class="spacing">}</div>
                </div>
                <div class="row" data-line="37"></div>
                <div class="row" data-line="38">
                    <div class="spacing">
                        <span class="orange">public static</span>
                        List&lt;Competency&gt;
                        <span class="yellow">getCompetencies</span>() {
                    </div>
                </div>
                <div class="row" data-line="39">
                    <div class="spacing2">
                        <span class="orange">return</span> Arrays.asList(
                    </div>
                </div>
                <template v-for="(com, i) in competencies">
                    <div class="row" :data-line="i+competencyLine" :key="com">
                        <div class="spacing3">
                            <span class="orange">new</span>
                            Competency(
                            <span class="green">"{{com[0]}}"</span>,
                            <span class="blue">{{com[1]}}</span>),
                        </div>
                    </div>
                </template>
                <div class="row" data-line="48">
                    <div class="spacing2">)</div>
                </div>
                <div class="row" data-line="49">
                    <div class="spacing">}</div>
                </div>
                <div class="row" data-line="">}</div>
            </div>
            <!------------------------------------------------------>
            <!------------------------------------------------------>
            <!------------------------------------------------------>
            <div class="ide" v-if="activeTab === 'php'">
            </div>
            <!------------------------------------------------------>
            <!------------------------------------------------------>
            <!------------------------------------------------------>
            <div class="ide" v-if="activeTab === 'py'">
            </div>
        </div>
    </div>
</template>

<script>
import IDE from "@/components/IDE";
export default {
    name: "AboutIDE",
    components: {IDE},
    data: () => ({
        activeTab: 'ts',
        languageLine: 5,
        languages: [
            ["HTML5", 4.5],
            ["JavaScript", 4.5],
            ["PHP", 4],
            ["Java", 4],
            ["CSS3", 4],
            ["TypeScript", 3],
            ["Kotlin", 3],
            ["JSON", 3],
            ["XML", 2],
            ["Node.js", 2],
            ["C#", 1]
        ],
        frameworkLine: 21,
        frameworks: [
            ["Vue.js 2", 4],
            ["jQuery", 4],
            ["Angular 8", 3],
            ["React", 3],
            ["Spring Boot", 3],
            ["Sass/Scss", 3],
            ["Magento 2", 2],
            ["Larevel", 2],
            ["Raspberry Pi", 2],
            ["Apache 2", 2],
            ["MongoDB", 2],
            ["Bootstrap", 2],
            ["Knockout.js", 1],
            ["ASP.net", 1]
        ],
        environmentLine: 40,
        environments: [
            ["Windows", 4],
            ["MySql", 4],
            ["Git", 3],
            ["MacOS", 2],
            ["Raspberry Pi", 2],
            ["Apache 2", 2],
            ["MongoDB", 2],
            ["Firebase", 2],
        ],
        projectLine: 53,
        projects: [
            ["Website Builder", 4.5],
            ["Custom Desktop Pc Builder", 3],
            ["Android App", 2],
            ["Web API", 2],
            ["Web Scraper", 2],
            ["Minecraft Plugin", 2],
            ["Discord Bot", 1],
            ["Unity Game", 1],
            ["E-Commerce Webshop", 1],
        ],
        competencyLine: 0,
        competencies: [
            ["Hard worker", 4.5],
            ["Team player", 4],
            ["Problem solving", 4],
            ["Creativity", 4],
        ]
    }),
    methods: {
        openSelfie() {
            window.open(window.location.origin + '/img/selfie/selfie.webp')
        },
        downloadCV() {
            let link = document.createElement('a');
            link.href = window.location.origin + "/doc/OmerErdem_Resume.pdf";
            link.download = 'OmerErdem_Resume.pdf';
            link.dispatchEvent(new MouseEvent('click'));
        },
        onTab(tab) {
            this.activeTab = tab
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#aboutIde {
    display: flex;
    background-color: $light0;

    .content {
        color: $light2;
        align-self: center;

        .tabs {
            max-width: 1016px;
            margin: 10px 10px 0 10px;
            background-color: $dark2;

            .tab {
                padding: 8px;
                display: inline-block;
                cursor: pointer;

                &.active {
                    background-color: $dark4;
                    border-bottom: solid 4px $dark5;
                }
            }
        }

        .ide {
            background-color: $dark3;
            font-size: 14px;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            padding: 8px;
            max-width: 1000px;
            margin: 0 10px 10px 10px;

            .row {
                flex-direction: row;
                flex-wrap: nowrap;
                min-height: 28px;

                .spacing {
                    margin-left: 16px;
                    display: initial;
                }

                .spacing2 {
                    margin-left: 32px;
                    display: initial;
                }

                .spacing3 {
                    margin-left: 48px;
                    display: initial;
                }

                &:empty {
                    height: 20px;
                }

                span {
                    &.space-left {
                        margin-left: 4px;
                    }

                    &.space-right {
                        margin-right: 4px;
                    }

                    &.orange {
                        color: #cc7832;
                    }

                    &.yellow {
                        color: #ffc66d;
                    }

                    &.purple {
                        color: #9876aa;
                    }

                    &.blue {
                        color: #6897bb;
                    }

                    &.green {
                        color: #6a8759;
                    }

                    &.underline {
                        text-decoration-line: underline;
                    }

                    &.pointer {
                        cursor: pointer;
                    }
                }

                &:before {
                    content: attr(data-line);
                    color: gray;
                    display: inline-block;
                    width: 32px;
                }
            }

            @media (min-width: $mq-sm) {
                font-size: 16px;
            }

            @media (min-width: $mq-m) {
                font-size: 18px;
            }
        }

        @media (min-width: $mq-sm) {
            margin: 20px 50px;
            font-size: 16px;
        }
        @media (min-width: $mq-m) {
            margin: 20px 100px;
            font-size: 18px;
        }
    }
}

.dark #aboutIde {
    background-color: $dark2;
}
</style>
