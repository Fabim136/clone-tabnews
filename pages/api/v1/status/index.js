function status(requeste, response) {
  response.status(200).json({ chave: "Os alunos são acima de média" });
}

export default status;
