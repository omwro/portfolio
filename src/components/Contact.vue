<template>
    <div id="contact" class="section">
        <h1>Get in contact</h1>
        <div class="content">
            <div>
                <img @click="goToMail" src="img/contact/mail.png" alt="mail">
                <span @click="goToMail">Public.OmerErdem@outlook.com</span>
            </div>
            <div>
                <img @click="goToDiscord" src="img/contact/discord.png" alt="discord">
                <span @click="goToDiscord">Omer's Hiring Server</span>
            </div>
            <div>
                <img @click="goToLinkedin" src="img/contact/linkedin.png" alt="linkedin">
                <span @click="goToLinkedin">Omer Erdem</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    methods: {
        goToMail() {
            window.open("mailto:public.omererdem@outlook.com")
        },
        goToDiscord() {
            window.open("https://discord.gg/UnhW4ykFFp")
        },
        goToLinkedin() {
            window.open("https://www.linkedin.com/in/omer-erdem-179745153/")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#contact {
    background-color: $light0;

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 16px;
            min-width: 250px;

            img {
                height: 128px;
                margin-bottom: 4px;
            }

            > img, > span {
                cursor: pointer;

            }
        }
    }
}

.dark #contact {
    background-color: $dark1;
    color: $light0;
}
</style>
