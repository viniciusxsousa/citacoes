var banners = ['Os melhores do Brasil!', 'Qualidade e preço baixo!'];
var bannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocarBanner, 1000);