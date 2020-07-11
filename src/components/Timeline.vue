<template>
    <div id="timeline">
        <h1>Resume</h1>
        <div class="content">
            <div id="git"></div>
            <div id="timeline-table">
                <div class="event" data-date="Feb 2020">
                    <h3>Intern Magento Developer</h3>
                    <p>
                        Internship at Bold Commerce in Amsterdam an Id focused on improving frontend and
                        backend development while also helping in the Support team. Working with sprints
                        and Agile scrum while learning Magento 2, Laravel, SASS, Knockout.js and Vue.js.
                    </p>
                </div>
                <div class="event" data-date="Sep 2018">
                    <h3>Software Engineering</h3>
                    <p>
                        Following the 4 year plan study Software Engineering at Amsterdam University of
                        Applied Sciences. My goal is to improve skills in programming and business while
                        expanding my network and keep on going with my hobby projects. Learned the
                        languages Java, NoSQL, Angular and worked with Android Development.
                    </p>
                </div>
                <div class="event" data-date="Feb 2018">
                    <h3>Intern Frontend Developer</h3>
                    <p>
                        Graduation internship at DiGidot, subsidiary of InventDesign where I focused on
                        improving frontend skills by creating a web dashboard for the installations of
                        Digidot C4's. Independently designed and developed the dashboard in HTML, CSS,
                        Javascript, AJAX and API's
                    </p>
                </div>
                <div class="event" data-date="Sep 2016">
                    <h3>Intern Game Developer</h3>
                    <p>
                        Internship at Kenneth&Koh in Aalsmeer and focused on working within a company
                        setting and improve my programming skills by creating a mobile game in Unity in C#
                        and helped in the Testers team.
                    </p>
                </div>
                <div class="event" data-date="Sep 2015">
                    <h3>Application Developer</h3>
                    <p>
                        Following the 3 year plan study Application Development at Regio College Zaandam.
                        My goal is to get started with programming and maintain the leadership role in group
                        projects for a dictatorship. Learned the languages HTML5, CSS3, JavaScript, C#, PHP,
                        MySQL and ASP.NET.
                    </p>
                </div>
                <div class="event" data-date="Jan 2015">
                    <h3>Cashier</h3>
                    <p>
                        Working as a cashier at Deugd Erdem in Amsterdam with a 0 hour contract to
                        improve my communication skills with clients, while earning some pocket money.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timeline"
    }
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    #timeline {
        background-color: $light4;

        #timeline-table {
            display: flex;
            flex-direction: column;
            align-items: center;

            .event {
                display: flex;
                flex-direction: column;
                border: dashed 1px $light4;
                border-right: solid 1px $light4;
                border-left: solid 3px $brilliant_red;
                padding: 10px;

                &:first-child {
                    border-top: solid 1px $light4;
                }

                &:last-child {
                    border-bottom: solid 1px $light4;
                }

                &::before {
                    content: attr(data-date);
                }

                @media all and (min-width: 768px) {
                    max-width: 900px;
                    margin-left: 100px;

                    &::before {
                        position: relative;
                        left: -100px;
                        top: 22px;
                        height: 0;
                    }

                    &::after {
                        position: absolute;
                        height: 15px;
                        width: 15px;
                        border: solid 3px $brilliant_red;
                        border-radius: 50%;
                        content: "";
                        margin-left: -19px;
                        margin-top: 25px;
                        background-color: $brilliant_red;
                    }
                }
            }
        }
    }
</style>
