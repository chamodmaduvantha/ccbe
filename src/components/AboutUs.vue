<template>
    <NavBar></NavBar>
    <v-container>
        <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
            <img :src="logo" alt="Company Logo" width="150" height="150" id="logo">
        </div>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">ABOUT <span class="highlight">CCBE</span>
        </h1>
        <br>
        <div class="center-container">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/AboutUs.png"
                        align="center"></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        Established on September 3rd, 2015, our institution proudly functions as a distinguished
                        Cambridge English
                        Exam Preparation Centre (CELA Centre). Recognized as a designated Cambridge Qualifications
                        registration
                        center for the esteemed British Council in Colombo, Sri Lanka, we specialize in facilitating
                        University of
                        Cambridge Examinations.
                        With a steadfast commitment to academic excellence, we provide comprehensive and tailored
                        preparatory
                        programs to empower individuals seeking success in Cambridge English exams. Our longstanding
                        association
                        with the British Council underscores our dedication to upholding the highest standards in
                        education,
                        ensuring that our students are well-equipped to excel in their academic pursuits.
                    </p>
                </v-col>
            </v-row>
        </div>

        <v-divider></v-divider>

        <div class="center-container">
            <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
                <span class="highlight">OUR VISION</span> & <span class="highlight">OUR MISSION</span>
            </h1>
        </div>
        <div class="center-container">
            <v-row class="mt-4">
                <v-col cols="12" sm="6">
                    <v-img data-aos="zoom-out" data-aos-duration="2000" src="@/assets/MissionVision.png"
                        align="center"></v-img>
                </v-col>

                <v-col cols="12" sm="6">
                    <p class="paragraph mt-3" data-aos="fade-up" data-aos-duration="3000"><b>Our Mission </b>is to excel
                        as a premier Cambridge English Assessment preparation center in Sri Lanka. We are dedicated to
                        providing an exceptional learning experience, fostering language proficiency, critical thinking,
                        and global awareness. Through innovative teaching and a commitment to student success, we aim to
                        be the preferred choice for effective Cambridge English Assessment preparation, making a lasting
                        impact on our students' academic and personal growth.</p>
                </v-col>
            </v-row>
        </div>
        <div class="justify-container">
            <v-row class="mt-4">
                <v-col cols="12">
                    <p class="paragraph mt-3" data-aos="fade-up" data-aos-duration="3000"><b>Our Vision </b>is to lead
                        as the top Cambridge English Assessment preparation center in Sri Lanka, dedicated to fostering
                        excellence in language proficiency and academic success. We aim to provide an inspiring learning
                        environment, utilizing innovative teaching methods and resources to empower students for success
                        in a globalized world.</p>
                </v-col>
            </v-row>
        </div>

        <v-divider></v-divider>
        <!-- Existing content -->

        <div class="center-container">
            <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">OUR <span class="highlight">BRANCH
                    NETWORK</span></h1>
        </div>
        <v-row justify="center" class="mt-5">
            <v-col cols="12" sm="6" md="4" v-for="(photo, index) in photos" :key="index">
                <v-card class="gallery-card" data-aos="zoom-in" data-aos-duration="2000">
                    <v-img :src="photo.src" height="200px" class="gallery-image"></v-img>
                    <v-card-title class="text-center">{{ photo.title }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>

        <div class="center-container">
            <v-img data-aos="zoom-out" data-aos-duration="2000" width="300" height="400" src="@/assets/Branch_Network.png" align="center"></v-img>
        </div>
        <div v-if="selectedOffice" class="text-center mt-5">
            <h3>{{ selectedOffice.name }}</h3>
            <p>{{ selectedOffice.address }}</p>
            <p>{{ selectedOffice.phone }}</p>
        </div>
        <div>
            <v-row justify="center" class="my-3">
                <v-btn data-aos="zoom-out" data-aos-duration="2000" rounded="xl" size="large" class="ml-1 mr-1 mb-1" color="#FBB700" v-for="(office, index) in offices" :key="index" outlined @click="selectOffice(office)">
                    {{ office.name }}
                </v-btn>
            </v-row>
        </div>

    </v-container>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterPage from './FooterPage.vue'
import ChatBot from './ChatBot.vue';

//AOS Trasnsition
import AOS from 'aos';
import 'aos/dist/aos.css';


export default {
    name: 'HelloWorld',
    components: {
        NavBar,
        FooterPage,
        ChatBot
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    methods: {
        selectOffice(office) {
            this.selectedOffice = office;
        },
    },
    data() {
        return {

            logo: require('@/assets/Logo.png'),
            offices: [
                { name: "Galle College", address: "118, Old Matara Rd, Galle, 80000", phone: "+94 91 22 37373" },
                { name: "Ambalangoda College", address: "No 97, New Rd, Ambalangoda, 80300", phone: "+94 91 2252 452" },
                { name: "Matara College", address: "No 352, Kumarathunga Mw, Matara, 81000", phone: "+94 41 2050 200" },
                { name: "Piliyandala College", address: "No Moratuwa Rd, Suwarapola, Piliyandala, 10300", phone: "+94 11 2 180 008" },
                { name: "Horana College", address: "No 149, Graceland Circular Rd, Horana, 12400", phone: "+94 2 180 008" },
            ],
            selectedOffice: null,
        }
    },

}
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
.center-container {
    display: flex;
    justify-content: center;
    align-items: left;
    display: flex;
}
</style>