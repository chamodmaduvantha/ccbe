<template>
    <DigitalLinerPage></DigitalLinerPage>
<NavBar></NavBar>
<CaroselPage></CaroselPage>

<v-container>
    <!-- Logo Section -->
    <div class="logo-container mt-2" data-aos="zoom-in-up" data-aos-duration="3000">
        <img :src="logo" alt="Company Logo" width="170" height="170" id="logo" />
    </div>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        Welcome to <span class="highlight">Cambridge College of British English</span>
    </h1>
    <br />
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>Cambridge College of British English (CCBE)</b> is renowned for its commitment to providing world-class English
        courses tailored to individuals of all ages, from 5-year-old children to adults. With a dedicated mission to
        foster proficiency in reading, writing, listening, and speaking English, CCBE stands as a beacon of excellence in
        language education. Through innovative teaching methods and a nurturing environment, students embark on a
        transformative journey towards linguistic mastery. Whether honing the basics or delving into advanced concepts,
        CCBE ensures that each learner receives personalized attention and support to achieve their language learning
        goals.
    </p>
    <br />
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>Join CCBE and unlock your potential for academic success!</b>
    </p>
    <br />

    <v-divider></v-divider>
    <section class="why-choose-us" ref="statsSection" style="background-color: white; padding: 50px 0;">
        <h1 class="title mt-5 text-center" style="color: #FBB700; font-family: 'Roboto', sans-serif; font-size: 36px; font-weight: bold;" data-aos="fade-up" data-aos-duration="2000">OUR <span class="highlight">STRENGTH</span></h1>

        <v-container>
            <v-row justify="center" align="center" class="stats-row" spacing="4">
                <!-- Card 1: Happy Students -->
                <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="1000">
                    <v-card class="mx-auto" max-width="344" outlined>
                        <div class="text-overline mb-2">
                            <p class="stat-label" style="color: #5E0000; font-size: 22px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Happy Students</p>
                        </div>
                        <v-row justify="center">
                            <v-col cols="auto mb-3">
                                <v-img src="@/assets/icons/Student.png" width="100"></v-img>
                            </v-col>
                        </v-row>
                        <v-list-item-title class="text-h5 mb-1">
                            <h3 class="stat-value" style="font-size: 28px; color: Red; font-weight: bold;">{{ happyStudents }} +</h3>
                        </v-list-item-title>
                    </v-card>
                </v-col>

                <!-- Card 2: Qualified Teachers -->
                <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="1500">
                    <v-card class="mx-auto" max-width="344" outlined>
                        <div class="text-overline mb-2">
                            <p class="stat-label" style="color: #5E0000; font-size: 22px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Teachers</p>
                        </div>
                        <v-row justify="center">
                            <v-col cols="auto mb-3">
                                <v-img src="@/assets/icons/Teacher.png" width="100"></v-img>
                            </v-col>
                        </v-row>
                        <v-list-item-title class="text-h5 mb-1">
                            <h3 class="stat-value" style="font-size: 28px; color: Red; font-weight: bold;">{{ qualifiedTeachers }} +</h3>
                        </v-list-item-title>
                    </v-card>
                </v-col>

                <!-- Card 3: Years In The Field -->
                <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="2000">
                    <v-card class="mx-auto" max-width="344" outlined>
                        <div class="text-overline mb-2">
                            <p class="stat-label" style="color: #5E0000; font-size: 22px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;">Years In The Field</p>
                        </div>
                        <v-row justify="center">
                            <v-col cols="auto mb-3">
                                <v-img src="@/assets/icons/Year.png" width="100"></v-img>
                            </v-col>
                        </v-row>
                        <v-list-item-title class="text-h5 mb-1">
                            <h3 class="stat-value" style="font-size: 28px; color: Red; font-weight: bold;">{{ yearsInField }} +</h3>
                        </v-list-item-title>
                    </v-card>
                </v-col>

                <!-- Card 4: Branches -->
                <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="2500">
                    <v-card class="mx-auto" max-width="344" outlined>
                        <div class="text-overline mb-2">
                            <p class="stat-label" style="color: #5E0000; font-size: 22px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Branchers</p>
                        </div>
                        <v-row justify="center">
                            <v-col cols="auto mb-3">
                                <v-img src="@/assets/icons/Building.png" width="100"></v-img>
                            </v-col>
                        </v-row>
                        <v-list-item-title class="text-h5 mb-1">
                            <h3 class="stat-value" style="font-size: 28px; color: Red; font-weight: bold;">{{ branches }}</h3>
                        </v-list-item-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>

    <br>

    <v-divider></v-divider>
    <br>
    <!-- News Feed Section -->
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">News & <span class="highlight">Events</span></h1>
    <NewsSliderPage></NewsSliderPage>
    <br>

    <v-divider></v-divider>

    <br>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        <span class="highlight">TESTIMONIALS</span>
    </h1>
    <TestimologyPage></TestimologyPage>

    <br />

</v-container>
<ChatBot></ChatBot>
<FooterPage></FooterPage>
</template>

<script>
import CaroselPage from './CaroselPage.vue';
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue'
import NewsSliderPage from './NewsSliderPage.vue';
import TestimologyPage from './TestimologyPage.vue'
import DigitalLinerPage from './DigitalLinerPage.vue';

export default {

    name: 'HelloWorld',
    components: {
        CaroselPage,
        NavBar,
        FooterPage,
        ChatBot,
        NewsSliderPage,
        TestimologyPage,
        DigitalLinerPage
    },
    data() {
        return {
            model: null,
            happyStudents: 0,
            qualifiedTeachers: 0,
            yearsInField: 9,
            branches: 5,
            items: [{
                    src: require("../assets/cards/11.jpg"),
                    title: "Title",
                    subtitle: "Master English with Confidence",
                    description: "Empowering learners with world-class English language education for all ages.",
                },
                {
                    src: require("../assets/cards/22.jpg"),
                    subtitle: "Your Gateway to English Excellence",
                    description: "Your partner in mastering English through expert guidance and innovative methods.",
                },
                {
                    src: require("../assets/cards/33.jpg"),
                    subtitle: "Transforming Lives Through Language",
                    description: "Transforming language skills with personalized programs for academic and professional success.",
                },
                {
                    src: require("../assets/cards/44.jpg"),
                    subtitle: "Achieve Success with CCBE",
                    description: "Unlock your potential in reading, writing, listening, and speaking at CCBE.",
                },
            ],
            testimonials: [{
                    name: "Alice Johnson",
                    message: "The courses at CCBE have greatly improved my confidence and skills in English. Highly recommend!",
                    rating: 5,
                    image: require('@/assets/cards/11.jpg'),
                },
                {
                    name: "Michael Brown",
                    message: "The teachers here are exceptional, and the learning environment is top-notch.",
                    rating: 4,
                    image: require('@/assets/cards/22.jpg'),
                },
                {
                    name: "Sophia Lee",
                    message: "I loved the personalized attention and innovative teaching methods at CCBE.",
                    rating: 5,
                    image: require('@/assets/cards/33.jpg'),
                },
            ],
            logo: require('@/assets/Logo.png'),
        };
    },
    mounted() {
        // Trigger the animations for numbers when the stats section comes into view
        const options = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.5, // 50% of the element must be in view
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger the counting animation when the section is in view
                    this.animateCount("happyStudents", 10000, 2000);
                    this.animateCount("qualifiedTeachers", 150, 1500);
                    this.animateCount("yearsInField", 9, 1000); // Animate yearsInField
                    this.animateCount("branches", 5, 800); // Animate branches
                    observer.disconnect();
                }
            });
        }, options);

        // Start observing the "Why Choose Us" section
        observer.observe(this.$refs.statsSection);
    },
    methods: {
        animateCount(property, target, duration) {
            const current = this[property];
            const step = (target - current) / (duration / 16); // Adjust step calculation based on target range
            const interval = setInterval(() => {
                if (this[property] < target) {
                    this[property] = Math.min(this[property] + step, target);
                    // Round the value to remove decimal points
                    this[property] = Math.round(this[property]);
                } else {
                    // Ensure the final value is set as an integer
                    this[property] = Math.round(this[property]);
                    clearInterval(interval);
                }
            }, 16); // 16ms for ~60 FPS
        },
    },
};
</script>

<style>

.title {
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

.professionals-grid {
    margin-top: 30px;
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

.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
}

.horizontal-scroll::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}

.why-choose-us {
    padding: 40px 20px;
    background-color: #f9f9f9;
}

.section-title {
    font-size: 2.5rem;
    color: #272643;
    font-family: "Arial", sans-serif;
    margin-bottom: 20px;
}

.stats-row {
    margin-top: 20px;
}

.stat-item {
    padding: 20px;
}

.stat-value {
    font-size: 2rem;
    color: #120150;
    font-weight: bold;
    transition: all 0.3s ease-out;
}

.stat-label {
    font-size: 1.2rem;
    color: #6c757d;
}

.carousel-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
}

.carousel-image {
    max-width: 120px;
    max-height: 120px;
    object-fit: cover;
    border-radius: 10px;
}

.why-choose-us {
    padding: 50px 0;
    background-color: #5E0000;
}

.title {
    font-family: 'Roboto', sans-serif;
    color: #FBB700;
    text-transform: uppercase;
    font-weight: bold;
}

.stats-row .v-col {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.stats-card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.stats-card-img {
    object-fit: cover;
    border-bottom: 3px solid #FBB700;
}

.card-content {
    padding: 20px;
}

.stat-value {
    font-size: 28px;
    color: #FBB700;
    font-weight: bold;
}

.stat-label {
    font-size: 18px;
    color: rgb(20, 10, 10);
    font-family: 'Roboto', sans-serif;
}

.v-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.stats-row .v-col:hover {
    transform: scale(1.05);
    opacity: 0.9;
}
</style>
