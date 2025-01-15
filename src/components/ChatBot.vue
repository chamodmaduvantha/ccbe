<template>
<div class="chat-window">
    <!-- Wrapping the image and tooltip together -->
    <div class="chatbot-container">
        <v-tooltip activator="hover" location="left" transition="scale-transition">
            <template v-slot:activator="{ props }">
                <img v-bind="props" class="chatbot-image" :src="require('@/assets/icons/Chat.jpg')" alt="Chatbot" />
            </template>
            <span>Hi! How can I assist you today?</span> <!-- Tooltip content -->
        </v-tooltip>
    </div>
</div>
</template>

  
<script>
export default {
    name: "ChatWindow",
};
</script>

  
<style scoped>
.chat-window {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.chat-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
}

.chatbot-container {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
    /* Ensures the tooltip and image are positioned together */
}

.chatbot-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.chatbot-image:hover {
    transform: scale(1.1);
}
</style>
