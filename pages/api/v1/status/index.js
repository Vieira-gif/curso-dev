function status(request, response) {
  response.status(200).json({
    status: "Tudo certo, por aqui!",
  });
}

export default status;
