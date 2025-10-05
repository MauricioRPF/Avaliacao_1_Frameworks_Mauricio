<template>
  <v-container>
    <h2 class="text-h5 mb-4">{{ isEditing ? 'Editar Jogo' : 'Adicionar Novo Jogo' }}</h2>
    <v-card class="pa-4">
      <GameForm
        :initial-data="gameData"
        @submit="handleSave"
        @cancel="handleCancel"
      />
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GameForm from '../components/GameForm.vue';

const route = useRoute();
const router = useRouter();

const games = ref([]);
const gameData = ref({
  id: null,
  title: '',
  genre: '',
  platform: '',
  description: '',
  image: '',
});

const isEditing = computed(() => !!route.params.id);

onMounted(() => {
  loadGames();
  if (isEditing.value) {
    const gameId = route.params.id;
    const gameToEdit = games.value.find(g => g.id === gameId);
    if (gameToEdit) {
      gameData.value = { ...gameToEdit };
    } else {
      // Se não encontrar o jogo, redireciona para a home
      router.push('/');
    }
  }
});

function loadGames() {
  const storedGames = localStorage.getItem('games');
  if (storedGames) {
    games.value = JSON.parse(storedGames);
  }
}

function handleSave(data) {
  if (isEditing.value) {
    const index = games.value.findIndex(g => g.id === data.id);
    if (index !== -1) {
      games.value[index] = data;
    }
  } else {
    data.id = Date.now().toString(); // ID único para o novo jogo
    games.value.push(data);
  }
  saveGames();
  router.push('/'); // Redireciona para a lista após salvar
}

function saveGames() {
  localStorage.setItem('games', JSON.stringify(games.value));
}

function handleCancel() {
  router.push('/');
}
</script>