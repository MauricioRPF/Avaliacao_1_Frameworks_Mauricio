<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field
      v-model="formData.title"
      label="Título do Jogo"
      required
    ></v-text-field>
    <v-text-field
      v-model="formData.genre"
      label="Gênero"
      required
    ></v-text-field>
    <v-text-field
      v-model="formData.platform"
      label="Plataforma"
    ></v-text-field>
    <v-textarea
      v-model="formData.description"
      label="Descrição"
      required
    ></v-textarea>
    <v-text-field
      v-model="formData.image"
      label="URL da Imagem de Capa"
    ></v-text-field>
    <v-btn color="primary" type="submit" class="mr-4">Salvar</v-btn>
    <v-btn @click="$emit('cancel')">Cancelar</v-btn>
  </v-form>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({
      title: '',
      genre: '',
      platform: '',
      description: '',
      image: '',
    }),
  },
});

const emits = defineEmits(['submit', 'cancel']);

const formData = ref({ ...props.initialData });

// Sincroniza o formulário se `initialData` mudar
watch(() => props.initialData, (newData) => {
  formData.value = { ...newData };
}, { deep: true });

function submitForm() {
  emits('submit', formData.value);
}
</script>