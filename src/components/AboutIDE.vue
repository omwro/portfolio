<template>
    <div id="aboutIde" class="section">
        <h1>Who am I ?</h1>
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
                        class="blue">920505600</span>
                    </div>
                    <div class="row spacing">
                        <span class="orange">this</span>.<span class="purple">residence</span> = <span class="orange">Pair</span>&lt;<span
                        class="orange">Latitude</span>, <span class="orange">Longitude</span>&gt;(<span class="blue">52.37319418639191</span>,
                        <span class="blue">4.891432372896032</span>)
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
                            <span class="purple">year &rarr; </span><span class="blue">3</span>
                        </div>
                        )
                    </div>
                    }
                </div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="orange">function</span> <span class="yellow">getProgrammingExperience</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> [
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"HTML5"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">5</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"JavaScript"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">5</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"PHP"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">4</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Java"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">4</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"CSS3"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">4</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"jQuery"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">4</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"MySQL"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">4</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Vue.js 2"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">4</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Angular 8"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"TypeScript"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Kotlin"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Spring Boot"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Sass/Scss"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Git"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"JSON"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"PC Building"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">3</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Android"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">2</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Node.js"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">2</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Magento 2"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">2</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Laravel"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">2</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Raspberry Pi"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">2</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Apache 2"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">2</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"C#"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">1</span>),
                        </div>
                        <div class="row spacing">
                            <span class="orange">XP</span>(<span class="purple">name &rarr; </span><span class="green">"Unity"</span>,
                            <span class="purple">stars &rarr; </span><span class="blue">1</span>)
                        </div>
                        ]
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
                    <span class="orange">function</span> <span class="yellow">getCompanies</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> [<span class="green">"Kenneth & Koh"</span>, <span
                        class="green">"DiGidot"</span>, <span class="green">"Corendon"</span>, <span class="green">"Amsta"</span>,
                        <span class="green">"Aquadis"</span>, <span class="green">"Bold Commerce"</span>]
                    </div>
                    }
                </div>
                <div class="row"></div>
                <div class="row spacing">
                    <span class="orange">function</span> <span class="yellow">getProjects</span>() {
                    <div class="row spacing">
                        <span class="orange">return</span> [<span
                        class="green">"Vue.js Portfolio website"</span>,<span
                        class="green">"Dating website for one-man travelers"</span>, <span class="green">"Pokemon Go for elderly"</span>,
                        <span class="green">"Pokemon Go for messaging"</span>, <span class="green">"Admin dashboard"</span>,
                        <span class="green">"Spotify app"</span>, <span class="green">"Roll-a-Ball game"</span>, <span
                        class="green">"Hardware installation panel"</span>]
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
    name: "AboutIDE"
}
</script>

<style scoped lang="scss">
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
                }
            }

            @media (min-width: $breakpoint-sm) {
                font-size: 16px;
            }

            @media (min-width: $breakpoint-m) {
                font-size: 18px;
            }
        }

        @media (min-width: $breakpoint-sm) {
            margin: 20px 50px;
            font-size: 16px;
        }
        @media (min-width: $breakpoint-m) {
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
