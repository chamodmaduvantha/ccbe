<template>
<v-footer class="text-center d-flex flex-column mt-5" color="#FFCC00">
    <div class="footer">
        <div class="mt-2">
            <strong class="title-footer">Shaping the Future of Education</strong>
        </div>
        <div class="mt-2">
            <strong class="Contact">Hot Line : 071 3 999 666 | Email : info@ccbe.lk </strong>
        </div>
        <div>
            <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" variant="text" @click="navigate(icon.link)">
                <v-icon>{{ icon.name }}</v-icon> <!-- Display the icon -->
            </v-btn>
        </div>
        <div class="logo-container">
            <v-divider vertical></v-divider>
            <img width="150" height="150" class="logo ml-4 mr-4" :src="logo" />
            <v-divider vertical></v-divider>
            <img width="200" height="150" class="logo ml-4 mr-4" :src="lable1" />
            <v-divider vertical></v-divider>
            <img width="250" height="150" class="logo ml-4 mr-4" :src="lable2" />
            <v-divider vertical></v-divider>
        </div>
        <div class="pt-0 mt-3">
            At Cambridge Collage of British English, we are committed to empowering students with the tools they
            need to succeed academically and beyond.
            <br>Copyright © 2025 Cambridge Collage of British English. All rights reserved.
        </div>
    </div>
</v-footer>
</template>

<script>
export default {
    data() {
        return {
            logo: require('@/assets/Logo.png'),
            lable1: require('@/assets/WEP.png'),
            lable2: require('@/assets/IELTS.png'),
            icons: [{
                    name: 'mdi-instagram',
                    link: 'https://www.instagram.com/ccbeamb'
                },
                {
                    name: 'mdi-facebook',
                    link: 'https://www.facebook.com/ccbe.ambalangoda'
                },
                {
                    name: 'mdi-youtube',
                    link: 'https://www.youtube.com/@cambridgecollegeofbritishe9360'
                }, // Update to a valid link
                {
                    name: 'mdi-tiktok',
                    link: 'https://www.tiktok.com/@cambridgecollege9'
                }, // Update to a valid link
            ]
        };
    },
    methods: {
        navigate(link) {
            window.open(link, '_blank'); // Open the link in a new tab
        }
    }
}
</script>

<style>
.footer {
    justify-content: center;
}

.title-footer {
    font-size: 25px;
}

.logo-container {
    width: 100vw;
    display: inline-block;
    background: white; /* White tape background */
    padding: 10px; /* Adds space around the logo to simulate tape */
    border-radius: 10px; /* Rounds the edges of the "tape" */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
}
</style>
