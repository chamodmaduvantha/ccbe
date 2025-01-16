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
                    <v-icon>{{ icon.name }}</v-icon>
                </v-btn>
            </div>
            <div class="logof-container">
                <v-row justify="center" align="center" class="px-4">
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="logo" alt="Logo" />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="lable1" alt="Label 1" />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="lable2" alt="Label 2" />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="lable3" alt="Label 3" />
                    </v-col>
                </v-row>
            </div>
            <div class="pt-0 mt-3">
                At Cambridge Collage of British English, we are committed to empowering students with the tools they
                need to succeed academically and beyond.
                <br />Copyright © 2025 Cambridge Collage of British English. All rights reserved.
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
            lable3: require('@/assets/CES.png'),
            icons: [
                { name: 'mdi-instagram', link: 'https://www.instagram.com/ccbeamb' },
                { name: 'mdi-facebook', link: 'https://www.facebook.com/ccbe.ambalangoda' },
                { name: 'mdi-youtube', link: 'https://www.youtube.com/@cambridgecollegeofbritishe9360' },
                { name: 'mdi-tiktok', link: 'https://www.tiktok.com/@cambridgecollege9' },
            ],
        };
    },
    methods: {
        navigate(link) {
            window.open(link, '_blank'); // Open the link in a new tab
        },
    },
};
</script>

<style>
.footer {
    justify-content: center;
}

.title-footer {
    font-size: 25px;
}

.logof-container {
    width: 100%;
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.responsive-logo {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
    padding: 5px;
}

.v-footer {
    padding-bottom: 20px;
}
</style>
