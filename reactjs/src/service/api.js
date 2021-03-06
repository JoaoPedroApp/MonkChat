import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarMensagens(idSala) {
        let r = await api.get(`/chat/${idSala}`);
        return r.data;
    }

    async inserirMensagem(nomeSala, nomeUsuario, mensagem) {
        let chat = {
            sala: {
                nome: nomeSala
            },
            usuario: {
                nome: nomeUsuario
            },
            mensagem: mensagem
        }
        let r = await api.post(`/chat`, chat);
        return r.data;
    }

    async inserirSala(sala) {
        let r = await api.post(`/sala/`, { nome: sala });
        return r.data;
    }

    async inserirUsuario(usuario) {
        let r = await api.post(`/usuario/`, { nome: usuario });
        return r.data;
    }

    async login(login, senha) {
        let j = await api.post('/login', { login, senha })
        return j.data;
    }
     
    async removerMensagem (id) {
        let j = await api.delete(`/chat/${id}`)
        return j.data;
    }
}