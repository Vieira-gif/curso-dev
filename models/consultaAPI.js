function consome(url, metodo = 'GET') {
  const response = fetch(url, {method: metodo})
  return response
}

exports.func = { consome };