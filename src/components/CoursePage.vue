<template>
    
    <NavBar></NavBar>
    
    <v-container>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
            OUR <span class="highlight">COURSES</span>
        </h1>
        <br>
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="400" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://www.parents.com/thmb/d0qdbY82J3o-2ezdehypjSNXKI0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-Preschool-Age-Stocksy-3668758-4b6915ed8fbd4d32aa00d86fc7ad43ad.jpg" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>Pre Schoolers</b></h3>
                        <div>This program is for children who know their ABCs and are just starting to read or have some familiarity with English.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/courses/preschool">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="400" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://images.kent.gov.uk/0020/171362/Primary-school-children.jpeg?tr=n-news_og" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>Young Learners (Age 6-12)</b></h3>
                        <div>Want to customize Elementor image box height? Here we have the Solution!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/course/younglearners">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="400" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://edsource.org/wp-content/uploads/2021/12/Oak_Tech_137-1024x683.jpg" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>For Schools (Age 13-18)</b></h3>
                        <div>Want to customize Elementor image box height? Here we have the Solution!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/course/forschool">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="400" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://britishway.lk/wp-content/uploads/2019/11/course_img.jpg" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>English Skills For O/L's</b></h3>
                        <div>Trying to add image box to your WordPress sites? No worries!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/course/ol">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="400" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://www.ethoseducation.lk/wp-content/uploads/2022/08/shutterstock_611097329.jpg" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>English Skills For A/L's</b></h3>
                        <div>Want to customize Elementor image box height? Here we have the Solution!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/course/al">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="400" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://specialistlanguagecourses.com/wp-content/uploads/2023/12/Depositphotos_68789187_XL-scaled-1-600x401.jpg" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>IELTS</b></h3>
                        <div>Do you know how to add Elementor image box with button?</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/course/ielts">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
// AOS Transition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'CoursePage',
    components: {
        NavBar,
        FooterPage,
        ChatBot
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    data() {
        return {

        };
    }
};
</script>

<style>
.title {
    color: #FBB700;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.cardtext {
    color: #d37400;
    font-size: 15px;
    text-align: justify;
}

.image-pop-up {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.v-card:hover .image-pop-up {
    transform: scale(1.1); /* Pop-up effect */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Shadow for more depth */
}

.v-card {
    position: relative;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.v-card:hover {
    transform: translateY(-5px); /* Slight lift for the card */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Card shadow */
}
</style>
