import './index.css';

let url = 'https://chart.googleapis.com/chart?';
// https://api.qrserver.com/v1/create-qr-code/?chs=150x150&data=Example
let btn = document.querySelector('#btn');
let download = document.querySelector('#download');
let qrImg = document.querySelector('#image');
let text = document.querySelector('#message');
let size = document.querySelector('#minmax-range');
let range = document.querySelector('#range');
let render = document.querySelector('#render');
let having = 'https://media4.giphy.com/media/S79OoU56ceX7oVm6PA/200w.webp?cid=ecf05e477kfucm85o69ynegnb87sxbkxqlmj6dbh3p0vyvfq&ep=v1_gifs_search&rid=200w.webp&ct=g'
size.addEventListener('change',()=>{
    range.innerHTML = size.value;
})
btn.addEventListener('click',()=>{
        if (text.value != null){
            render.classList.add('hidden')
            if (size.value === '150'){
                qrImg.src = url + 'chs=' + '150x150' + '&cht=qr' + '&chl=' + text.value + '&choe=UTF-8';
                download.download = qrImg.src + '.png';
            }else if (size.value === '200'){
                qrImg.src = url + 'chs=' + '200x200' + '&cht=qr' + '&chl=' + text.value + '&choe=UTF-8';
                download.download = qrImg.src + '.png';
            }else if (size.value === '250'){
                qrImg.src = url + 'chs=' + '250x250' + '&cht=qr' + '&chl=' + text.value + '&choe=UTF-8';
                download.download = qrImg.src + '.png';
            }else if (size.value === '300'){
                qrImg.src = url + 'chs=' + '300x300' + '&cht=qr' + '&chl=' + text.value + '&choe=UTF-8';
                download.download = qrImg.src + '.png';
            }else if (size.value === '350'){
                qrImg.src = url + 'chs=' + '350x350' + '&cht=qr' + '&chl=' + text.value + '&choe=UTF-8';
                download.download = qrImg.src + '.png';
            }
            // if (qrImg.src !== having){
            //     download.style.display = 'block'
            // }else {
            //     download.style.display = 'none'
            // }
        }else {
            render.classList.add('block')
        }

});
console.log(qrImg.src !== having)
