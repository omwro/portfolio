<template>
    <div id="action" class="section">
        <h1 class="small">{{$t('preferences.title')}}</h1>
        <div class="content">
            <div>
                <template v-if="dark">
                    <span>{{$t('preferences.lightmode')}}</span>
                    <img @click="onDarkModeToggle" src="img/actions/sun.png" class="pointer" alt="sun">
                </template>
                <template v-else>
                    <span>{{$t('preferences.darkmode')}}</span>
                    <img @click="onDarkModeToggle" src="img/actions/moon.png" class="pointer" alt="moon">
                </template>
            </div>
            <div>
                <span>{{$t('preferences.language')}}</span>
                <div class="row">
                    <div class="col">
                        <img @click="setLanguage('en')" src="img/actions/usa.png" class="pointer" alt="en">
                        <span @click="setLanguage('en')" class="pointer" :class="language === 'en' ? 'active' : ''">English</span>
                    </div>
                    <div class="col">
                        <img @click="setLanguage('nl')" src="img/actions/nl.png" class="pointer" alt="nl">
                        <span @click="setLanguage('nl')" class="pointer" :class="language === 'nl' ? 'active' : ''">Nederlands</span>
                    </div>
                </div>
            </div>
            <div>
                <span>{{$t('preferences.programmermode')}}</span>
                <img @click="onProgrammerModeToggle" src="img/actions/code.png" class="pointer code" :class="programmer ? 'active' : ''" alt="code">
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "Action",
    data() {
        return {
            dark: JSON.parse(localStorage.getItem('darkmode')),
            programmer: JSON.parse(localStorage.getItem('programmermode')),
            language: "en"
        }
    },
    created() {
        $(document).ready(() => {
            if (localStorage.getItem("darkmode") === null) {
                localStorage.setItem("darkmode", false)
                this.setDarkMode(false)
            } else {
                this.setDarkMode(this.dark);
            }

            if (localStorage.getItem("language") === null) {
                localStorage.setItem("language", "en")
                this.setLanguage("en")
            } else {
                this.setLanguage(localStorage.getItem("language"))
            }

            if (localStorage.getItem("programmermode") === null) {
                localStorage.setItem("programmermode", false)
                this.setProgrammerMode(false)
            } else {
                this.setProgrammerMode(this.programmer);
            }
        });
    },
    methods: {
        onDarkModeToggle() {
            this.setDarkMode(!this.dark);
        },
        onProgrammerModeToggle() {
            this.setProgrammerMode(!this.programmer);
        },
        setDarkMode(bool) {
            localStorage.setItem('darkmode', JSON.parse(bool));
            this.dark = bool
            if (bool) {
                $('#app').addClass('dark');
            } else {
                $('#app').removeClass('dark');
            }
        },
        setProgrammerMode(bool) {
            localStorage.setItem('programmermode', JSON.parse(bool));
            this.programmer = bool
            if (bool) {
                $('#app').addClass('programmer');
            } else {
                $('#app').removeClass('programmer');
            }
        },
        setLanguage(lan) {
            this.language = lan
            localStorage.setItem("language", this.language)
            this.$i18n.locale = this.language
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#action {
    background-color: $light1;

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 1rem auto;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0.5rem;
            width: 165px;

            > img {
                margin: 4px 0;
                padding: 4px;
            }

            > span {
                font-weight: bold;
                text-align: center;
            }

            .row {
                display: flex;
                flex-direction: row;
            }

            .col {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 8px;

                img {
                    width: 48px;
                    height: 48px;
                }
            }

            .active {
                border-bottom: solid 2px $brilliant-red;
            }
        }
    }

    .pointer {
        cursor: pointer;
    }
}

.dark #action {
    background-color: $dark2;
    color: $light0;

    .code {
        filter: invert(1);

        &.active {
            border-bottom-color: $brilliant-turquoise;

        }
    }
}
</style>
