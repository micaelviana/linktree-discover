// function toggleMode() {
//    const html = document.documentElement 
//    html.classList.toggle(light)
//
//     //pegar a tag img
//     const img = document.querySelector('#profile img')
//
//     //substituir a imagem se for light mode
//     if (html.classList.contains('light')){
//         img.setAttribute('src','./assets/avatar-light.png')
//     }else{
//     //se tiver sem light mode manter a imagem normal
//         img.setAttribute('src','./assets/avatar.png')
//     }
// }

//Resposta do Copilot, investigar depois
/*O problema parece estar relacionado ao uso da classe light no seu código HTML e JavaScript. A mensagem de erro Uncaught ReferenceError: light is not defined sugere que a variável light não está definida, mas na verdade, você está tentando alternar a classe light no elemento HTML.

Seu código JavaScript está correto, mas o erro pode estar ocorrendo devido a um problema de escopo ou de carregamento do script. Aqui estão algumas sugestões para resolver o problema:

Certifique-se de que o arquivo script.js está sendo carregado corretamente. Verifique se o caminho do arquivo está correto.

Verifique se o script está sendo executado após o carregamento completo do DOM. Você pode fazer isso adicionando um evento DOMContentLoaded para garantir que o script seja executado após o carregamento do HTML.

Aqui está um exemplo de como você pode modificar seu código JavaScript para garantir que ele seja executado após o carregamento do DOM:
*/

document.addEventListener('DOMContentLoaded', () => {
    function toggleMode() {
        const html = document.documentElement;
        html.classList.toggle('light');

        // pegar a tag img
        const img = document.querySelector('#profile img');

        // substituir a imagem se for light mode
        if (html.classList.contains('light')) {
            img.setAttribute('src', './assets/avatar-light.png');
        } else {
            // se tiver sem light mode manter a imagem normal
            img.setAttribute('src', './assets/avatar.png');
        }
    }

    // Adicionar o evento de clique ao elemento com id 'switch'
    document.getElementById('switch').addEventListener('click', toggleMode);
});

