<template>
    <div>
        <NavBar></NavBar>
        <v-container>
            <v-row align="center" justify="center" class="" style="flex-direction: column;">
                <v-col>
                    <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000" style="color: #272643;">
                        Tutorials
                    </h1>
                </v-col>

                <!-- Table for Lessons -->
                <v-col>
                    <v-data-table-server class="elevation-1 table-responsive">
                        <thead>
                            <tr>
                                <th class="table-header">No</th>
                                <th class="table-header">Lesson</th>
                                <th class="table-header">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(document, index) in documents" :key="document.link">
                                <td>{{ index + 1 }}</td> <!-- No column -->
                                <td>{{ document.name }}</td> <!-- Lesson column -->
                                <td>
                                    <v-btn color="green" @click="downloadPdf(document.link)">
                                        <v-icon>mdi-download</v-icon> Download
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-data-table-server>
                </v-col>

                <!-- Display selected PDF -->
                <v-col v-if="selectedPdf" style="width: 100%; height: 80vh;">
                    <object :data="selectedPdf" type="application/pdf" style="width: 100%; height: 100%;">
                        <p>PDF cannot be displayed. <a :href="selectedPdf" target="_blank">Click here to download.</a>
                        </p>
                    </object>
                </v-col>

            </v-row>
        </v-container>
        <FooterPage></FooterPage>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'TutesAndNotes',
    components: {
        NavBar,
        FooterPage,
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            selectedPdf: null, // Holds the currently selected PDF link
            documents: [
                { name: 'Equilibrium', link: 'https://drive.google.com/file/d/1_E_gA0XDpMmJXzA5a39ZIaXu36Ox6CAo/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Work, strength, ability Theory', link: 'https://drive.google.com/file/d/1jXJCzC-6gx-F4KMejzNy3Uldcd6-EMoL/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Rectilinear Motion', link: 'https://drive.google.com/file/d/16T7_3olCKH20Gq6BuOH9P_YRrLyvbU6U/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Relative Motion, ability Theory', link: 'https://drive.google.com/file/d/1aT3oM7s1s0l01RblmJlxAdr4Nk6smDEt/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Circular motion', link: 'https://drive.google.com/file/d/10n4CEr9od8CSN86it_59wbdOZk34QguK/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Simple Harmonic Motion', link: 'https://drive.google.com/file/d/1psGSqGV_xARNVZfDC75Z_IOPWeYpohdY/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Coplaner Force Systems', link: 'https://drive.google.com/file/d/1JVL9spScYN9uC003aOSqgwjTu4R9KFLA/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Vectors', link: 'https://drive.google.com/file/d/1cyYi0SFlYg9Z0fPc7H0ZRb2Htj8vpAyZ/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Heavy Rods', link: 'https://drive.google.com/file/d/1ttVQToJujVHcWLixRdM_Uxkzz-NOhTD2/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Light Rods Frameworks', link: 'https://drive.google.com/file/d/1GSMgrIJwSIGGkyUSpF_SXfK27-nlkLvF/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Center of Gravity', link: 'https://drive.google.com/file/d/1v4aIeNeqIUXVealMeTrfE2I4TGq3ZtoG/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Probability', link: 'https://drive.google.com/file/d/1-gH0PAQxeb8NQpP3TmY07dbeOlq7KMKl/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Statistics', link: 'https://drive.google.com/file/d/1xH3Qb8S10qfk8PjgqgSf4if3bg-e_tK4/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Straight Lines', link: 'https://drive.google.com/file/d/1R12WMZ1BPJYerEp99785b9XJntON3bD2/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Trigonometry', link: 'https://drive.google.com/file/d/1a8BX69bVEUIsWmBku0rTC3_WKiOd_QrY/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Grads', link: 'https://drive.google.com/file/d/1c5R0eEgE8bVJlSdQB8kjUzz58z5jubzP/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Integration Tutorial', link: 'https://drive.google.com/file/d/1kNKR9JgXgZ5RLT6ToBjbqeatVOoh-DHG/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Permutations and combinations Answers', link: 'https://drive.google.com/file/d/1_x-tyQ-hkxWD0wjCZ82i5O0QYL1O6R7A/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Polynomial functions & square functions', link: 'https://drive.google.com/file/d/1nI6q81W_h-8GJr24WTg6KUZ50OcfoEhC/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'SCHOOL PEPERS MCQ', link: 'https://drive.google.com/file/d/1-eLBx9umE780S2yH4vT3Mujb3lbjOl3U/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Differentation tute 01 & 02', link: 'https://drive.google.com/file/d/1jllpggEijyGE0vOBmEyRRhhKGRGMQWA6/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Binomial Expansion TUTE 02', link: 'https://drive.google.com/file/d/1F7bdwlQ-yW32DNHVQyW6Jj5n7UqSLe5s/view?usp=drive_link', icon: 'mdi-file' },
                { name: 'Matrices, Determinationts & Complex Numbers', link: 'https://drive.google.com/file/d/13YGrZ6X861n3rmGWg6enlTsukt2zveCN/view?usp=drive_link', icon: 'mdi-file' },
            ],
        };
    },
    methods: {
        downloadPdf(link) {
            // Create a hidden <a> tag to trigger the download
            const a = document.createElement('a');
            a.href = link;
            a.download = link.substring(link.lastIndexOf('/') + 1); // Use the file name from the link
            a.click(); // Trigger the download
        },
    },
};
</script>

<style>
.page-title {
    font-size: 3rem;
    font-weight: bold;
    color: rgb(2, 58, 16);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-align: center;
}

object {
    border: none;
}

.table-responsive {
    width: 100%;
    max-width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    overflow-x: auto;
    /* Ensures the table scrolls horizontally on smaller screens */
}

.table-header {
    text-align: left;
    padding: 12px;
    font-weight: bold;
}

.v-simple-table th,
.v-simple-table td {
    padding: 15px 20px;
    text-align: center;
}

.v-btn {
    padding: 8px 16px;
    font-size: 14px;
}

@media (max-width: 600px) {
    .v-simple-table {
        font-size: 14px;
    }

    .table-header {
        font-size: 12px;
    }
}
</style>
