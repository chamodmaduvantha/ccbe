<template>
    <div>
        <NavBar></NavBar>
        <v-container>
            <v-row align="center" justify="center" class="" style="flex-direction: column;">
                <v-col>
                    <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000" style="color: #272643;">
                        Papers
                    </h1>
                </v-col>

                <!-- Table for Lessons -->
                <v-col>
                    <v-data-table-server class="elevation-1 table-responsive">
                        <thead>
                            <tr>
                                <th class="table-header">No</th>
                                <th class="table-header">Lesson</th>
                                <th class="table-header">Paper</th>
                                <th class="table-header">Marking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(document, index) in documents" :key="index">
                                <td>{{ index + 1 }}</td> <!-- No column -->
                                <td>{{ document.name }}</td> <!-- Lesson column -->
                                <td>
                                    <v-btn color="green" :href="document.paperLink" target="_blank">
                                        <v-icon>mdi-download</v-icon>
                                    </v-btn>
                                </td>
                                <td>
                                    <v-btn color="blue" :href="document.markingLink" target="_blank">
                                        <v-icon>mdi-download</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-data-table-server>
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
    name: 'PapersPage',
    components: {
        NavBar,
        FooterPage,
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            documents: [
                {
                    name: '2022 AL - Test 01 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1EizU2w9whSPwPALD__VRPkga9pIWAg1V/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1o6XY_MylWko-eI7m8vea9JH2cpOznGkz/view?usp=drive_link', 
                },
                {
                    name: '2022 AL - Test 02 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1HD7KF_rRp5kUxbgrtS3N2aTdzFzeNoli/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Zk_iNUvJL24BUI8HNt0v6IDUHc4h0k9M/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 03 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1ZZTGRdUZ8nnglpK03LykEr-3IOcYXQH5/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1rbDQ08pt5GVgYePQR2hvy-GAyJ91KQdo/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 04 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1b4e-XfgbBCNesv5pXOWunuihpkN-Fq40/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Y6AMOp4RmQwrO7k-fb7RQd231ZenS28q/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 05 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1jNtXHn7z7U0WLYrzYM9b9QcZ5tykjOJI/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1PgHA1v4XWDZ7JkRwADrUJFs5wKsBR6uc/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 06 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1Ih6KETlBK3Ee7A0YjMhc6bTZ25ZCNdtW/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1dyfQWYqPxB-hJuHw7vVsr_MEqBPD3uVG/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 07 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1Ukg3ZoW-jgmg0hTY2RNyOxrtxPZBv325/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/19bj0BfGmAE1zMsblAxBqbo1MKSHuvw4U/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 08 - Applied',
                    paperLink: 'https://drive.google.com/file/d/18s7aB4XigAonOIQR5RCS17SjhrVpGwG3/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1-ypc2rLWR_LpXPcEXWQChBQAbckM8JKV/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 09 - Applied',
                    paperLink: 'https://drive.google.com/file/d/17NgfHKUV0Gs_qpAb3zMkgGx3sqUJYCcy/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1uiNin1hJ40Z_1dPX6eStpZwvck9ddwsR/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 10 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1S-mqxiAZJtv4Mg8MUKgouJSpNT2EadOf/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Lu-qk6wCm6F85OmIFlx5T6KPzeUxZn06/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 01 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1wfKrKLzp9Bl2KDsQNWhxoMKPbLjYULRd/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Yv-17f3G0espdNq2nAwW_nQ7hFjokVB_/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 02 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1vhezaULDyrIR7LDC2rBG3ElkpntYzitb/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Q5uIcKagr2qLCyT3d840x1913Q8JiWiu/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 03 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1z_IWud7HkCWvJp9guHeNMIK7k1SbCzn4/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1AP3YA_QNgI1YNPQbXJWeWEmwto-xB4Zf/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 04 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1yiGCWom5Yl_dhPpKjq4htN2WH61k_TU1/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1cl_bB33fTImKvqWaikaWtBnafVczmDyR/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 05 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1eI1WWokFA6atbkSHfsDkjOoev1DFSpAD/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1cXTlCQFyQhPW5jdgKjA1J1SfZzg25sj_/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 06 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1wdsa2nM2oozVAnWVxG4SOJ__Abs8arfO/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1wDU-FtD3nM6YjDycgEic3r-Ysjy1tfVo/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 07 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1gsqpX_C6juGP4tqk8x39kk3ocmozxB3O/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1oFAx-TMHrQjfFj2YFIojCizD1lIO9Fj-/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 08 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1Jn1W2_Z_q7ZLkDgDzdHvyWGIMsJyX71O/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/19fFn1_t-CsnhJ6duYs4ZS2yMC-BYdz1I/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 01 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1h9uNMj00xgMO8I_7kEzYZUsbNBIqgsKH/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1RI5zxSCS4x2hV9Xjv1l_7zSMeo3pjAvj/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 02 - Applied',
                    paperLink: 'https://drive.google.com/file/d/14xvS3KgPsP7B9KqoRX2jMvxMV0jVeWZv/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1NKG9Uneswoo-Ac1bcEaRTBIlr4jFhh8M/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 03 - Applied',
                    paperLink: 'https://drive.google.com/file/d/11KD24Cehr4cM8zJDlWBl00bM8q1Lfi0B/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/18MxSL4zOv1FRHrQPE8gdSLaAihh-fz9j/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 04 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1FeiI0pr2CrN62VZ4JFfmIZ9zN4PZUpJf/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1akP-w1bTfmxy6da_8HjXswTrrdL6t_SX/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 05 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1qEWSug8mWReFkYPGJf-sJrhaC3rmeJ48/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1s5FTggwseS9U4pY5K_O4EqImukUwC3Ru/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 06 - Applied',
                    paperLink: 'https://drive.google.com/file/d/17NIFZIUKN36HqtZJUY6OSesq17GM_vBH/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1ip5RM1qdhTzM7gkK9JYExoe6bVD1PnTg/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 07 - Applied',
                    paperLink: 'https://drive.google.com/file/d/16SE3IsQ7Ya3-Gh6ondyAXNqG-5UzQrWg/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1_Fa5QtYzkrDJcFgU71kgZ4d1vbF9aCf5/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 08 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1n47piSmHft_28czQA7ubDsC8cmrQkG-8/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1MS7Fs00U4apuZNwdJJUELC4jzBFTu-p6/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 09 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1kVC4IdzUFL9p1IU4P0V-aA8OzP2urL2L/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/17NvQScH13SteIIVsRJSrDUFo49To9tio/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 10 - Applied',
                    paperLink: 'https://drive.google.com/file/d/19FkVC7TO-iielmljViqzcXOAzlVFOa96/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1xqpz3VDayCKFs-LTweLSJpfmsDcksi_E/view?usp=drive_link',
                },

                // Pure ----------------------
                {
                    name: '2024 AL - Test 01 - Pure',
                    paperLink: 'https://drive.google.com/file/d/14g2-eJTvkyndBSWrIULd_vh24AGVxYoO/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1g5qowtANE_sHGEFbvXly1utSJOkYNaQb/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 02 - Pure',
                    paperLink: 'https://drive.google.com/file/d/11QU6zjJ-nVh_RQN7iCOt86iDWVPm7Vaf/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1vz6dS4dxzpJK3EQiJYy6Ahgl0U9IwFbg/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 03 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1_BB47QiTqNhZo_D4Rmlu9MYBHIIpYJtD/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1mhh3yt0mOos3wsGgH_VLW_hvDsKeZ1dj/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 04 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1RDzi6JM9g8aFA6eEnkjhPXfDPIRnT9PN/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1bHTD52fJQYsKdPoHWFuzEeeK6mNxjETz/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 05 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1FtlPzJJJKxfGgXuGAhzDPGVpoDPHFG2c/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1XRJ4Q9gwn7HZKy23Bdlg_gS-0GdPp1QS/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 06 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1ZJA6UubkCpfatd5pfizakMC_2P0uJwfi/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1HoFnvsj8Zwn36B2VACJdxWsWXpezEK4d/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 07 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1ZJA6UubkCpfatd5pfizakMC_2P0uJwfi/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1HoFnvsj8Zwn36B2VACJdxWsWXpezEK4d/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 08 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1JvmI3Fs7le7CsaEPKTJgnPuDKD-gINA_/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1udvQf9HJBgZGzjzPIuip1EYi-2bV1zBi/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 09 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1avnjeJQXkCl82fXUwMCm-uDI4JUp2fLN/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/19eOhfaGOMankdHiN-sqQ4wbSHAptdClV/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 10 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1MIX4SRr3HCGe8SbRUSQV_qB4Zc2BOxbQ/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1y_brWHrjOCWzXWZbRMmB8qvHvbcH4oHi/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 01 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1-iVsz5iLzZVOV9BVey4V442SzY4uA6sD/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1F9gmajm7yNJhpyVaOo-RmUhi1RObY89O/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 02 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1o0hs8v3DtwOM_ShMeVlZRlgkrfTK4vXe/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1htmx1bB0ln3iwCxe4w6D6ZJw-ovJ0xQp/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 03 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1iUKys_dMrPnBZri1jQvvwThSzAkAIpWw/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1EHezsOGhl88f0JJvoI-2z_nIcIH44vDP/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 04 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1d6nNy1ZTnXCrXqkUhX4TkAlTk2nMzufp/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1G5F3MXjZcX7NBnuOt0y7NL9rUyjpec1r/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 05 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1Ucf-lpDPx1xX_jNobKXjQNezGqVGHP5x/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Ziw6oFqHfSm_GMudjAoJlUzIfmQZwF1a/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 06 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1YECm08Z2URCg9sVlnDfiDQtC9VJwQaxU/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1B8LH8uJ5wL_kKFlQjJ0LIQDccW8SokKi/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 07 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1V_0pAvyDhw-6Yc9sD3l-1JflpPmB_ZzJ/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1qm3YRthXfPge6jLVkTGyaoreX6L1u9XQ/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 08 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1g9k6QbpGgGA5SRCL9CqP8dVX52d0zLJ_/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1xkwiPmnY7GDNYkeUR56eN3fo3AlQ2Qzz/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 01 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1FEusxA5xNpvwat-LUAAzL9TtbLNv1vUH/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1O7QSQa0-rhR0r4NZ2gQu4TKx0DS3dJqq/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 02 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1XDXp7_5X7gRzDPAREQt06x5GgLGYxrQg/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1CrWo9g4fizMTAcWQJ0RQ2KRIsIh9EXzl/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 03 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1X4O9Io1nIk51U-kx82L-TzCJEhjBx6K_/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1QL12642SXmVHN5kHY-AiAnGj3oG_yx81/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 04 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1PL6XVrNJZYAIaoso0aJH4CW3gT0gFDMS/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1V9jnuMZQrsVCDzW5QtBhn0R0vtTFsM3R/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 05 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1p4_mrIGMPlWjp_B3dvcCxUz4zyb5Tjz-/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1yRZnlzmgqAcb1VxdIWigGZOYA0KynrUl/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 06 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1rlQSzUgKk-9t1GL-f0oZ2e1lqyvJ0R4L/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1NiSrUG6q8gXq4PaPfHRBVavI9UJHtlwz/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 07 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1gHRaPQf05M_0B2wI2mEkDkw1wE2vNKvC/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1MrQZVqPQXcuRiiuEVhQeVp8fflmZsUVX/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 08 - Pure',
                    paperLink: 'https://drive.google.com/file/d/1YKJ6WXBvYs6VRKyPGVnYAcohTPfvhKX3/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/15D1nrfze5h6geMLr2WWAvgKdPkgS2UTK/view?usp=drive_link',
                },
                
            ],
        };
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

.table-responsive {
    width: 100%;
    margin-top: 1rem;
    overflow-x: auto;
}

.table-header {
    text-align: left;
    padding: 12px;
    font-weight: bold;
}

.v-btn {
    padding: 8px 16px;
    font-size: 14px;
}
</style>