<template>
    <NavBar></NavBar>
    <v-container>

        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000"><span class="highlight">IELTS</span></h1>
        <br />
        <h2 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
            What is <span class="highlight">IELTS?</span>
        </h2>
        <br />
        <div class="center-container">
            <v-row>
                <v-col cols="12">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        The International English Language Testing System (IELTS) is an exam that measures the language proficiency of people who want to study, work or live abroad in English speaking countries. IELTS is the standard test used for university entry in Australia, New Zealand, Canada, United Kingdom (UK) and the United States (US.
                        At CCBE, we have a course to prepare you for the IELTS exams in order to gain access to international colleges or universities, improve career opportunities or for migration purposes in English-speaking countries.
                    </p>
                </v-col>
            </v-row>
        </div>

        <br />
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
            Learning Outcomes
        </h1>
        <br />
        <div class="center-container">
            <v-row>
                <v-col cols="12">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        With IELTS you can gain access to universities or colleges, improve employment prospects or migrate to English-speaking countries throughout the world.
                    </p>
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        We can provide you with the appropriate materials to study effectively for the IELTS at a comfortable pace. <strong>Mindset for IELTS</strong> is a comprehensive course designed to develop the learner's language, vocabulary, and grammar skills in an in-depth manner.
                    </p>
                </v-col>
            </v-row>
        </div>
    
        <v-row>
            <v-col cols="12">
                <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                    Learners can take the Cambridge English exams as they progress through this programme and upon passing, will be awarded valuable certificates that will help open doors to the best colleges, universities and careers worldwide. Starting from a basic English skill level to the highest level, these courses train students on the use of language in real life through meaningful communication. At the end of this programme, students will be able to read, write, listen and speak at a high level of English fluency.
                </p>
            </v-col>
        </v-row>
    
        <v-divider></v-divider>
    
        <section class="why-choose-us" ref="statsSection" style="background-color: #5E0000 !important;">
            <h2 class="title mt-5" style="color: #FBB700" data-aos="fade-up" data-aos-duration="3000">
                Course Details
            </h2>
            <v-container>
                <v-row justify="center" align="center" class="stats-row">
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/timer.gif" max-width="100" height="100"></v-img>
                            </v-row>
                            <h5 class="mt-2"><b>Course Duration</b></h5>
                            <p>12 Months</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/calender.gif" max-width="100" height="100"></v-img>
                            </v-row>
                            <h5 class="mt-2"><b>Class Duration</b></h5>
                            <p>Contact us to find out</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/fee.gif" max-width="100" height="100"></v-img>
                            </v-row>
                            <h5 class="mt-2"><b>Course Fee</b></h5>
                            <p>Contact us to find out</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <h1 class="mt-5"><b>Age</b></h1>
                            </v-row>
                            <v-row justify="center" align="center">
                                <h5 class="mt-2"><b>Age Group</b></h5>
                            </v-row>
                            <v-row justify="center" align="center">
                                <p>16 and above</p>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    
        <v-divider></v-divider>
    
    
        <v-row justify="center" align="center" class="my-5">
            <v-btn rounded="xl" size="large" color="#FBB700" class="custom-btn-contact" elevation="10" to="/contact">
                <v-icon left>mdi-phone</v-icon>
                Contact Us
            </v-btn>
        </v-row>
    
        <v-row justify="center" align="center" class="my-5">
            <h1 style="color: red;">IMPORTANT</h1>
        </v-row>
        <v-row justify="center" class="my-5">
            <h5 style="text-align: center;">
                Before enroling, All children Will take a Placement Test to determine which course is best-suited to their level of English language proficiency.
            </h5>
        </v-row>
    </v-container>
    
    <FooterPage></FooterPage>
    </template>
    
    <script>
    import NavBar from '../NavBar.vue'
    import FooterPage from '../FooterPage.vue'
    
    // AOS Transition
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    
    export default {
        name: 'IELTSPage',
        components: {
            NavBar,
            FooterPage
        },
        mounted() {
            window.scrollTo(0, 0);
            AOS.init(); // Initialize AOS when the component is mounted
        },
        data() {
            return {
                logo: require('@/assets/Logo.png'),
                show1: false,
            }
        },
    }
    </script>
    
    <style>
    .title {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
    }
    
    .highlight {
        color: #5E0000;
    }
    
    .subtitle {
        font-size: 1.2rem;
        color: #555;
        margin: 20px 0;
    }
    
    .title-intro {
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: center;
    }
    
    .paragraph {
        font-family: "Roboto", sans-serif;
        font-weight: 14px;
        font-size: 20px;
        font-style: normal;
        text-align: justify;
    }
    
    #logo {
        justify-content: center;
    }
    
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    
    ul {
        list-style-type: disc;
        padding-left: 20px;
        font-size: 1rem;
        line-height: 1.6;
    }
    
    .center-container {
        display: flex;
        justify-content: center;
        align-items: left;
        display: flex;
    }
    
    .custom-btn-contact {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background-color: #FBB700;
        color: white;
    }
    
    .custom-btn-contact:hover {
        background-color: #FFCC00;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        transform: scale(1.05);
    }
    
    .hover-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .hover-card:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.2);
    }
    
    .v-card-title {
        color: #5E0000;
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
        text-align: center;
    }
    
    .bullet-list {
        list-style-type: disc;
        padding-left: 20px;
        font-size: 1rem;
        line-height: 1.6;
    }
    
    .v-card-text {
        padding: 16px 24px;
        font-size: 1rem;
        color: #333;
    }
    
    .v-card {
        margin-bottom: 20px;
        border-radius: 10px;
    }
    </style>
    