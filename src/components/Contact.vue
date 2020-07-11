<template>
    <div id="contact">
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
                    <a href="mailto:m.o.erdem@outlook.com"><i class="fas fa-at"></i></a>
                    <a href="https://www.linkedin.com/in/omer-erdem-179745153/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="skype:live:omer.boy?chat"><i class="fab fa-skype"></i></a>
                    <button type="submit">SUBMIT</button>
                    <a href="https://discord.gg/wkb42Rb"><i class="fab fa-discord"></i></a>
                    <a href="https://codepen.io/omwro"><i class="fab fa-codepen"></i></a>
                    <a href="https://github.com/omwro"><i class="fab fa-github"></i></a>
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
        background-color: $light4;

        form {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            background-color: $light4;
            padding: 30px 10px 20px;
            border-radius: 10px;
            border: solid 1px $light5;
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
                    top: 40px;
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
            .fas,
            .fab {
                font-size: 20px;
                cursor: pointer;
            }

            button {
                background: none;
                border: solid 2px $brilliant_red;
                border-radius: 25px;
                outline: none;
                padding: 10px 20px;

                &:active {
                    background-color: rgba($brilliant_red, 0.5);
                }
            }

            .message-box span {
                top: 109px;
            }

            .bottom-box {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
            }
        }
    }
</style>
