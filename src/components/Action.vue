<template>
    <div id="action" class="section">
        <h2>Choose your preference</h2>
        <div class="content">
            <div>
                <span>Dark Mode</span>
                <label class="switch">
                    <input id="darkSwitch" @click="onDarkModeToggle" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <span>Programmer Mode</span>
                <label class="switch">
                    <input id="programmerSwitch" @click="onProgrammerModeToggle" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <span>Experiment Mode</span>
                <label class="switch">
                    <input id="experimentSwitch" @click="onExperimentModeToggle" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "Action",
        created() {
            $(document).ready(() => {
                if (localStorage.getItem("darkmode") === null ||
                    localStorage.getItem("programmermode") === null ||
                    localStorage.getItem("experimentmode") === null) {
                    localStorage.setItem("darkmode", false)
                    this.setDarkMode(false)
                    localStorage.setItem("programmermode", false)
                    this.setProgrammerMode(false)
                    localStorage.setItem("experimentmode", false)
                    this.setExperimentMode(false)
                } else {
                    this.setDarkMode(JSON.parse(localStorage.getItem('darkmode')));
                    this.setProgrammerMode(JSON.parse(localStorage.getItem('programmermode')));
                    this.setExperimentMode(JSON.parse(localStorage.getItem('experimentmode')));
                }
            });
        },
        methods: {
            onDarkModeToggle() {
                let currentDarkModeValue = JSON.parse(localStorage.getItem('darkmode'))
                this.setDarkMode(!currentDarkModeValue);
            },
            setDarkMode(bool) {
                localStorage.setItem('darkmode', JSON.parse(bool));
                if (bool) {
                    this.darkMode = true
                    $('#app').addClass('dark');
                } else {
                    this.darkMode = false
                    $('#app').removeClass('dark');
                    if (this.programmerMode === true) {
                        this.setProgrammerMode(false)
                    }
                }
                $('#darkSwitch').prop('checked', bool);
            },
            onProgrammerModeToggle() {
                let currentProgrammerModeValue = JSON.parse(localStorage.getItem('programmermode'))
                this.setProgrammerMode(!currentProgrammerModeValue);
            },
            setProgrammerMode(bool) {
                localStorage.setItem('programmermode', JSON.parse(bool));
                if (bool) {
                    this.programmerMode = true
                    this.setDarkMode(true)
                } else {
                    this.programmerMode = false
                }
                $('#programmerSwitch').prop('checked', bool);
            },
            onExperimentModeToggle() {
                let currentExperimentModeValue = JSON.parse(localStorage.getItem('experimentmode'))
                this.setExperimentMode(!currentExperimentModeValue);
            },
            setExperimentMode(bool) {
                localStorage.setItem('experimentmode', JSON.parse(bool));
                if (bool) {
                    this.experimentMode = true
                } else {
                    this.experimentMode = false
                }
                $('#experimentSwitch').prop('checked', bool);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #action {
        background-color: $light0;

        .content {
            flex-direction: row;

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 10px;

                @media (min-width: $breakpoint-sm) {
                    margin: 0 25px;
                }

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
        background-color: $dark1;
        color: $light0;
    }
</style>
