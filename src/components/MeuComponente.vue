<template>
  <div>
    <h1>{{ mensagem }}</h1>
    <button @click="exibirAlerta">Clique em mim</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagem: 'Olá, mundo!',
    };
  },
  methods: {
    exibirAlerta() {
      alert(this.mensagem);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente */
div {
  background-color: lightgray;
  padding: 10px;
  text-align: center; /* Centralize o conteúdo */
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>