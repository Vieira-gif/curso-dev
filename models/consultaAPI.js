function consome(url) {
  const response = fetch(url)
  return response
}

exports.func = { consome };