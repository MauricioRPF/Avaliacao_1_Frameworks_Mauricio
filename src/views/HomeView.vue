<template>
  <v-container>
    <h2 class="text-h5 mb-4">Catálogo de Jogos</h2>
    <v-row v-if="games.length">
      <v-col v-for="game in games" :key="game.id" cols="12" sm="6" md="4" lg="3">
        <GameCard
          :game="game"
          @edit="editGame(game.id)"
          @remove="confirmRemove(game.id)"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-alert type="info" prominent>
          Nenhum jogo cadastrado.
          <router-link to="/crud">Adicione um novo jogo!</router-link>
        </v-alert>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Confirmar Remoção</v-card-title>
        <v-card-text>
          Tem certeza de que deseja remover este jogo?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="red darken-1" text @click="removeGame">Remover</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import GameCard from '../components/GameCard.vue';

const router = useRouter();
const games = ref([]);
const dialog = ref(false);
const gameToRemoveId = ref(null);

onMounted(() => {
  loadGames();
});

function loadGames() {
  const storedGames = localStorage.getItem('games');
  if (storedGames) {
    games.value = JSON.parse(storedGames);
  }
}

function confirmRemove(id) {
  gameToRemoveId.value = id;
  dialog.value = true;
}

function removeGame() {
  if (gameToRemoveId.value) {
    games.value = games.value.filter(g => g.id !== gameToRemoveId.value);
    saveGames();
    dialog.value = false;
    // Opcional: mostrar uma notificação (snackbar)
  }
}

function saveGames() {
  localStorage.setItem('games', JSON.stringify(games.value));
}

function editGame(id) {
  router.push({ name: 'crud', params: { id: id } });
}
</script>