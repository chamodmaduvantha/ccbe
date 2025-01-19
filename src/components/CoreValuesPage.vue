<template>
    <NavBar></NavBar>
    <v-container>
        <div>
            <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
                OUR <span class="highlight">CORE VALUES</span>
            </h1>

            <h4 class="mt-2" data-aos="fade-up" data-aos-duration="2000">
                At the heart of our institution lie the following core values, each meticulously cultivated to foster an
                environment of academic excellence.
            </h4>

            <v-row justify="center" class="mt-5" data-aos="fade-up" data-aos-duration="3000">
                <v-col v-for="(value, index) in coreValues" :key="index" cols="12" md="6" lg="4"
                    :class="{ 'zigzag-right': index % 2 === 1, 'zigzag-left': index % 2 === 0 }">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="mx-auto" color="grey-lighten-4" max-width="500" v-bind="props">
                            <v-img :aspect-ratio="16 / 9" :src="value.image" cover>
                                <v-expand-transition>
                                    <div v-if="isHovering"
                                        class="d-flex transition-fast-in-fast-out bg-yellow-darken-2 v-card--reveal text-h6"
                                        style="height: 100%; display: flex; justify-content: center; align-items: center; text-align: center;">
                                        {{ value.description }}
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <v-card-text class="pt-6">
                                <h3 class="text-h5 font-weight-bold text-brown-darken-4 mb-2">
                                    {{ value.title }}
                                </h3>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </div>
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
    name: 'CoreValues',
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
            coreValues: [
                {
                    image: require('@/assets/coreValues/CV1.jpg'),
                    title: 'State-of-the-Art Facilitated Classrooms',
                    description: 'Our commitment to providing a conducive learning atmosphere is reflected in our state-of-the-art classrooms equipped with cutting-edge technology and resources.'
                },
                {
                    image: require('@/assets/coreValues/CV2.jpg'),
                    title: 'Highly Qualified Lecture Panel',
                    description: 'We take pride in our team of exceptionally qualified educators who bring extensive expertise to the classroom, ensuring a robust and enriching learning experience for our students.'
                },
                {
                    image: require('@/assets/coreValues/CV3.jpg'),
                    title: 'Parent and Student Supportive Administrative Panel',
                    description: 'Our administrative team is dedicated to fostering strong partnerships with parents and students, offering unwavering support and guidance throughout their educational journey.'
                },
                {
                    image: require('@/assets/coreValues/CV4.jpg'),
                    title: 'Monthly Evaluation of Student Skills',
                    description: 'To track and enhance student progress, we conduct comprehensive evaluations of their skills on a monthly basis, enabling personalized development plans.'
                },
                {
                    image: require('@/assets/coreValues/CV5.jpg'),
                    title: 'Continuous Quality Audit',
                    description: 'We adhere to a rigorous system of continuous quality audits, reinforcing our commitment to maintaining the highest standards of education and service delivery.'
                },
                {
                    image: require('@/assets/coreValues/CV6.jpg'),
                    title: 'Student-Centric Classroom Environment',
                    description: 'Our classrooms are designed to be student-centric, with a focus on developing the four essential skills, ensuring a holistic approach to education.'
                },
                {
                    image: require('@/assets/coreValues/CV7.jpg'),
                    title: 'Excellent Student Results',
                    description: 'Our dedication to academic excellence is evidenced by the consistently outstanding results achieved by our students in various assessments and examinations.'
                },
                {
                    image: require('@/assets/coreValues/CV8.jpg'),
                    title: 'Child Safeguarding, First Aid Training, and Fire Safety',
                    description: 'We prioritize the safety and well-being of our students through the implementation of robust child safeguarding processes, a staff trained in first aid, and stringent fire safety measures to create a secure learning environment.'
                },
            ]
        };
    }
};
</script>


<style>

.title {
    font-family: 'Roboto', sans-serif;
    color: #FBB700;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3px;
}

.highlight {
    color: #FF5F15;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
}
.name {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 10px 0;
}

.title-intro {
    font-family: "Arial", sans-serif;
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
    align-items: center;
    margin-top: 20px;
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

h4 {
    justify-content: center;
    text-align: center;
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

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}

.zigzag-left {
    margin-top: 20px;
    /* Adjust spacing for the zigzag effect */
}

.zigzag-right {
    margin-top: 60px;
    /* Create staggered spacing */
}

@media (max-width: 960px) {

    /* For smaller screens, remove zigzag effect to keep a clean layout */
    .zigzag-left,
    .zigzag-right {
        margin-top: 20px;
    }
}

</style>