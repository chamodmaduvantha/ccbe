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
            ],
        };
    },
};
</script>

<style scoped>
.card-container {
    margin: 2rem auto;
}
</style>
