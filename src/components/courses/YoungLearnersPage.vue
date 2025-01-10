<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000"><span class="highlight">YOUNG LEARNERS</span></h1>
    <br>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Course Overview</h1>
    <br>
    <div class="center-container">
        <v-row>
            <v-col cols="12" sm="6" class="mt-1">
                <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/course/PS1.jpg" align="center" elevation="23"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
                <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                    This programme for primary school students builds children’s English skills to prepare them for academic excellence and beyond. The topics were developed to inspire young learners through fun and fascinating information about the real world. We keep children motivated to learn through songs, games, video activities, language presentations, and group projects.

                    Children will improve their language abilities step by step in a friendly and co-operative environment that builds their confidence in their English. They will learn how to communicate and become little storytellers while striving for success in different areas of their lives.
                </p>
            </v-col>
        </v-row>
    </div>
    <v-row>
        <v-col cols="12">
            <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                Lessons from each level are based on subjects and activities that are relatable to all children, regardless of their first language. The programme leads to a series of tests from Cambridge English that are tailored for children who may not be used to taking exams. With no pass or fail grades, the tests provide every student with a reward for their efforts.
            </p>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Learning Outcomes</h1>
    <br>
    <div class="center-container">
        <v-row>
            <v-col cols="12" sm="6" class="mt-3">
                <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                    For primary schoolers, our learning outcomes are meticulously crafted to encompass a holistic approach to education, nurturing their academic, social, and emotional development. Through a diverse curriculum, students engage in a range of subjects and activities designed to cultivate critical thinking skills, creativity, and a thirst for knowledge.

                    Additionally, our curriculum emphasizes the importance of character development, fostering qualities such as empathy, resilience, and responsibility. Through collaborative projects, extracurricular activities, and community involvement, our students gain valuable life skills and a sense of global citizenship.
                </p>
            </v-col>

            <v-col cols="12" sm="6">
                <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/course/PS3.jpg" align="center" class="mt-3" elevation="23"></v-img>
            </v-col>
        </v-row>
    </div>
    <br>
    <v-row align="center" justify="center" dense>
        <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="3000">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-book" subtitle="" title="Reading" color="#FBD700">
                <v-card-text>Starting with recognizing simple words and phrases, children will progress towards reading and understanding full sentences and stories with confidence.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="3000">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-pencil" subtitle="" title="Writing" color="#FBD700">
                <v-card-text>Starting with writing and spelling simple words, children will then progress to learning how to write short stories.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-left" data-aos-duration="3000">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-speaker" subtitle="" title="Listening" color="#FBD700">
                <v-card-text>Starting with listening to short conversations, children will progress to being able to understand simple English stories.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-left" data-aos-duration="3000">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-chat" subtitle="" title="Speaking" color="#FBD700">
                <v-card-text>Starting with answering simple questions, children will progress towards expressing themselves fluently through speech.</v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <section class="why-choose-us" ref="statsSection" style="background-color: #5E0000 !important;">
        <h2 class="title mt-5" style="color: #FBB700" data-aos="fade-up" data-aos-duration="3000">Course Details</h2>
        <v-container>
            <v-row justify="center" align="center" class="stats-row">
                <v-col cols="12" sm="6" md="3" class="text-center">
                    <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" outlined>
                        <v-row justify="center" align="center">
                            <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/timer.gif" max-width="100" height="100"></v-img>
                        </v-row>
                        <h5 class="mt-2"><b>Course Duration</b></h5>
                        <p>Contact us to find out</p>
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
                            <p>06 - 12 Years</p>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>

    <v-divider></v-divider>

    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Programme Levels</h1>
    <br>
    <div class="center-container">
        <v-container>
            <v-row justify="center" align="center">
                <v-timeline side="end">
                    <v-timeline-item dot-color="#FF5722" size="small">
                        <v-card class="mx-auto hover-card" subtitle="" title="Beginner Level (Starters)" color="#FF5722" elevation="10" data-aos="fade-left" data-aos-duration="1500">
                            <v-card-text>
                                In the beginner level, children will be able to:
                                <ul class="bullet-list">
                                    <li>Read and write simple sentences</li>
                                    <li>Spell simple words</li>
                                    <li>Understand short conversations</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item dot-color="#FF9800" size="small">
                        <v-card class="mx-auto hover-card" subtitle="" title="Intermediate Level (Movers)" color="#FF9800" elevation="10" data-aos="fade-left" data-aos-duration="2000">
                            <v-card-text>
                                In the intermediate level, children will be able to:
                                <ul class="bullet-list">
                                    <li>Understand simple English stories</li>
                                    <li>Write and understand simple sentences</li>
                                    <li>Answer basic questions using correct expressions</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item dot-color="#4CAF50" size="small">
                        <v-card class="mx-auto hover-card" subtitle="" title="Higher Level (Flyers)" color="#4CAF50" elevation="10" data-aos="fade-left" data-aos-duration="2500">
                            <v-card-text>
                                In the higher levels, children will be able to:
                                <ul class="bullet-list">
                                    <li>Understand longer texts about everyday topics</li>
                                    <li>Write short stories and short messages</li>
                                    <li>Tell a story using their own ideas</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-row>
        </v-container>
    </div>
    <br>
    <v-divider></v-divider>

    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Young Learners English (YLE) Exams</h1>
    <br>
    <div class="center-container">
        <v-row>
            <v-col cols="12" sm="6" class="mt-1">
                <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/course/PS1.jpg" align="center" elevation="23"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
                <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                    The Young Learners English (YLE) exams serve as a valuable assessment tool for young language learners, offering a comprehensive evaluation of their English proficiency. Tailored specifically for children, these exams provide a supportive and engaging environment where students can demonstrate their language skills with confidence.

                    Divided into three levels—Pre A1 Starters, A1 Movers and A2 Flyers—the YLE exams cover a range of language competencies, including listening, speaking, reading, and writing. By preparing for and successfully completing these exams, young learners not only gain a sense of accomplishment but also develop essential language skills that will serve them well in future academic and professional pursuits.

                    Moreover, the YLE exams provide teachers and parents with valuable insights into students’ progress and areas for improvement, ensuring a tailored and effective approach to language education.
                </p>
            </v-col>
        </v-row>
    </div>
    <v-row>
        <v-col cols="12">
            <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                Lessons from each level are based on subjects and activities that are relatable to all children, regardless of their first language. The programme leads to a series of tests from Cambridge English that are tailored for children who may not be used to taking exams. With no pass or fail grades, the tests provide every student with a reward for their efforts.
            </p>
        </v-col>
    </v-row>

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
        <h5 style="text-align: center;">Before enrolling, all children will take a Placement Test to determine which course is best-suited to their level of English language proficiency.</h5>
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
    name: 'YoungLearnersPage',
    components: {
        NavBar,
        FooterPage
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    data() {
        return {
            logo: require('@/assets/Logo.png'),
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
