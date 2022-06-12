<template>
    <div id="about" class="section">
        <h1>{{$t('about.title')}}</h1>
        <div class="content">
            <div class="selfie">
                <img v-lazy="'./img/selfie/selfie.webp'" alt="selfie">
                <a href="doc/OmerErdem_Resume.pdf" download="OmerErdem_Resume.pdf">{{$t('about.resume')}}</a>
            </div>
            <div class="intro">
                <div>{{$t('about.description1')}}</div>
                <div>{{$t('about.description2')}}</div>
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
                this.axios.get(window.location.origin + "/api/access.php?code=" + code).then(response => {
                    if (response.data === true) {
                        this.downloadCV()
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
</style>
