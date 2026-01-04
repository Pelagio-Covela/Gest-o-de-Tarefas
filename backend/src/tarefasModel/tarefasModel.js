const conexao = require ('./connection')

const getAll = async () =>
{
    const tarefas = await conexao.execute ('SELECT * FROM tarefas');
    return tarefas;
}

const createTask = async (tarefa) =>
{
    const { titulo } = tarefa;
    const data_criacao = new Date();
    const estado = 'Pendente';
    const criarTarefa = await conexao.execute ('INSERT INTO tarefas (titulo,estado,data_criacao) VALUES (?,?,?)', [titulo,estado,data_criacao]);
    return criarTarefa;
}

const deleteTask = async (id) => {
    const deleteTarefa = await conexao.execute ('DELETE FROM tarefas where id = ?', [id]);
    return deleteTarefa;
}

module.exports = {
    getAll,
    createTask,
    deleteTask
}