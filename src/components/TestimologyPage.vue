<template>
<div class="card-container">
    <v-container>
        <v-row>
            <v-col v-for="(tweet, index) in tweets" :key="index" cols="12" md="6" lg="4">
                <v-card class="mx-auto" color="yellow-darken-3" max-width="400" height="auto" title="YouTube">

                    <template v-slot:prepend>
                        <v-icon size="x-large">mdi-youtube</v-icon>
                    </template>

                    <v-card-text class="text-h5 py-2">
                        "{{ tweet.text }}"
                    </v-card-text>

                    <v-card-actions>
                        <v-list-item class="w-100">
                            <template v-slot:prepend>
                                <v-avatar color="amber-accent-4" :image="tweet.userAvatar"></v-avatar>
                            </template>

                            <v-list-item-title>{{ tweet.userName }}</v-list-item-title>
                            <v-list-item-subtitle>{{ tweet.userRole }}</v-list-item-subtitle>
                            <a :href="tweet.link" target="_blank" rel="noopener noreferrer">
                                <v-icon>mdi-link</v-icon>
                            </a>
                            <template v-slot:append>
                            </template>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
<div class="video-container">
    <v-container>
        <v-row>
            <v-col v-for="(video, index) in videos" :key="index" cols="12" md="6" lg="4">
                <div class="video-frame">
                    <iframe :src="video.link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            tweets: [{
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
};
</script>

<style scoped>
.card-container {
    margin: 2rem auto;
}
.video-container {
  margin: 2rem auto;
}

.video-frame {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
