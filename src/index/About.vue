<template>
    <section id="about">
        <h1>{{ $t("about.title") }}</h1>
        <div class="content">
            <div class="intro">
                <div>
                    {{ $t("about.desc1") }} {{ $t("about.desc2") }}
                    {{ $t("about.desc25") }}
                </div>
                <div>
                    {{ $t("about.desc3") }} {{ $t("about.desc4") }}
                    {{ $t("about.desc5") }} {{ $t("about.desc6") }}
                    {{ $t("about.desc7") }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
    components: {},
};
</script>

<style lang="scss" scoped>
@import "src/variables";

#about .content {
    > div {
        margin: 10px;
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

    @media (min-width: $mq-m) {
        flex-direction: row;
    }
}
</style>
