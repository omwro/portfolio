<template>
    <section id="timeline">
        <h1>{{$t('timeline.title')}}</h1>
        <div class="content">
            <div id="timeline-table">
                <div class="event" :data-date="$t('timeline.boldDate')" >
                    <h2>{{$t('timeline.boldRole')}}</h2>
                    <h3>{{$t('timeline.boldPlace')}}</h3>
                    <p>{{$t('timeline.boldDescription')}}</p>
                </div>
                <div class="event" :data-date="$t('timeline.hvaDate')">
                    <h2>{{$t('timeline.hvaRole')}}</h2>
                    <h3>{{$t('timeline.hvaPlace')}}</h3>
                    <p>{{$t('timeline.hvaDescription')}}</p>
                </div>
                <div class="event" :data-date="$t('timeline.dgdDate')">
                    <h2>{{$t('timeline.dgdRole')}}</h2>
                    <h3>{{$t('timeline.dgdPlace')}}</h3>
                    <p>{{$t('timeline.dgdDescription')}}</p>
                </div>
                <div class="event" :data-date="$t('timeline.kkDate')">
                    <h2>{{$t('timeline.kkRole')}}</h2>
                    <h3>{{$t('timeline.kkPlace')}}</h3>
                    <p>{{$t('timeline.kkDescription')}}</p>
                </div>
                <div class="event" :data-date="$t('timeline.regioDate')">
                    <h2>{{$t('timeline.regioRole')}}</h2>
                    <h3>{{$t('timeline.regioPlace')}}</h3>
                    <p>{{$t('timeline.regioDescription')}}</p>
                </div>
                <div class="event" :data-date="$t('timeline.deugdDate')">
                    <h2>{{$t('timeline.deugdRole')}}</h2>
                    <h3>{{$t('timeline.deugdPlace')}}</h3>
                    <p>{{$t('timeline.deugdDescription')}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Timeline"
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$color1: $accent;
$color2: $accent2;
$color3: $accent3;
$color4: $accent4;
$transparent: rgba(0, 0, 0, 0);
$hover-color: rgba(white, .1);

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

        h2 {
            font-size: 1.4rem;
            margin-bottom: 0;
            margin-top: 1rem;
        }

        h3 {
            font-size: 1.2rem;
            margin-bottom: 0;
            margin-top: 1rem;
        }

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
            margin-left: 175px;

            &::before {
                position: relative;
                left: calc(-100% - 25px);
                top: 19px;
                height: 0;
                text-align: right;
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

.dark #timeline {
    #timeline-table .event {
        border-top-color: $background-light;
        border-right-color: $background-light;
        border-bottom-color: $background-light;
    }
}
</style>
