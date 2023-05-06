<template>
    <section id="about">
        <h1>{{ $t("about.title") }}</h1>
        <div class="content sm:flex-col md:flex-row">
            <div class="m-2.5 text-base leading-[1.6] max-w-[650px]">
                <div class="pb-5">
                    {{ $t("about.desc1") }} {{ $t("about.desc2") }}
                    {{ $t("about.desc25") }}
                </div>
                <div class="pb-5">
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
    name: "About"
};
</script>

<style scoped>

</style>