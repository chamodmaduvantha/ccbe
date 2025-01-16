<template>
<div class="card-container">
    <v-container>
        <v-row>
            <v-col v-for="(tweet, index) in tweets" :key="index" cols="12" md="6" lg="4">
                <v-card class="mx-auto text-white" color="#FBB700" max-width="400" height="275" title="YouTube">
                
                    <template v-slot:prepend>
                        <v-icon size="x-large">mdi-youtube</v-icon>
                    </template>

                    <v-card-text class="text-h5 py-2">
                        "{{ tweet.text }}"
                    </v-card-text>

                    <v-card-actions>
                        <v-list-item class="w-100">
                            <template v-slot:prepend>
                                <v-avatar color="grey-darken-3" :image="tweet.userAvatar"></v-avatar>
                            </template>

                            <v-list-item-title>{{ tweet.userName }}</v-list-item-title>
                            <v-list-item-subtitle>{{ tweet.userRole }}</v-list-item-subtitle>

                            <template v-slot:append>
                                <div class="justify-self-end">
                                    <v-icon class="me-1">mdi-heart</v-icon>
                                    <span class="subheading me-2">{{ tweet.likes }}</span>
                                    <span class="me-1">·</span>
                                    <v-icon class="me-1">mdi-share-variant</v-icon>
                                    <span class="subheading">{{ tweet.shares }}</span>
                                </div>
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
                    text: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
                    userName: "Evan You",
                    userRole: "Vue Creator",
                    userAvatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
                    likes: 256,
                    shares: 45,
                },
                {
                    text: "Vue.js is an amazing framework for building user interfaces!",
                    userName: "Vue Enthusiast",
                    userRole: "Developer",
                    userAvatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Brown&facialHairType=MoustacheFancy&clotheType=BlazerSweater&clotheColor=Blue01&eyeType=Happy&eyebrowType=UpDown&mouthType=Smile&skinColor=Light",
                    likes: 125,
                    shares: 30,
                },
                {
                    text: "The Composition API makes writing reusable code so much easier in Vue 3.",
                    userName: "Sarah Drasner",
                    userRole: "Vue Advocate",
                    userAvatar: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Pale",
                    likes: 512,
                    shares: 78,
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
