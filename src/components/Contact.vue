<template>
    <div id="contact" class="section">
        <h1>Get in contact</h1>
        <div class="content">
            <form>
                <div class="name-box">
                    <input type="text" name="name" required>
                    <span></span>
                    <label>Name</label>
                </div>
                <div class="email-box">
                    <input type="text" name="email" required>
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="subject-box">
                    <input type="email" name="subject" required>
                    <span></span>
                    <label>Subject</label>
                </div>
                <div class="message-box">
                    <textarea name="message" required></textarea>
                    <span></span>
                    <label>Message</label>
                </div>
                <div class="bottom-box">
                    <a href="mailto:m.o.erdem@outlook.com">
                        <font-awesome-icon icon="at" class="icon at"/>
                    </a>
                    <a href="https://www.linkedin.com/in/omer-erdem-179745153/">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon linkedin"/>
                    </a>
                    <a href="skype:live:omer.boy?chat">
                        <font-awesome-icon :icon="['fab', 'skype']" class="icon skype"/>
                    </a>
                    <button type="submit">SUBMIT</button>
                    <a href="https://discord.gg/wkb42Rb">
                        <font-awesome-icon :icon="['fab', 'discord']" class="icon discord"/>
                    </a>
                    <a href="https://codepen.io/omwro">
                        <font-awesome-icon :icon="['fab', 'codepen']" class="icon codepen"/>
                    </a>
                    <a href="https://github.com/omwro">
                        <font-awesome-icon :icon="['fab', 'github']" class="icon github"/>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #contact {
        background-color: $light1;

        form {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            background-color: $light0;
            padding: 30px 10px 20px;
            border-radius: 10px;
            border: solid 1px black;

            @media all and (min-width: 550px) {
                margin: auto;
                width: 500px;
            }

            > div {
                position: relative;
                width: 100%;

                input, textarea {
                    background: transparent;
                    border: none;
                    border-bottom: solid 1px black;
                    outline: none;
                    margin-bottom: 30px;
                    padding: 10px 0;
                    width: 100%;
                    resize: none;

                    &:focus,
                    &:valid {
                        ~ label {
                            top: -20px;
                            left: 0;
                            font-size: 12px;
                            color: $brilliant_red;
                        }

                        ~ span {
                            width: 100%;
                        }
                    }
                }

                span {
                    position: absolute;
                    left: 0;
                    top: 35px;
                    content: '';
                    background-color: $brilliant_red;
                    transition: all 1s linear;
                    width: 0;
                    height: 1px;
                }

                textarea {
                    height: 100px;
                    margin-top: 10px;

                    &:focus ~ label,
                    &:valid ~ label {
                        top: -20px;
                    }
                }

                label {
                    position: absolute;
                    top: 0;
                    left: 0;
                    font-weight: normal;
                    padding: 10px 0;
                    font-size: 16px;
                    pointer-events: none;
                    transition: .5s;
                }
            }
            .icon {
                font-size: 20px;
                cursor: pointer;
                margin: 5px;

                &.at {
                   color: #0071c4;
                }
                &.linkedin {
                    color: #0072b1;
                }
                &.skype {
                    color: #00aff0;
                }
                &.discord {
                    color: #7289da;
                }
                &.codepen, &.github {
                    color: black;
                }
            }

            button {
                background: none;
                border: solid 2px $brilliant_red;
                border-radius: 25px;
                outline: none;
                padding: 10px 20px;

                &:hover {
                    background-color: rgba($brilliant_red, 0.5);
                }

                &:active {
                    background-color: $brilliant_red;
                }
            }

            .message-box span {
                top: 130px;
            }

            .bottom-box {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
            }
        }
    }
</style>
