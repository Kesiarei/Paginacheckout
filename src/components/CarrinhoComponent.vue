<!-- Carrinho.vue -->
<template>
  <div>
    <h2>Carrinho de Compras</h2>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Carrinho" :key="item.id">
          <td>{{ item.nome }}</td>
          <td>R$ {{ item.preco.toFixed(2) }}</td>
          <td>{{ item.quantidade }}</td>
          <td>R$ {{ (item.preco * item.quantidade).toFixed(2) }}</td>
          <td>
            <button @click="adicionarItem(item)">+</button>
            <button @click="removerItem(item)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Total: R$ {{ calcularTotal().toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    carrinho: Array, // Recebe a lista de itens do carrinho como propriedade
  },
  methods: {
    adicionarItem(item) {
      // Lógica para adicionar item
    },
    removerItem(item) {
      // Lógica para remover item
    },
    calcularTotal() {
      // Lógica para calcular o total
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente Carrinho */
div {
  background-color: #f0f0f0;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 8px;
  text-align: left;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>