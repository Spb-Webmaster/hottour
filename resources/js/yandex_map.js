setTimeout(function () {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = '//api-maps.yandex.ru/2.1/?apikey=43db27ba-be61-4e84-b139-ff37ad4802b8&package.standard&lang=ru_RU&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(elem);
    document.getElementById('loader_wrapper').style.visibility = 'hidden';
    document.querySelector(".wrapper_loader").style.display = 'none';
}, 2000);






