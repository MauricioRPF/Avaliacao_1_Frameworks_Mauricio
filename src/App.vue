<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Minha Biblioteca de Jogos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">
        <v-icon left>mdi-view-list</v-icon>
        Jogos
      </v-btn>
      <v-btn text to="/crud">
        <v-icon left>mdi-plus</v-icon>
        Adicionar Jogo
      </v-btn>
      <v-btn text to="/about">
        <v-icon left>mdi-information</v-icon>
        Sobre
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

</script>