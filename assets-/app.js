function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'
}
//17-09-25//
cartao.innerHTML = `
      
                <div class="cartao__conteudo">
            <h3>${categoria}<h3>

                        <h3>Programação</h3>
                        <div class="cartao__conteudo__pergunta">
                                <p>${Qem é o homem que teve o poder de andar sobre o mar?}</p>
                        </div>
                        <div class="cartao__conteudo__resposta">
                                <p>${O nome dEle é Jeus, seu nome é poder.}</p>
                        </div>
                </div>`
      

        container.appendChild(cartao)
