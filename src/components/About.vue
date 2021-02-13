<template>
    <div id="about" class="section">
        <h1>Who am I ?</h1>
        <div class="content">
            <div class="selfie">
                <img v-lazy="'./img/selfie/selfie.webp'" alt="selfie">
                <a href="#" onclick="return false" v-on:click="getAccess">Download Resume</a>
            </div>
            <div class="intro">
                <div>
                    My name is Omer Erdem and I am a third year Software Engineer student at the Amsterdam University of
                    Applied Sciences. I am currently 21 years old and I like to game, drive around and experiment.
                </div>
                <div>
                    I am a hardworking web- and software developer student who is every day in search for new projects
                    and challenges to improve my skills to eventually become a Full Stack Developer. I am really
                    passionate in programming and would not mind to get my hands dirty again. I am eager to learn new
                    techniques and I am surely not afraid of hardware. I am someone who likes to make the world a better
                    place, even if it goes unnoticed.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    methods: {
        getAccess: function () {
            let code = prompt("Please enter the access code to download the file. Get in contact in case you don't have a code.")
            if (code != null) {
                this.axios.get(window.location.origin + "/php/access.php?code=" + code).then(response => {
                    if (response.data === true) {
                        this.$notify({
                            type: "success",
                            duration: 10000,
                            title: 'Access Granted',
                            text: 'The file shall start downloading soon.'
                        });
                        this.downloadCV()
                    } else {
                        this.$notify({
                            type: "error",
                            duration: 10000,
                            title: 'Access Denied',
                            text: 'Wrong code has been entered.'
                        });
                    }
                })
            }
        },
        downloadCV: function () {
            let link = document.createElement('a');
            link.href = window.location.origin + "/doc/OmerErdem_Resume.pdf";
            link.download = 'OmerErdem_Resume.pdf';
            link.dispatchEvent(new MouseEvent('click'));
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";


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
            border: solid $dark5 2px;
        }

        a {
            color: inherit;
            font-size: 16px;
            margin-top: 4px;

            &:active {
                color: $brilliant-red;
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

.programmer #about {
    display: none;
}
</style>
