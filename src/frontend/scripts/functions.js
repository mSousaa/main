
const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: { token: localStorage.getItem('token_fac') }
});

function verificaAutenticacao() {
    const token = localStorage.getItem('token_fac');
    if (!token) {
        window.location.href = 'login.html';
    }
}

async function listarDadosUsuarios() {
    try {
        const response = await api.get('usuarios');
        const data = response.data;
        const tabela = document.querySelector('#tabela');
        tabela.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>
                    <button class="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modal-edit"
                        onclick="abrirModalEdicao(${item.id})">Editar</button>
                    <button onclick="excluir(${item.id})" class="btn btn-danger">Excluir</button>
                </td>
            </tr>`).join('');
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
    }
}

async function excluir(id) {
    if (confirm('Deseja deletar este usuário?')) {
        try {
            await api.delete(`usuarios/${id}`);
            listarDadosUsuarios();
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    }
}

async function editar() {
    const id = document.querySelector('#modal-edit').getAttribute('data-id'); // ID armazenado no modal
    const nome = document.querySelector('#editNome').value;
    const email = document.querySelector('#editEmail').value;
    const dataNascimento = document.querySelector('#editdataNascimento').value;
    const genero = document.querySelector('#editGenero').value;
    const cpf = document.querySelector('#editCpf').value;
    const tipo_usuario = document.querySelector('#editTipo_usuario').value;
    const senha = document.querySelector('#editSenha').value;

    try {
        await api.put(`usuarios/${id}`, {
            nome,
            email,
            data_nascimento: dataNascimento,
            genero,
            cpf,
            tipo_usuario_id: tipo_usuario,
            senha
        });
        listarDadosUsuarios();
        
        const modalElement = document.getElementById('modal-edit');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    } catch (error) {
        console.error('Erro ao editar usuário:', error);
    }
}

async function abrirModalEdicao(id) {
    try {
        const response = await api.get(`usuarios/${id}`);
        const usuario = response.data;

        document.querySelector('#editNome').value = usuario.nome;
        document.querySelector('#editEmail').value = usuario.email;
        document.querySelector('#editdataNascimento').value = usuario.data_nascimento;
        document.querySelector('#editGenero').value = usuario.genero;
        document.querySelector('#editCpf').value = usuario.cpf;
        document.querySelector('#editTipo_usuario').value = usuario.tipo_usuario_id;
        document.querySelector('#editSenha').value = '';

        document.querySelector('#modal-edit').setAttribute('data-id', id);
    } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
    }
}

async function salvar() {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const dataNascimento = document.querySelector('#dataNascimento').value;
    const genero = document.querySelector('#genero').value;
    const cpf = document.querySelector('#cpf').value;
    const tipo_usuario = document.querySelector('#tipo_usuario').value;
    const senha = document.querySelector("#senha").value

    try {
        await api.post('usuarios', {
            nome,
            email, 
            data_nascimento: dataNascimento,
            genero,
            cpf,
            tipo_usuario_id: tipo_usuario,
            senha
        });
        listarDadosUsuarios();
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
    }
}

document.getElementById('salvarUsuario').addEventListener('click', salvar);
document.addEventListener('DOMContentLoaded', listarDadosUsuarios);
document.getElementById('editarUsuario').addEventListener('click', editar);
