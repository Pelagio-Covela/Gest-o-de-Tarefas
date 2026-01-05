const tarefasModel = require('../tarefasModel/tarefasModel');


const getAll = async (request, response) => 
{
    const [tarefas] = await tarefasModel.getAll();
    return response.status(200).send(tarefas);
}

const createTask = async (request, response) =>
{
    const [criarTarefa] = await tarefasModel.createTask(request.body);
    return response.status(201).json({InsertId: criarTarefa.insertId});
}

const deleteTarefa = async (request, response) => {
    const { id } = request.params;
    await tarefasModel.deleteTask(id);
    return response.status(204).json({ message: "Tarefa com ID: "+id+" foi removida"});

}

const updatetask = async (request, response) =>
{
    const { id } = request.params;
    const updatetarefa = tarefasModel.updatetask(id, request.body);
    return response.status(204).json({ message: "Tarefa actualizada com sucesso"});
}
module.exports = {
    getAll,
    createTask,
    deleteTarefa,
    updatetask
}