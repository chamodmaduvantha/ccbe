<template>
<div class="testimonials-container">
    <button @click="prevSlide" class="nav left">‹</button>
    <div class="testimonials-grid">
        <!-- Loop through all testimonials and show only the ones for the current slide -->
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card" v-show="index >= currentSlide && index < currentSlide + testimonialsPerPage">
            <img :src="testimonial.userAvatar" alt="User Avatar" class="testimonial-avatar" />
            <div class="testimonial-content">
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-user-info">
                    <h4>{{ testimonial.userName }}</h4>
                    <span>{{ testimonial.userRole }}</span>
                </div>
                <a :href="testimonial.link" target="_blank" rel="noopener noreferrer" class="testimonial-link">
                    Watch Video <v-icon>mdi-link</v-icon>
                </a>
            </div>
        </div>
    </div>
    <button @click="nextSlide" class="nav right">›</button>
</div>

<div class="video-container">
    <v-container>
        <v-row>
            <v-col v-for="(video, index) in videos" :key="index" cols="12" md="6" lg="4">
                <div class="video-frame">
                    <iframe :src="video.link" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="350" height="250"></iframe>
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0, // Start at the first slide
            testimonialsPerPage: 3, // Number of testimonials per slide
            testimonials: [{
                    text: "English became equal to my mother tongue apart from syllabus they taught so many things about life. They preapared me with an armor of English",
                    userName: "Thilina Chamod",
                    userRole: "Key Intake",
                    userAvatar: "https://i.imgur.com/UhxexQx.png",
                    link: "https://www.youtube.com/watch?v=Xb9PO6GwpYE&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=1"
                },
                {
                    text: "I could improve my language skill like reading,writing,listning and speaking. The practice exam helped us to get good grades at British Council exam",
                    userName: "Rishini Hansani",
                    userRole: "IKEY002",
                    userAvatar: "https://i.imgur.com/OVcyE5K.png",
                    link: "https://www.youtube.com/watch?v=QgsrB9n_EVQ&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=2"
                },
                {
                    text: "With the course four months during this time we were able to improve the four language skills such as reading,writing,listing & speaking.",
                    userName: "Hasanga Bingusara",
                    userRole: "IKEY002",
                    userAvatar: "https://i.imgur.com/uwGshdT.png",
                    link: "https://www.youtube.com/watch?v=X3URJtpSRNc&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=3"
                },
                {
                    text: "The dedicated instructors, comprehensive study materials, and interactive learning environment helped me achieve my desired score. I highly recommend it to anyone looking to excel in the IELTS exam",
                    userName: "Ranmina Navoth",
                    userRole: "IELTS",
                    userAvatar: "https://i.imgur.com/cvgSdvj.png",
                    link: "https://www.youtube.com/watch?v=5a-CoElEByk&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=4"
                },
                {
                    text: "I prefer to recommend the IELTS Fast Track programm in Ambalangoda CCBE as the better place to boots the band who wish to sit the IELTS examination.",
                    userName: "Prabhashini Chathurika",
                    userRole: "IELTS",
                    userAvatar: "https://i.imgur.com/CuMTG6e.png",
                    link: "https://www.youtube.com/watch?v=16SXO8RDb4k&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=5"
                },
                {
                    text: "During the course we were able to do lot of activities in English and we could in our four language skills such as reading,writing listning & speaking the evolutions.",
                    userName: "Kushani Umanda",
                    userRole: "IKEY002",
                    userAvatar: "https://i.imgur.com/112f3FQ.png",
                    link: "https://www.youtube.com/watch?v=-nBqEGHpnQs&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=6"
                },
                {
                    text: "I wanted to improve my speaking skills as I'm expecting to go abroad for my highest studies at CCBE. I was given the best guidance we learn in a stressfree environment.",
                    userName: "Jayani Bawathma",
                    userRole: "IKF004",
                    userAvatar: "https://i.imgur.com/ZX4g3yV.png",
                    link: "https://www.youtube.com/watch?v=iN5WZINOmrk&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=7"
                },
                {
                    text: "We could learn and make learned language skills through various academic activities the students entered classrooms help us to improve our confidence in English.",
                    userName: "Vinuji Mallawa Arachchi",
                    userRole: "IPET002",
                    userAvatar: "https://i.imgur.com/tWsn1IZ.png",
                    link: "https://www.youtube.com/watch?v=ZEyR-mUGTAs&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=8"
                },
                {
                    text: "End of the course I faced Cambridge assessment exams confidently. Thanks to all the preparation sessions. I would really recommend CCBE to anyone out there come joing CCBE without hesitation.",
                    userName: "Naduni Abeynayaka",
                    userRole: "FCE Intake",
                    userAvatar: "https://i.imgur.com/rHnx1oY.png",
                    link: "https://www.youtube.com/watch?v=Lsl_qzKhMjY&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=9"
                },
            ],
            videos: [{

                    link: "https://www.youtube.com/embed/uSr4JjCtge4?si=64lVPGcTuj4s4C-K",
                },
                {

                    link: "https://www.youtube.com/embed/V_riM5h2pOQ?si=LufQypwbQLuMPFF1",
                },
                {

                    link: "https://www.youtube.com/embed/uTyP39sO-Q0?si=OvU_rVvdvIeGqNOV",
                },
            ],
        };
    },
    methods: {
        nextSlide() {
            if (this.currentSlide < this.testimonials.length - this.testimonialsPerPage) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0; // Loop back to the first slide
            }
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.testimonials.length - this.testimonialsPerPage; // Go to the last slide
            }
        },
    },
};
</script>

<style scoped>
.testimonials-container {
    margin: 2rem auto;
    max-width: 1200px;
    padding: 0 1rem;
    position: relative;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.testimonial-card {
    background: #ffbd08;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.testimonial-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}

.testimonial-content {
    padding: 0.5rem;
}

.testimonial-text {
    font-size: 1rem;
    color: #333;
    margin-bottom: 1rem;
    font-style: italic;
}

.testimonial-user-info h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.testimonial-user-info span {
    font-size: 0.9rem;
    color: gray;
}

.testimonial-link {
    color: #007bff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
}

.testimonial-link v-icon {
    margin-left: 0.5rem;
}

.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
}

.nav.left {
    left: 1rem;
}

.nav.right {
    right: 1rem;
}

@media (max-width: 768px) {
    .testimonial-card {
        padding: 1rem;
    }
}
</style>
