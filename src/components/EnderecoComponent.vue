<template>
  <div>
    <h2>Endereço</h2>
    <form>
      <div class="form-group">
        <label for="cep">CEP:</label>
        <input type="text" id="cep" v-model="endereco.cep" @blur="buscarCEP" />
      </div>
      <div class="form-group">
        <label for="logradouro">Logradouro:</label>
        <input type="text" id="logradouro" v-model="endereco.logradouro" :disabled="endereco.cepPreenchido" />
      </div>
      <div class="form-group">
        <label for="numero">Número:</label>
        <input type="text" id="numero" v-model="endereco.numero" />
      </div>
      <div class="form-group">
        <label for="complemento">Complemento:</label>
        <input type="text" id="complemento" v-model="endereco.complemento" />
      </div>
      <div class="form-group">
        <label for="bairro">Bairro:</label>
        <input type="text" id="bairro" v-model="endereco.bairro" :disabled="endereco.cepPreenchido" />
      </div>
      <div class="form-group">
        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" v-model="endereco.cidade" :disabled="endereco.cepPreenchido" />
      </div>
      <div class="form-group">
        <label for="estado">Estado:</label>
        <input type="text" id="estado" v-model="endereco.estado" :disabled="endereco.cepPreenchido" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        cepPreenchido: false
      }
    };
  },
  methods: {
    async buscarCEP() {
      try {
        // Implemente a lógica para buscar o endereço usando a API do ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${this.endereco.cep}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          this.endereco.logradouro = data.logradouro || '';
          this.endereco.bairro = data.bairro || '';
          this.endereco.cidade = data.localidade || '';
          this.endereco.estado = data.uf || '';
          this.endereco.cepPreenchido = true;
        } else {
          // CEP não encontrado, limpe os campos e mostre uma mensagem de erro
          this.limparCamposEndereco();
          alert('CEP não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        // Trate erros de requisição aqui, como falhas de rede
      }
    },
    limparCamposEndereco() {
      this.endereco.logradouro = '';
      this.endereco.bairro = '';
      this.endereco.cidade = '';
      this.endereco.estado = '';
      this.endereco.cepPreenchido = false;
    }
  }
};
</script>

<style scoped>
/* Estilos CSS conforme necessário */
.form-group {
  margin-bottom: 15px;
}
</style>