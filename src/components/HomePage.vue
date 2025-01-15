<template>
<NavBar></NavBar>
<CaroselPage></CaroselPage>


<v-container>
    <!-- Logo Section -->
    <div class="logo-container mt-2" data-aos="zoom-in-up" data-aos-duration="3000">
        <img :src="logo" alt="Company Logo" width="120" height="120" id="logo" />
    </div>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        Welcome to the <span class="highlight">Cambridge College of British English</span>
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
    <h2 class="title mt-5 text-center" style="color: #FBB700; font-family: 'Roboto', sans-serif; font-size: 36px; font-weight: bold;" data-aos="fade-up" data-aos-duration="2000"><span class="highlight">Why Choose Us</span></h2>
    
    <v-container>
        <v-row justify="center" align="center" class="stats-row" spacing="4">
            <!-- Card 1: Happy Students -->
            <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="1500">
                <v-card class="mx-auto stats-card" outlined>
                    <v-img src="@/assets/section/Sec1.jpg" height="200px" class="stats-card-img"></v-img>
                    <div class="card-content">
                        <h3 class="stat-value" style="font-size: 28px; color: #FBB700; font-weight: bold;">{{ happyStudents }} +</h3>
                        <p class="stat-label" style="color: white; font-size: 18px; font-family: 'Roboto', sans-serif;">Happy Students</p>
                    </div>
                </v-card>
            </v-col>

            <!-- Card 2: Qualified Teachers -->
            <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">
                <v-card class="mx-auto stats-card" outlined>
                    <v-img src="@/assets/section/Sec2.jpg" height="200px" class="stats-card-img"></v-img>
                    <div class="card-content">
                        <h3 class="stat-value" style="font-size: 28px; color: #FBB700; font-weight: bold;">{{ qualifiedTeachers }} +</h3>
                        <p class="stat-label" style="color: white; font-size: 18px; font-family: 'Roboto', sans-serif;">Qualified Teachers</p>
                    </div>
                </v-card>
            </v-col>

            <!-- Card 3: Years In The Field -->
            <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">
                <v-card class="mx-auto stats-card" outlined>
                    <v-img src="@/assets/section/Sec3.jpg" height="200px" class="stats-card-img"></v-img>
                    <div class="card-content">
                        <h3 class="stat-value" style="font-size: 28px; color: #FBB700; font-weight: bold;">{{ yearsInField }} +</h3>
                        <p class="stat-label" style="color: white; font-size: 18px; font-family: 'Roboto', sans-serif;">Years In The Field</p>
                    </div>
                </v-card>
            </v-col>

            <!-- Card 4: Branches -->
            <v-col cols="12" sm="6" md="3" class="text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">
                <v-card class="mx-auto stats-card" outlined>
                    <v-img src="@/assets/section/Sec4.jpg" height="200px" class="stats-card-img"></v-img>
                    <div class="card-content">
                        <h3 class="stat-value" style="font-size: 28px; color: #FBB700; font-weight: bold;">{{ branches }}</h3>
                        <p class="stat-label" style="color: white; font-size: 18px; font-family: 'Roboto', sans-serif;">Branches To Choose</p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</section>

    <br>

    <v-divider></v-divider>
    <br>
    <!-- News Feed Section -->
    <h2 class="title mt-5" data-aos="fade-up" data-aos-duration="3000" style="color: #5E0000;">News Feed</h2>
    <v-row class="text-center mt-5" justify="center">
        <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" md="4" class="d-flex justify-center">
            <v-card class="mx-auto" max-width="400" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <v-img :src="item.src" height="auto" width="auto" cover></v-img>
                <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
                    {{ item.subtitle }}
                </v-card-subtitle>
                <v-card-text>
                    <div>{{ item.description }}</div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <br>

    <v-divider></v-divider>

    <br>
    <h2 class="title mt-5" data-aos="fade-up" data-aos-duration="3000" style="color: #5E0000;">
        TESTIMONIALS
    </h2>
    <v-container>
        <v-row class="text-center mt-5" justify="center">
            <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" sm="6" md="4" class="d-flex justify-center">
                <v-card class="mx-auto testimonial-card" max-width="400" data-aos="fade-up" data-aos-duration="2000" elevation="23">
                    <v-img :src="testimonial.image" height="200px" class="rounded-t-lg"></v-img>
                    <v-card-title class="testimonial-title">{{ testimonial.name }}</v-card-title>
                    <v-card-text>
                        <div>{{ testimonial.message }}</div>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-rating v-model="testimonial.rating" readonly color="amber" dense></v-rating>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <br />

    <v-divider></v-divider>

    <section class="industry-professionals">
        <h2 class="title" data-aos="fade-up" data-aos-duration="3000">INDUSTRY <span class="highlight">PROFESSIONALS</span></h2>
        <p class="subtitle">
            The courses are a collaborative effort between Cambridge College of British English and industry professionals.
        </p>
        <v-row class="professionals-grid" justify="space-around" data-aos="fade-up" data-aos-duration="3000">
            <v-col v-for="professional in professionals" :key="professional.name" class="text-center" cols="12" sm="6" md="4" lg="3">
                <img :src="professional.image" :alt="professional.name" class="profile-pic">
                <h4 class="name">{{ professional.name }}</h4>
                <p class="position">{{ professional.position }}</p>
            </v-col>
        </v-row>
    </section>

</v-container>

<FooterPage></FooterPage>
</template>

<script>
import CaroselPage from './CaroselPage.vue';
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';

export default {
    name: 'HelloWorld',
    components: {
        CaroselPage,
        NavBar,
        FooterPage,
    },
    data() {
        return {
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
            professionals: [
                {
                    name: 'Dr. Sugeeth Patabendige',
                    position: 'Chief Programme Architect',
                    image: require('@/assets/cards/Teacher.jpg'),
                },
                {
                    name: 'Dr. Sugeeth Patabendige',
                    position: 'Chief Programme Architect',
                    image: require('@/assets/cards/Teacher.jpg'),
                },
                {
                    name: 'Dr. Sugeeth Patabendige',
                    position: 'Chief Programme Architect',
                    image: require('@/assets/cards/Teacher.jpg'),
                },
                {
                    name: 'Dr. Sugeeth Patabendige',
                    position: 'Chief Programme Architect',
                    image: require('@/assets/cards/Teacher.jpg'),
                },
                {
                    name: 'Dr. Sugeeth Patabendige',
                    position: 'Chief Programme Architect',
                    image: require('@/assets/cards/Teacher.jpg'),
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
.industry-professionals {
    text-align: center;
    margin: 50px 0;
}

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

.professionals-grid {
    margin-top: 30px;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #5E0000;
}

.name {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 10px 0;
}

.position {
    font-size: 0.9rem;
    color: #777;
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
    background-color: #5E0000;
}

.stat-value {
    font-size: 28px;
    color: #FBB700;
    font-weight: bold;
}

.stat-label {
    font-size: 18px;
    color: white;
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
