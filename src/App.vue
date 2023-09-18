<!-- App.vue -->
<template>
  <div id="app">
    <h1>Checkout</h1>

    <!-- Componente Endereço -->
    <endereco-component
      :endereco="endereco"
      @preencherEndereco="preencherEndereco"
    ></endereco-component>

    <!-- Componente Método de Pagamento -->
    <metodo-pagamento-component
      :cartao="cartao"
      @identificarBandeira="identificarBandeira"
    ></metodo-pagamento-component>

    <!-- Componente Carrinho -->
    <carrinho-component :carrinho="carrinho"></carrinho-component>

    <!-- Componente Finalização do Checkout -->
    <finalizacao-checkout-component @finalizarCompra="finalizarCompra"></finalizacao-checkout-component>

    <!-- Componente Eventos -->
    <eventos-component
      @initiateCheckout="registrarEvento('InitiateCheckout')"
      @addToCart="registrarEvento('AddToCart')"
      @fillAddress="registrarEvento('FillAddress')"
      @addPaymentInfo="registrarEvento('AddPaymentInfo')"
      @Purchase="registrarEvento('Purchase')"
      @PurchaseFail="registrarEvento('PurchaseFail')"
      @ChangeWindow="registrarEvento('ChangeWindow')"
      @CloseWindow="registrarEvento('CloseWindow')"
    ></eventos-component>
  </div>
</template>

<script>
import EnderecoComponent from './components/EnderecoComponent.vue';
import MetodoPagamentoComponent from './components/MetodoPagamentoComponent.vue';
import CarrinhoComponent from './components/CarrinhoComponent.vue';
import FinalizacaoCheckoutComponent from './components/FinalizacaoCheckoutComponent.vue';
import EventosComponent from './components/EventosComponent.vue';

export default {
  components: {
    EnderecoComponent,
    MetodoPagamentoComponent,
    CarrinhoComponent,
    FinalizacaoCheckoutComponent,
    EventosComponent,
  },
  data() {
    return {
      endereco: {
        // Dados do endereço
      },
      cartao: {
        numero: '',
        nome: '',
        bandeira: '',
        // Outros campos do cartão (data de vencimento, código de segurança)
      },
      carrinho: [
        // Itens do carrinho
      ],
    };
  },
  methods: {
    preencherEndereco(endereco) {
      this.endereco = endereco;
    },
    identificarBandeira(bandeira) {
      this.cartao.bandeira = bandeira;
    },
    finalizarCompra() {
      // Implemente a lógica para finalizar a compra aqui
      // Certifique-se de validar os campos e executar a ação de compra
    },
    registrarEvento(evento) {
      // Implemente a lógica para registrar eventos no console
      // Você pode personalizar essa função para atender aos requisitos de registro de eventos
      console.log(evento, this.endereco, this.cartao, this.carrinho);
    },
  },
};
</script>
