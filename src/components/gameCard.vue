<template>
  <v-card class="game-card">
    <v-img :src="game.image" :alt="`Capa de ${game.title}`" height="200px" cover></v-img>
    <v-card-title>{{ game.title }}</v-card-title>
    <v-card-subtitle>{{ game.genre }}</v-card-subtitle>
    <v-card-text>
      <p v-if="game.platform">{{ game.platform }}</p>
      <p>{{ game.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('edit')">Editar</v-btn>
      <v-btn color="error" @click="$emit('remove')">Remover</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['edit', 'remove']);
</script>

<style scoped>
.game-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>