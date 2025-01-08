<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000"><span class="highlight">YOUNG LEARNERS</span>
    </h1>
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
                    This programme for primary school students builds children’s English skills to prepare them for
                    academic excellence and beyond. The topics were developed to inspire young learners through fun
                    and fascinating information about the real world. We keep children motivated to learn through
                    songs, games, video activities, language presentations, and group projects.

                    Children will improve their language abilities step by step in a friendly and co-operative
                    environment that builds their confidence in their English. They will learn how to communicate
                    and become little storytellers while striving for success in different areas of their lives.
                </p>
            </v-col>
        </v-row>
    </div>
    <v-row>
        <v-col cols="12">
            <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                Lessons from each level are based on subjects and activities that are relatable to all children,
                regardless of their first language. The programme leads to a series of tests from Cambridge
                English that are tailored for children who may not be used to taking exams. With no pass or fail
                grades, the tests provide every student with a reward for their efforts.
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
                    For primary schoolers, our learning outcomes are meticulously crafted to encompass a holistic
                    approach to education, nurturing their academic, social, and emotional development. Through a
                    diverse curriculum, students engage in a range of subjects and activities designed to cultivate
                    critical thinking skills, creativity, and a thirst for knowledge.

                    Additionally, our curriculum emphasizes the importance of character development, fostering
                    qualities such as empathy, resilience, and responsibility. Through collaborative projects,
                    extracurricular activities, and community involvement, our students gain valuable life skills
                    and a sense of global citizenship.
                </p>
            </v-col>

            <v-col cols="12" sm="6">
                <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/course/PS3.jpg" align="center" class="mt-3" elevation="23"></v-img>
            </v-col>
        </v-row>
    </div>
    <br>
    <v-row align="center" justify="center" dense>
        <v-col cols="12" md="6">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-book" subtitle="" title="Reading" color="#FBD700">
                <v-card-text>Starting with recognizing simple words and phrases, children will progress towards reading and understanding full sentences and stories with confidence.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-pencil" subtitle="" title="Writing" color="#FBD700">
                <v-card-text>Starting with writing and spelling simple words, children will then progress to learning how to write short stories.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-speaker" subtitle="" title="Listning" color="#FBD700">
                <v-card-text>Starting with listening to short conversations, children will progress to being able to understand simple English stories.</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card append-icon="mdi-check" class="mx-auto hover-card" prepend-icon="mdi-chat" subtitle="" title="Speaking" color="#FBD700">
                <v-card-text>Starting with answering simple questions, children will progress towards expressing themselves fluently through speech.</v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <section class="why-choose-us" ref="statsSection" style="background-color: #5E0000 !important;">
        <h2 class="title mt-5" style="color: #FBB700" data-aos="fade-up" data-aos-duration="3000">Course Details
        </h2>
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

    <v-row justify="center" align="center" class="my-5">
        <v-btn rounded="xl" size="large" color="#FBB700" class="custom-btn-contact" elevation="10" to="">
            <v-icon left>mdi-phone</v-icon>
            Contact Us
        </v-btn>
    </v-row>

    <v-row justify="center" align="center" class="my-5">
        <h1 style="color: red;">IMPORTANT</h1>
    </v-row>
    <v-row justify="center" class="my-5">
        <h5 style="text-align: center;">Before enroling, All children Will take a Placement Test to determine which
            course is best-suited to their level of English language proficiency.</h5>
    </v-row>
</v-container>

<FooterPage></FooterPage>
</template>

<script>
import NavBar from '../NavBar.vue'
import FooterPage from '../FooterPage.vue'

//AOS Trasnsition
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
    /* Center horizontally */
    align-items: center;
    margin-top: 20px;
}

ul {
    list-style: none;
    /* Optional: remove bullet points */
    padding: 0;
    margin: 0 auto;
    /* Centers the list horizontally */
    text-align: center;
    /* Centers the text within the list items */
}

li {
    display: inline-block;
    /* Optional: makes list items align horizontally */
    margin: 0 10px;
    /* Adjust spacing between items */
}

.center-container {
    display: flex;
    justify-content: center;
    align-items: left;
    display: flex;
}

.custom-btn-contact {
    font-size: 18px;
    /* Adjust font size for readability */
    font-weight: bold;
    /* Make the text bold */
    text-transform: uppercase;
    /* Make the text uppercase */
    padding: 10px 20px;
    /* Add some padding */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Smooth hover effect */
    background-color: #FBB700;
    /* Button background color */
    color: white;
    /* Text color */
}

.custom-btn-contact:hover {
    background-color: #FFCC00;
    /* Slightly lighter shade on hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    /* Add shadow on hover */
    transform: scale(1.05);
    /* Slight zoom effect on hover */
}

.hover-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.hover-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.2);
}
</style>
