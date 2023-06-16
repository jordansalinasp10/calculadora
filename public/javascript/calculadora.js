let funcionPredeterminada = () =>  {

    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valor = parseFloat(document.getElementById("valorPorHora").value)

        let interfazh = parseFloat(document.getElementById("interfazHoras").value)
        let htm = parseFloat(document.getElementById("horaHTML").value)
        let cs = parseFloat(document.getElementById("horaCSS").value)
        let js = parseFloat(document.getElementById("javascript").value)
        let testing = parseFloat(document.getElementById("testing").value)

        let resultado = valor * (htm + cs + js + testing+interfazh)

        document.getElementById("valorTotal").value = resultado
  })    
}

funcionPredeterminada();

