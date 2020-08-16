<template>
    <div id="contact" class="section">
        <h1>Get in contact</h1>
        <div class="content">
            <div id="form">
                <div class="name-box">
                    <input v-model="name" type="text" name="name" required>
                    <span></span>
                    <label>Name</label>
                </div>
                <div class="email-box">
                    <input v-model="email" type="text" name="email" required>
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="subject-box">
                    <input v-model="subject" type="text" name="subject" required>
                    <span></span>
                    <label>Subject</label>
                </div>
                <div class="message-box">
                    <textarea v-model="message" name="message" required></textarea>
                    <span></span>
                    <label>Message</label>
                </div>
                <div class="error-msg">{{ errorMsg }}</div>
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
                    <button @click="sendMail">{{ submitTxt }}</button>
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data: () => {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
            submitTxt: "SUBMIT",
            errorMsg: ""
        };
    },
    methods: {
        sendMail() {
            const form = new FormData();
            let formIsValid = true;
            this.errorMsg = "";
            if (!this.name || !this.email || !this.subject || !this.message) {
                formIsValid = false;
                this.errorMsg = "All fields are required!";
            }

            if (formIsValid) {
                form.append('name', this.name);
                form.append('email', this.email);
                form.append('subject', this.subject);
                form.append('message', this.message);

                this.axios.post("mail.php", form).then(res => {
                    console.log(res)
                    this.name = this.email = this.subject = this.message = "";
                    this.submitTxt = "SUCCESS!";
                });
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

#contact {
    background-color: $light1;

    #form {
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
                font-size: 1.4rem;

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
                top: calc(100% - 31px);
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

        .error-msg {
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }

        .bottom-box {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
    }
}

.dark #contact {
    background-color: $dark1;
    color: $light0;

    #form {
        background-color: $dark2;

        input, textarea, button {
            color: $light0;

            &:not(button) {
                border-bottom-color: $light0;
            }
        }
    }
}
</style>
