<template>
    <div id="action" class="section">
        <h2>Choose your preference</h2>
        <div class="content">
            <div>
                <span>Dark Mode</span>
                <label class="switch">
                    <input id="darkSwitch" @click="onDarkMode" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <span>Programmer Mode</span>
                <label class="switch">
                    <input id="programmerSwitch" @click="onProgrammerMode" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <span>Experiment Mode</span>
                <label class="switch">
                    <input id="experimentSwitch" @click="onExperimentMode" type="checkbox">
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
                $('#darkSwitch').prop('checked', JSON.parse(localStorage.getItem('darkmode')));
                $('#programmerSwitch').prop('checked', JSON.parse(localStorage.getItem('programmermode')));
                $('#experimentSwitch').prop('checked', JSON.parse(localStorage.getItem('experimentmode')));
                this.setDarkMode(JSON.parse(localStorage.getItem('darkmode')));
            });
        },
        methods: {
            setDarkMode(bool) {
                if (bool) {
                    $('#app').addClass('dark');
                } else {
                    $('#app').removeClass('dark');
                }
            },
            onDarkMode() {
                localStorage.setItem('darkmode', !JSON.parse(localStorage.getItem('darkmode')));
                this.setDarkMode(JSON.parse(localStorage.getItem('darkmode')));
            },
            onProgrammerMode() {
                localStorage.setItem('programmermode', !JSON.parse(localStorage.getItem('programmermode')));
            },
            onExperimentMode() {
                localStorage.setItem('experimentmode', !JSON.parse(localStorage.getItem('experimentmode')));
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
