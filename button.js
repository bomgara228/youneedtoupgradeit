        let butn = document.getElementById('myButton');
        let modal = document.getElementById('myModal');
        let getin = document.querySelector('.modal-content');
        let clos = document.getElementsByClassName('close')[0];
        let nerf = document.querySelector('.SUDA');
        
        butn.onclick = function() {
            modal.style.display = 'block';
            gtfa(vseprok);
        }

        clos.onclick = function() {
            modal.style.display = 'none';
            nerf.innerHTML = '';
        }

        window.onclick = function(e){
            if (e.target == modal){
                modal.style.display = 'none';
                nerf.innerHTML = '';
            }
        }
        
        let vseprok = [
            {
                name:'Сделайте 100 кликов',
                nagrad: 'Дает множитель 0.5',
                phot:'1d.jpg',
                reqc:100,
                get: 0,
                go: 0.5,
                ed: 11
            },
            {
                name:'Сделайте 1000 кликов',
                nagrad:'Дает множитель 1',
                phot:'2d.jpg',
                reqc:1000,
                get: 0,
                go: 1,
                ed:12
            },
            {
                name:'Сделай 10000 кликов',
                nagrad:'Дает множитель 3',
                phot:'3d.jpg',
                reqc:10000,
                get: 0,
                go: 3,
                ed:13
            }
        ];
        for (let i = 11; i < vseprok.length+11;i++){
            if (localStorage.getItem(`${i}`)) {
                ponatno = JSON.parse(localStorage.getItem(`${i}`));
                vseprok[i-11].get = parseInt(ponatno.get);
                
            }
        }
        function gtfa(arr){
            for (let item = 0;item < arr.length;item++){
                console.log(item);
                console.log(arr);
                let div = document.createElement('div');
                let diiv = document.createElement('div');
                let img = document.createElement('img');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let byt = document.createElement('button');
                
                div.style.border = '0.3vw solid black'
                div.style.borderRadius = '5%';
                div.style.margin = '1vw';
                byt.style.margin = '0 1vw 0 0'
                byt.style.float = 'right';
                byt.style.display = 'none';

                if ((arr[item].reqc <= statistic.clicked || arr[item].reqt <= statistic.timeInGame) && arr[item].get == 0){
                    byt.style.display = 'block';
                }
                byt.addEventListener('click', () => ig(arr[item], byt));
                byt.innerText = 'Забрать';
                diiv.classList.add('ramkas')
                img.classList.add('inimg');
                img.src = arr[item].phot;
                h2.innerHTML = arr[item].name;
                h3.innerHTML = arr[item].nagrad;

                nerf.append(div);
                div.append(h2);
                div.append(h3);
                diiv.append(img);
                diiv.append(byt);
                div.append(diiv);
            }
            function ig(obj, byt){
                mnoz += obj.go;
                localStorage.setItem('mnoz', mnoz.toFixed(2));
                tm.innerText = `Множитель клика: ${mnoz.toFixed(2)}`;
                ct.innerText = `Денег с клика: ${(mnoz * upg).toFixed(0)}`;
                obj.get++;
                byt.style.display = 'none';
                localStorage.setItem(`${obj.ed}`, JSON.stringify(obj));
        }
        }