<template>
<NavBar></NavBar>
<v-container>

    <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
            <img :src="logo" alt="Company Logo" width="150" height="150" id="logo">
    </div>

    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        CONTACT <span class="highlight">US</span>
    </h1>

    <h4 class="mt-2 subtitle" data-aos="fade-up" data-aos-duration="2000">
        At the heart of our commitment to communication and service lies our dedication to ensuring every interaction is meaningful, responsive, and supportive.
    </h4>

    <div class="branches mt-5" style="text-align: center;" data-aos="fade-up" data-aos-duration="2000">
    <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" md="6" v-for="branch in branches" :key="branch.name" class="branch-card mt-5">
            <h2 class="branch-name" style="color: brown;">{{ branch.name }}</h2>
            <div class="branch-info">
                <p>
                    <v-icon class="icon">mdi-map-marker</v-icon>
                    {{ branch.address }}
                </p>
                <p>
                    <v-icon class="icon">mdi-phone</v-icon>
                    <a :href="`tel:${branch.phone}`">{{ formatPhone(branch.phone) }}</a>
                </p>
                <a :href="`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(branch.message)}`" target="_blank" class="whatsapp-button">
                    <img :src="require('@/assets/icons/whatsapp.jpg')" alt="WhatsApp" />
                    <strong>Chat Via WhatsApp</strong>
                </a>
            </div>
        </v-col>
    </v-row>
</div>


</v-container>
<ChatBot></ChatBot>
<FooterPage></FooterPage>
</template>

  
<script>
import NavBar from "./NavBar.vue";
import FooterPage from "./FooterPage.vue";
import ChatBot from "./ChatBot.vue";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "ContactUs",
    components: {
        NavBar,
        FooterPage,
        ChatBot
    },
    mounted() {
        AOS.init(); // Initialize AOS animations when the component is mounted
    },
    methods: {
        formatPhone(phone) {
            // Format the phone number in a readable format
            return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "+$1 $2 $3 $4");
        },
    },
    data() {
        return {
            logo: require('@/assets/Logo.png'),
            branches: [
                {
                    name: "Ambalangoda Branch",
                    address: "123 Main Street, Ambalangoda",
                    phone: "091 2 252 452",
                    whatsapp: "+94707997501",
                    message: "Hello, I would like to inquire about your services.",
                },
                {
                    name: "Galle Branch",
                    address: "456 High Street, Galle",
                    phone: "091 22 37 37 3",
                    whatsapp: "+94705725666",
                    message: "Hi, I need assistance with my order.",
                },
                {
                    name: "Horana Branch",
                    address: "No: 149 Graceland,Circular Road,Horana,12400",
                    phone: "034 2 205 503",
                    whatsapp: "+94707997512",
                    message: "Hi, I need assistance with my order.",
                },
                {
                    name: "Matara Branch",
                    address: "No: 352,Kumarathunga Mawatha,Matara,81000",
                    phone: "041 20 50 200",
                    whatsapp: "+94707997506",
                    message: "Hi, I need assistance with my order.",
                },
                {
                    name: "Piliyandala Branch",
                    address: "No: 119 ,Moratuwa Road,Piliyandala,10300",
                    phone: "011 2 180 008",
                    whatsapp: "+94705834666",
                    message: "Hi, I need assistance with my order.",
                },
            ],
        };
    },
};
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



@media (max-width: 960px) {

    /* For smaller screens, remove zigzag effect to keep a clean layout */
    .zigzag-left,
    .zigzag-right {
        margin-top: 20px;
    }
}

.branch {
    margin: 20px 0;
    text-align: center;
}

.whatsapp-button {
    display: inline-flex;
    align-items: center;
    background-color: #25d366;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.whatsapp-button img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.whatsapp-button:hover {
    background-color: #1ebf57;
}

.small {
    font-size: 12px;
    color: #d4f1dc;
}


</style>
