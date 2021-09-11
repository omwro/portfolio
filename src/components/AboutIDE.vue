<template>
    <div id="aboutIde" class="section">
        <h1>{{ $t('about.title') }}</h1>
        <div class="content">
            <div id="ide">
                <div class="row"><span class="orange space-right">Class</span>OmerErdem {</div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="yellow">constructor</span>() {
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">name</span> = <span class="green">"Omer Erdem"</span>
                    </div>
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">gender</span> = <span class="orange">Gender</span>.<span
                        class="purple">MALE</span>
                    </div>
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">birthdayTimestamp</span> = <span
                        class="blue">922968000</span>
                    </div>
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">residence</span> = <span class="orange">Pair</span>&lt;<span
                        class="orange">Latitude</span>, <span class="orange">Longitude</span>&gt;(<span class="blue">52.37319418639191</span>,
                        <span class="blue">4.891432372896032</span>)
                    </div>
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">image</span> = <span
                        class="blue underline pointer" @click="openSelfie">img/selfie/selfie.webp</span>
                    </div>
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">resume</span> = <span
                        class="blue underline pointer" @click="downloadCV">download</span>
                    </div>
                    }
                </div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="orange">function</span> <span class="yellow">getStudyInformation</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> <span class="orange">Study</span>(
                        <div class="row spacing">
                            <span class="purple">university &rarr; </span><span class="green">"Amsterdam University of Applied Sciences"</span>,
                        </div>
                        <div class="row spacing">
                            <span class="purple">study &rarr; </span><span class="green">"Software Engineering"</span>,
                        </div>
                        <div class="row spacing">
                            <span class="purple">year &rarr; </span><span class="blue">4</span>
                        </div>
                        )
                    </div>
                    }
                </div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="orange">function</span> <span class="yellow">getGoals</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> <span class="orange">Goals</span>(
                        <div class="row spacing">
                            <span class="purple">job &rarr; </span><span class="green">"Full Stack Developer"</span>,
                        </div>
                        <div class="row spacing">
                            <span class="purple">searchHistory &rarr; </span>[
                            <span class="green">"New fun projects"</span>,
                            <span class="green">"Challenges to improve my skills"</span>,
                            <span class="green">"New programming techniques"</span>
                            ],
                        </div>
                        <div class="row spacing">
                            <span class="purple">ultimateGoal &rarr; </span><span class="green">"Make the world a better place, even if it goes unnoticed."</span>
                        </div>
                        )
                    </div>
                    }
                </div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="orange">function</span> <span class="yellow">getPreferences</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> [<span class="green">"Windows"</span>, <span class="green">"Frontend"</span>,
                        <span class="green">"Dark mode"</span>, <span class="green">"Minimalistic"</span>]
                    </div>
                    }
                </div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="orange">function</span> <span class="yellow">getHobbies</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> [<span class="green">"Programming"</span>, <span
                        class="green">"Gaming"</span>, <span class="green">"Driving around"</span>, <span class="green">"Experimenting"</span>]
                    </div>
                    }
                </div>
                }
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutIDE",
    methods: {
        openSelfie() {
            window.open(window.location.origin+'/img/selfie/selfie.webp')
        },
        downloadCV () {
            let link = document.createElement('a');
            link.href = window.location.origin + "/doc/OmerErdem_Resume.pdf";
            link.download = 'OmerErdem_Resume.pdf';
            link.dispatchEvent(new MouseEvent('click'));
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#aboutIde {
    display: none;
    background-color: $light0;

    .content {
        > div {
            margin: 10px;
        }

        #ide {
            background-color: #2B2B2B;
            font-size: 14px;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            padding: 8px;
            max-width: 1000px;

            .row {
                flex-direction: row;
                flex-wrap: nowrap;

                &.spacing {
                    margin-left: 16px;
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
            flex-direction: row;
            font-size: 18px;
        }
    }
}

.dark #aboutIde {
    background-color: $dark2;
    color: $light0;
}

.programmer #aboutIde {
    display: flex;
}
</style>
