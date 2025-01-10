<template>
    <NavBar></NavBar>
    <v-container>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000"><span class="highlight">PRE SCHOOL</span>
        </h1>
        <br>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Course Overview</h1>
        <br>
        <div class="center-container">
            <v-row>
                <v-col cols="12" sm="6" class="mt-3">
                    <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/course/PS1.jpg" align="center"
                        elevation="23"></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        Our institution boasts an exceptional team of experienced teaching staff dedicated to nurturing
                        the academic and personal growth of every student. Comprising seasoned educators with diverse
                        backgrounds and expertise, our faculty brings a wealth of knowledge and passion to the
                        classroom.

                        With years of teaching experience under their belts, they possess a deep understanding of
                        pedagogical principles and best practices, ensuring that each lesson is tailored to meet the
                        unique needs of every learner.

                        Beyond delivering curriculum content, our instructors serve as mentors, guiding students on
                        their educational journey and instilling in them a lifelong love for learning. Through their
                        unwavering commitment to excellence, our teaching staff inspires students to reach their full
                        potential and achieve academic success.
                    </p>
                </v-col>
            </v-row>

        </div>

        <v-divider></v-divider>

        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Learning Outcomes</h1>
        <br>
        <div class="center-container">
            <v-row>
                <v-col cols="12" sm="6" class="mt-3">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        Our learning outcomes are carefully designed to lay a strong foundation for future academic
                        success and personal development of pre schoolers. Through our curriculum, young learners engage
                        in a variety of activities aimed at promoting cognitive, social, and emotional growth. By the
                        end of the program, preschoolers will have developed essential pre-reading and pre-writing
                        skills, including letter recognition, phonemic awareness, and basic letter formation.

                        Additionally, they will have acquired foundational math concepts such as counting, sorting, and
                        basic shapes. Furthermore, our curriculum fosters social skills such as cooperation,
                        communication, and empathy through interactive play and group activities. Overall, our goal is
                        to nurture a love for learning and provide preschoolers with the skills and confidence they need
                        to thrive in kindergarten and beyond.
                    </p>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/course/PS3.jpg" align="center"
                        class="mt-5" elevation="23"></v-img>
                </v-col>
            </v-row>
        </div>

        <v-divider></v-divider>

        <section class="why-choose-us" ref="statsSection" style="background-color: #5E0000 !important;">
            <h2 class="title mt-5" style="color: #FBB700" data-aos="fade-up" data-aos-duration="3000">Course Details
            </h2>
            <v-container>
                <v-row justify="center" align="center" class="stats-row">
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/timer.gif"
                                    max-width="100" height="100"></v-img>
                            </v-row>
                            <h5 class="mt-2"><b>Course Duration</b></h5>
                            <p>Contact us to find out</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/calender.gif"
                                    max-width="100" height="100"></v-img>
                            </v-row>
                            <h5 class="mt-2"><b>Class Duration</b></h5>
                            <p>Contact us to find out</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <v-img data-aos="zoom-out" class="mt-5" src="@/assets/animation/fee.gif" max-width="100"
                                    height="100"></v-img>
                            </v-row>
                            <h5 class="mt-2"><b>Course Fee</b></h5>
                            <p>Contact us to find out</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" class="text-center">
                        <v-card class="mx-auto" width="200" height="200" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1500" outlined>
                            <v-row justify="center" align="center">
                                <h1 class="mt-5"><b>Age</b></h1>
                            </v-row>
                            <v-row justify="center" align="center">
                                <h5 class="mt-2"><b>Age Group</b></h5>
                            </v-row>
                            <v-row justify="center" align="center">
                                <p>5-6 Years</p>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>


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
            <h5 style="text-align: center;">Before enroling, All children Will take a Placement Test to determine which course is best-suited to their level of English language proficiency.</h5>
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
    name: 'PreschoolPage',
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
  font-size: 18px; /* Adjust font size for readability */
  font-weight: bold; /* Make the text bold */
  text-transform: uppercase; /* Make the text uppercase */
  padding: 10px 20px; /* Add some padding */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
  background-color: #FBB700; /* Button background color */
  color: white; /* Text color */
}

.custom-btn-contact:hover {
  background-color: #FFCC00; /* Slightly lighter shade on hover */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Add shadow on hover */
  transform: scale(1.05); /* Slight zoom effect on hover */
}

</style>