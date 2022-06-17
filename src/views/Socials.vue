<template>
    <section>
        <h1>{{ $t('socials.title') }}</h1>
        <p>{{ $t('socials.desc') }}</p>
        <div class="contact-container">
            <ContactButton v-for="(s, i) in socials" :key="i"
                           :img="s.img"
                           :text="s.name"
                           :url="s.url"/>
        </div>
    </section>
</template>

<script>
import socialsJson from "../../public/data/contact.json"
import ContactButton from "@/components/ContactButton";

export default {
    name: "Socials",
    data: () => ({
        socials: socialsJson
    }),
    components: {ContactButton}
}
</script>

<style lang="scss" scoped>
p {
    text-align: center;
    padding: 0 16px;
}

.contact-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>