<template>
    <section id="aboutIde">
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
                <!--                <div class="tab"-->
                <!--                     :class="activeTab === 'php' ? 'active' : ''"-->
                <!--                     @click="onTab('php')">-->
                <!--                    Projects.php-->
                <!--                </div>-->
                <!--                <div class="tab"-->
                <!--                     :class="activeTab === 'py' ? 'active' : ''"-->
                <!--                     @click="onTab('py')">-->
                <!--                    Companies.py-->
                <!--                </div>-->
            </div>
            <div class="ide" :key="activeTab">
                <IDE filename="Introduction.ts" v-if="activeTab === 'ts'"/>
                <IDE filename="Skills.java" v-if="activeTab === 'java'"/>
            </div>
            <!--            <div class="ide" v-if="activeTab === 'java'">-->
            <!--                -->
            <!--            </div>-->
            <!--            <div class="ide" v-if="activeTab === 'php'">-->
            <!--            </div>-->
            <!--            <div class="ide" v-if="activeTab === 'py'">-->
            <!--            </div>-->
        </div>
    </section>
</template>

<script>
import IDE from "@/views/IDE";

export default {
    name: "AboutIDE",
    components: {IDE},
    data: () => ({
        activeTab: 'ts',
    }),
    methods: {
        onTab(tab) {
            this.activeTab = tab
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

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
