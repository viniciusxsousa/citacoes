var banners = ['Do lixo ao luxo!', 'Reaproveitar é aproveitar'];
var bannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocarBanner, 1000);