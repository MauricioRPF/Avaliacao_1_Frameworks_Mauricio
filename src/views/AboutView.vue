<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-4">
          <v-card-title class="text-h4">Sobre a Biblioteca de Jogos</v-card-title>
          <v-card-text>
            <p>
              Este projeto foi desenvolvido para demonstrar o uso de diversas
              tecnologias e conceitos do ecossistema Vue.js:
            </p>
            <ul>
              <li>**Vue Router:** Para navegação entre as páginas.</li>
              <li>**Vuetify 3:** Para a interface de usuário (layout, cards, formulários).</li>
              <li>**CRUD:** Operações de Criar, Ler, Atualizar e Deletar.</li>
              <li>**localStorage:** Para persistência de dados.</li>
              <li>**Componentes Reutilizáveis:** `GameCard.vue` e `GameForm.vue`.</li>
              <li>**Diretivas:** `v-for`, `v-if`, `v-model`, `v-on`, `v-bind`.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>