<template>
    <div id="action" class="section">
        <h1 class="small">{{$t('preferences.title')}}</h1>
        <div class="content">
            <div>
                <span>Dark Mode</span>
                <label class="switch">
                    <input id="darkSwitch" type="checkbox" @click="onDarkModeToggle">
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <span>Language</span>
                <select v-model="language" @change="setLanguage">
                  <option selected value="en">English</option>
                  <option value="nl">Dutch</option>
                </select>
            </div>
            <!--      <div>-->
            <!--        <span>Programmer Mode</span>-->
            <!--        <label class="switch">-->
            <!--          <input id="programmerSwitch" @click="onProgrammerModeToggle" type="checkbox">-->
            <!--          <span class="slider round"></span>-->
            <!--        </label>-->
            <!--      </div>-->
            <!--      <div>-->
            <!--        <span>Experiment Mode</span>-->
            <!--        <label class="switch">-->
            <!--          <input id="experimentSwitch" @click="onExperimentModeToggle" type="checkbox">-->
            <!--          <span class="slider round"></span>-->
            <!--        </label>-->
            <!--      </div>-->
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "Action",
    data() {
        return {
            language: "en"
        }
    },
    created() {
        $(document).ready(() => {
            if (localStorage.getItem("darkmode") === null/* ||
          localStorage.getItem("programmermode") === null*//* ||
          localStorage.getItem("experimentmode") === null*/) {
                localStorage.setItem("darkmode", false)
                this.setDarkMode(false)
                /*localStorage.setItem("programmermode", false)
                this.setProgrammerMode(false)*/
                /*localStorage.setItem("experimentmode", false)
                this.setExperimentMode(false)*/
            } else {
                this.setDarkMode(this.getDarkMode());
                /*this.setProgrammerMode(this.getProgrammerMode());*/
                /*this.setExperimentMode(this.getExperimentMode());*/
            }
        });
    },
    methods: {
        onDarkModeToggle() {
            this.setDarkMode(!this.getDarkMode());
        },
        getDarkMode() {
            return JSON.parse(localStorage.getItem('darkmode'))
        },
        setDarkMode(bool) {
            localStorage.setItem('darkmode', JSON.parse(bool));
            if (bool) {
                $('#app').addClass('dark');
            } else {
                $('#app').removeClass('dark');
                /*if (this.getProgrammerMode() === true) {
                  this.setProgrammerMode(false)
                }*/
            }
            $('#darkSwitch').prop('checked', bool);
        },
        setLanguage() {
            this.$i18n.locale = this.language
        }
        /*onProgrammerModeToggle() {
          this.setProgrammerMode(!this.getProgrammerMode());
        },
        getProgrammerMode() {
          return JSON.parse(localStorage.getItem('programmermode'))
        },
        setProgrammerMode(bool) {
          localStorage.setItem('programmermode', JSON.parse(bool));
          if (bool) {
            $('#app').addClass('programmer');
            this.setDarkMode(true)
          } else {
            $('#app').removeClass('programmer');
          }
          $('#programmerSwitch').prop('checked', bool);
        },*/
        /*onExperimentModeToggle() {
          this.setExperimentMode(!this.getExperimentMode());
        },
        getExperimentMode() {
          return JSON.parse(localStorage.getItem('experimentmode'))
        },
        setExperimentMode(bool) {
          localStorage.setItem('experimentmode', JSON.parse(bool));
          if (bool) {
            $('#app').addClass('experiment');
          } else {
            $('#app').removeClass('experiment');
          }
          $('#experimentSwitch').prop('checked', bool);
        }*/
    }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#action {
    background-color: $light1;

    .content {
        flex-direction: row;
        margin: 1rem auto;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 1rem;

            span {
                font-weight: bold;
                text-align: center;
            }
        }
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 54px;
        height: 30px;
        margin: 5px;

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;

        &:before {
            position: absolute;
            content: "";
            height: 22px;
            width: 22px;
            left: 3px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        &.round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }
    }

    input:checked + .slider {
        background-color: $brilliant_red;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px $brilliant_red;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
}

.dark #action {
    background-color: $dark2;
    color: $light0;
}
</style>
