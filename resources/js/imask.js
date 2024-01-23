//todo:jquery
$(document).ready(function () {
    const element = document.getElementById('CallPhone');
    const maskOptions = {
        mask: '+{0}(000)000-00-00'
    };
    const mask = IMask(element, maskOptions);
})
