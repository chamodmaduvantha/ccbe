<template>
    <v-footer class="text-center d-flex flex-column mt-5" color="#E65100">
        <div class="footer">
            <div class="mt-2">
                <strong>Shaping the Future of Education</strong>
            </div>
            <div>
                <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" variant="text" @click="navigate(icon.link)">
                    <v-icon>{{ icon.name }}</v-icon> <!-- Display the icon -->
                </v-btn>
            </div>
            <img width="100" height="100" class="ma-auto" :src="logo" @click="navigate(icons[0].link)" />
            <div class="pt-0">
                At Cambridge Collage of British English, we are committed to empowering students with the tools they need to succeed academically and beyond.
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
            icons: [
                { name: 'mdi-instagram', link: 'https://www.instagram.com/ccbeamb' },
                { name: 'mdi-facebook', link: 'https://www.facebook.com/ccbe.ambalangoda' },
                { name: 'mdi-youtube', link: 'https://www.youtube.com/@cambridgecollegeofbritishe9360' }, // Update to a valid link
                { name: 'mdi-tiktok', link: 'https://www.tiktok.com/@cambridgecollege9' }, // Update to a valid link
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
</style>