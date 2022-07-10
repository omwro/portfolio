<template>
    <section id="about">
        <h1>{{$t('about.title')}}</h1>
        <div class="content">
            <div class="selfie">
                <img v-lazy="'./img/selfie/selfie.png'" alt="selfie">
            </div>
            <div class="intro">
                <div>{{$t('about.desc1')}} {{$t('about.desc2')}}</div>
                <div>{{$t('about.desc3')}} {{$t('about.desc4')}} {{$t('about.desc5')}} {{$t('about.desc6')}} {{$t('about.desc7')}}</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";


#about .content {
    > div {
        margin: 10px;
    }

    .selfie {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100%;
            max-height: 450px;
            min-width: 200px;
            max-width: 300px;
            border-radius: 25px;
        }

        a {
            color: inherit;
            font-size: 16px;
            margin-top: 4px;

            &:active {
                color: $accent;
            }
        }
    }

    .intro {
        font-size: 1rem;
        line-height: 1.6;
        max-width: 650px;

        > div {
            padding-bottom: 20px;
        }
    }

    @media (min-width: $mq-sm) {
        flex-direction: column;
    }
    @media (min-width: $mq-sm) {
        margin: 20px 50px;
    }
    @media (min-width: $mq-m) {
        flex-direction: row;
        margin: 20px 100px;

    }
}
</style>
