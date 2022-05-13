<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Agendamento de Transferência</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">
        
          <label>Conta de Origem</label>
          <input type="text" placeholder="Conta que irá transferir" v-model="contaOrigem">
          <label>Conta Destino</label>
          <input type="number" placeholder="Conta que receberá a transferência" v-model="contaDestino">
          <label>Valor a ser transferido</label>
          <input type="text" placeholder="Insira o valor" v-model="valor">
            <label>Agendamento de Data</label>
          <input type="text" placeholder="Data agendada para ocorrer a transferência" v-model="dataAgendamento">
            <label>Data de Transferência</label>
          <input type="text" placeholder="Data da transferência" v-model="dataTransferencia">
          <label>Tipo Operação</label>
          <select v-model="tipoOperacao">
  <option v-for="option in options" :key="option.id" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select><br>
          <button class="waves-effect waves-light btn-small" onClick="window.location.reload();">Salvar<i class="material-icons left " >save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>CONTA ORIGEM</th>
            <th>CONTA DESTINO</th>
            <th>VALOR</th>
            <th>DATA DA TRANSFERÊNCIA</th>
            <th>DATA AGENDADA</th>
            <th>TAXA</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="transferencia of transferencia" :key="transferencia.id">
            <td>{{ transferencia.contaOrigem }}</td>
            <td>{{ transferencia.contaDestino }}</td>
            <td>{{ transferencia.valor }}</td>
            <td>{{ transferencia.dataTransferencia }}</td>
            <td>{{ transferencia.dataAgendamento }}</td>
            <td>{{ transferencia.taxa }}</td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import TransferenciaService from './services/transferenciaService';
export default {
  data(){
    return {
      transferencias: {
        contaOrigem: '',
        contaDestino: '',
        dataTransferencia: '',
        dataAgendamento: '',
        valor: '',
        taxa: '',
        tipoOperacao:''
      },
      options: [
      { text: 'A', value: 'A' },
      { text: 'B', value: 'B' },
      { text: 'C', value: 'C' }
    ],
      transferencia: []
    }
  },
  mounted(){
    this.listar()
  },
  methods:{
    listar(){
      TransferenciaService.listar().then(response => {
        this.transferencia = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    salvar(){
      TransferenciaService.salvar(
      {contaOrigem: this.contaOrigem, contaDestino: this.contaDestino, dataTransferencia: this.dataTransferencia,
       dataAgendamento: this.dataAgendamento,
       valor: this.valor,
       tipoOperacao: this.tipoOperacao
      },
      
      )
      .then((response) => {
        console.log(response);
        this.listar();
      });
    }
  }
}
</script>

<style>
</style>
