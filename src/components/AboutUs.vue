<template>
    <NavBar></NavBar>
    <v-container>
        <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
            <img :src="logo" alt="Company Logo" width="150" height="150" id="logo">
        </div>
        <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            About Us
        </h1>
        <br>
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
            <b>Welcome to Kularathna Education,</b> a premier educational initiative founded and led by Mr. S.K. Janith Charuka Kularathna. With a solid academic background, Mr. Kularathna holds a Bachelor of Science degree from the University of Peradeniya, specializing in Mathematics and Physics.

            At Kularathna Education, we are committed to empowering students to achieve their fullest potential, particularly in mathematics. We specialize in providing expert guidance for the G.C.E. Advanced Level Combined Mathematics syllabus, ensuring students are equipped with effective strategies for mastering complex concepts. Our approach goes beyond just preparing students for exams; we focus on fostering a deep understanding of the subject, nurturing critical thinking, and helping students develop problem-solving skills that will benefit them long after they complete their studies.
        </p>
        <br>

        <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            What We Offer
        </h1>

        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000"></p>
        <ul>
            <li><b>Advanced Level Combined Mathematics Tuition</b> <br>Expert lessons tailored to help students excel in
                the G.C.E. Advanced Level exam.</li><br><br>
            <li><b>Secondary School Mathematics Tuition</b> <br>Specialized guidance for students in secondary school to
                build a strong foundation in mathematics.</li><br><br>
            <li><b>Personalized Approach</b> <br>Individualized attention to cater to the unique learning needs of each
                student.</li>
        </ul>
        
        <br>
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
            At Kularathna Education, we strive to create a supportive and inspiring learning environment where every student can thrive.
        </p>

        <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            Contact Us
        </h1>
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000"></p>
        <ul>
            <li><b>Email: </b>kularathna.janith@gmail.com</li>
            <li><b>Phone: </b>+94 76 724 3586</li>
            <li><b>Business Registration No: </b>24102002</li>
            <li><b>Start Date: </b> Since January 2022</li>
        </ul>
        

        <h3 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            Join us at Kularathna Education to embark on a journey of academic excellence in mathematics!
        </h3>


        <!-- Existing content -->

        <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            Our Gallery
        </h1>
        <v-row justify="center" class="mt-5">
            <v-col cols="12" sm="6" md="4" v-for="(photo, index) in photos" :key="index">
                <v-card class="gallery-card" data-aos="zoom-in" data-aos-duration="2000">
                    <v-img :src="photo.src" height="200px" class="gallery-image"></v-img>
                    <v-card-title class="text-center">{{ photo.title }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>


    </v-container>

    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterPage from './FooterPage.vue'

//AOS Trasnsition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'HelloWorld',
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
            photos: [
                
            ]
        }
    },

}
</script>

<style>
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
    text-align: center;
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
    list-style: none; /* Optional: remove bullet points */
    padding: 0;
    margin: 0 auto; /* Centers the list horizontally */
    text-align: center; /* Centers the text within the list items */
  }
  li {
    display: inline-block; /* Optional: makes list items align horizontally */
    margin: 0 10px; /* Adjust spacing between items */
  }
</style>