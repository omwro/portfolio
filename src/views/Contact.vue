<template>
    <section>
        <h1>{{ $t('contact.title') }}</h1>
        <p>{{ $t('contact.desc') }}</p>
        <div class="contact-container">
            <ContactButton v-for="(c, i) in contact" :key="i"
                           :img="c.img"
                           :text="c.name"
                           :url="c.url"/>
        </div>
    </section>
</template>

<script>
import contactJson from "../../public/data/contact.json"
import ContactButton from "@/components/ContactButton";

export default {
    name: "Contact",
    data: () => ({
        contact: contactJson
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