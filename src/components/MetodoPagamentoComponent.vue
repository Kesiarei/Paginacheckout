<template>
  <div>
    <h2>Método de Pagamento - Cartão de Crédito</h2>
    <form>
      <div class="form-group">
        <label for="numeroCartao">Número do Cartão:</label>
        <input type="text" id="numeroCartao" v-model="cartao.numero" @input="identificarBandeira" />
      </div>
      <div class="form-group">
        <label for="nomeCartao">Nome no Cartão:</label>
        <input type="text" id="nomeCartao" v-model="cartao.nome" />
      </div>
      <!-- Outros campos do cartão (data de vencimento, código de segurança) -->
      <div class="form-group">
        <label for="bandeira">Bandeira:</label>
        <input type="text" id="bandeira" v-model="cartao.bandeira" :readonly="true" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartao: {
        numero: '',
        nome: '',
        bandeira: '',
        // Outros campos do cartão (data de vencimento, código de segurança)
      }
    };
  },
  methods: {
    identificarBandeira() {
      const numeroCartao = this.cartao.numero.replace(/\s/g, ''); // Remova espaços em branco
      const regexBandeiras = {
        visa: /^4[0-9]{15}$/,
        mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        // Outras bandeiras e regex aqui...
      };

      // Verifique qual bandeira corresponde ao número do cartão
      for (const bandeira in regexBandeiras) {
        if (regexBandeiras[bandeira].test(numeroCartao)) {
          this.cartao.bandeira = bandeira;
          break; // Pare assim que encontrar uma correspondência
        }
      }
    }
  }
};
</script>

<style scoped>
/* Adicione estilos CSS conforme necessário */
.form-group {
  margin-bottom: 15px;
}
</style>