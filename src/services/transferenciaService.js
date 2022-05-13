import { http } from "./config";

export default {

    listar:() => {
        return http.get('v1/api/transferencia/listar')
    },

    salvar:(transferencia)=>{
		return http.post('v1/api/transferencia/salvar',transferencia);
  },

}