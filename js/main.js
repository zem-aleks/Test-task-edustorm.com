// OwAIchynWVcleuw9kIHxNe6smK7hiGSL
let APIKEY = 'OwAIchynWVcleuw9kIHxNe6smK7hiGSL';
document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById('btnSearch').addEventListener('click', ev => { //раскоментить!!!
        ev.preventDefault();   //раскоментить!!!
        let url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=100&q=`
        // let str = 'cat'; //удалить
        let str = document.getElementById('search').value.trim(); //раскоментить!!!
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then( function (response) {return response.json()})
        .then( content => {
            console.log(content.data);

            let outDivs = document.getElementsByClassName('out');

            for(let i = 0; i < outDivs.length; i++) {

                let fig = document.createElement('figure');
                let img = document.createElement('img');
                let fc = document.createElement('figcaption');
                let btnInfo = document.createElement('button');
                btnInfo.textContent = 'i';

                img.src = content.data[i].images.downsized.url;
                img.alt = content.data[i].title;
                fc.textContent = content.data[i].title;


                outDivs[i].insertAdjacentElement('afterbegin', fig); //!!!!!!!!!!!!
                // outDivs[i].insertAdjacentElement(fig); //!!!!!!!!!!!!
                // outDivs[i].append(fig); //!!!!!!!!!!!!

                fig.append(img);
                fig.append(fc);
                fc.append(btnInfo);
                fig.classList.add('content__figure');
                fc.classList.add('content__figcaption');
                btnInfo.classList.add('content__button-info');

            }

            let infoArr = document.getElementsByClassName('content__button-info');                

            for(let j = 0; j < infoArr.length; j++) {
                infoArr[j].onclick = function () {
                    console.log('111');
                    let sizeAdress = document.createElement('div');
                    let sizeGif = document.createElement('div');
                    let adressGif = document.createElement('a');
                    let allGifs = document.getElementsByTagName('img');

                    sizeGif.textContent = `${content.data[j].images.downsized.height}x${content.data[j].images.downsized.width}`;
                    adressGif.href = content.data[j].url;
                    adressGif.textContent = 'Оригинал';

                    sizeAdress.append(sizeGif);
                    sizeAdress.append(adressGif)
                    outDivs[j].append(sizeAdress);

                    sizeAdress.classList.add('size-adress');
                    sizeGif.classList.add('content__size');
                    //outDivs[j].classList.add('content__gif_klick-info')//??????
                    adressGif.classList.add('content__button-url');
                    console.log(allGifs[j]);
                }
            }

            document.getElementById('search').value = '';
        })

        .catch(err=>{
            console.error(err);
        })
    // })
    
    }) //раскомментировать!!!
}