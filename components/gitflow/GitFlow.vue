<template>
    <div id="gitflow">
        <div v-for="(item, index) in items" :key="index" class="gitflow-row">
            <template v-if="item.tag">
                <GitFlowTag class="gitflow-tag-desktop" :color="colors[item.line]" :message="item.tag"/>
                <GitFlowHorizontalLine class="gitflow-tag-desktop" half :index="item.line" :color="colors[item.line]"/>
            </template>
            <GitFlowSpacer v-else/>
            <div class="gitflow-flow">
                <template v-for="i in item.line">
                    <template v-if="i === item.line">
                        <GitFlowBlock v-if="item.style === 'commit'">
                            <GitFlowTransparentBackground right :color="colors[i]"/>
                            <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                            <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                            <GitFlowBullet :index="item.line" :color="colors[item.line]" :image="item.img"/>
                        </GitFlowBlock>
                        <GitFlowBlock v-else-if="item.style === 'start'" mobile>
                            <GitFlowTransparentBackground :color="colors[item.line]"/>
                            <GitFlowCornerLine bottom :index="item.line" :color="colors[item.line]"/>
                        </GitFlowBlock>
                        <GitFlowBlock v-else-if="item.style === 'merge'" mobile>
                            <GitFlowTransparentBackground :color="colors[item.line]"/>
                            <GitFlowCornerLine top :index="item.line" :color="colors[item.line]"/>
                        </GitFlowBlock>
                        <GitFlowVerticalLine v-else :index="i" :color="colors[i]" :key="i"/>
                    </template>
                    <template v-else>
                        <template v-if="item.style === 'start'">
                            <GitFlowBlock v-if="i < item.start" mobile>
                                <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                                <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                                <GitFlowHorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <GitFlowHorizontalLine right half :index="item.line" :color="colors[item.line]"/>
                            </GitFlowBlock>
                            <GitFlowBlock v-else-if="i === item.start">
                                <GitFlowTransparentBackground right :color="colors[item.line]"/>
                                <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                                <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                                <GitFlowHorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <GitFlowHorizontalLine right :index="item.line" :color="colors[item.line]"/>
                                <GitFlowBullet :index="item.line" :color="colors[item.line]"/>
                            </GitFlowBlock>
                            <GitFlowBlock v-else-if="i > item.start" mobile>
                                <GitFlowTransparentBackground :color="colors[item.line]"/>
                                <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                                <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                                <GitFlowHorizontalLine :index="item.line" :color="colors[item.line]"/>
                                <GitFlowHorizontalLine :index="item.line" :color="colors[item.line]"/>
                            </GitFlowBlock>
                        </template>
                        <GitFlowBlock v-else-if="item.style === 'commit'">
                            <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                            <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                            <GitFlowHorizontalLine v-if="item.tag" half :index="i" :color="colors[item.line]"/>
                        </GitFlowBlock>
                        <template v-else-if="item.style === 'merge'">
                            <GitFlowBlock v-if="i < item.merge" mobile>
                                <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                                <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                                <GitFlowHorizontalLine half :index="item.line" :color="colors[item.line]"/>
                            </GitFlowBlock>
                            <GitFlowBlock v-else-if="i === item.merge">
                                <GitFlowTransparentBackground right :color="colors[item.line]"/>
                                <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                                <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                                <GitFlowHorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <GitFlowHorizontalLine right :index="item.line" :color="colors[item.line]"/>
                                <GitFlowBullet :index="item.line" :color="colors[item.line]"/>
                            </GitFlowBlock>
                            <GitFlowBlock v-else-if="i > item.merge" mobile>
                                <GitFlowTransparentBackground :color="colors[item.line]"/>
                                <GitFlowVerticalLine :index="i" top :color="colors[i]"/>
                                <GitFlowVerticalLine :index="i" bottom :color="colors[i]"/>
                                <GitFlowHorizontalLine :index="item.line" :color="colors[item.line]"/>
                                <GitFlowHorizontalLine :index="item.line" :color="colors[item.line]"/>
                            </GitFlowBlock>
                        </template>
                        <GitFlowVerticalLine v-else :index="i" :color="colors[i]" :key="i"/>
                    </template>
                </template>
                <GitFlowBlock v-if="item.continuedLine" mobile>
                    <GitFlowTransparentBackground :color="colors[item.line]"/>
                    <GitFlowVerticalLine :index="item.continuedLine" top :color="colors[item.continuedLine]"/>
                    <GitFlowVerticalLine :index="item.continuedLine" bottom :color="colors[item.continuedLine]"/>
                </GitFlowBlock>
            </div>
            <GitFlowMessage v-if="item.msg"
                     :spacing="item.spacing"
                     :color="colors[item.line]"
                     :message="item.msg"
                     :description="item.desc"
                     :tag="item.tag"/>
        </div>
    </div>
</template>

<script setup>
import GitFlowTag from "./GitFlowTag";
import GitFlowHorizontalLine from "./GitFlowHorizontalLine";
import GitFlowSpacer from "./GitFlowSpacer";
import GitFlowBlock from "./GitFlowBlock";
import GitFlowTransparentBackground from "./GitFlowTransparentBackground";
import GitFlowVerticalLine from "./GitFlowVerticalLine";
import GitFlowBullet from "./GitFlowBullet";
import GitFlowCornerLine from "./GitFlowCornerLine";
import GitFlowMessage from "./GitFlowMessage";
</script>

<script>
export default {
    name: "GitFlow",
    props: ["items", "colors"]
}
</script>

<style scoped>
#gitflow {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 14px;
    max-width: 1000px;
}
#gitflow .gitflow-row {
    display: flex;
    flex-direction: row;
    min-height: 36px;
    height: auto;
}
#gitflow .gitflow-row:hover {
    background-color: rgba(0, 0, 0, .1);
}
#gitflow .gitflow-row .gitflow-flow {
    display: inline-flex;
    max-width: 30px;
    position: relative;
}
#gitflow .gitflow-row .gitflow-tag-desktop {
    display: none;
}
@media (min-width: 768px) {
    #gitflow .gitflow-row .gitflow-tag-desktop {
        display: flex;
    }
}
@media (min-width: 768px) {
    #gitflow {
        font-size: 16px;
    }
    #gitflow .gitflow-flow {
        max-width: none !important;
    }
}
</style>