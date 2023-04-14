        let butt = document.getElementById('myOpt');
        let cloes = document.getElementsByClassName('clos')[0];
        let medal = document.getElementById('opt');
        let res = document.querySelector('.restart');
        let ofcorse = document.querySelector('.tosno');

        butt.onclick = function() {
            medal.style.display = 'block';
        }

        cloes.onclick = function() {
            medal.style.display = 'none';
            ofcorse.style.display = 'none';
            unlock = 0;
        }
        let unlock = 0;
        window.onclick = function(e){
            if (e.target == medal){
                medal.style.display = 'none'
                ofcorse.style.display = 'none';
                unlock = 0;
            }
        }

        res.onclick = function(e){
            if (e.target == res){
                res.style.width = '18vw';
                res.style.fontSize = '1vw';
                ofcorse.style.display = 'block';
                if (unlock >= 1){
                    localStorage.clear();
                    console.log('Должно работать');
                    location.reload();
                }
                unlock += 1;
                setTimeout(() => {
                    res.style.width = '20vw';
                    res.style.fontSize = '2vw';
                }, 100);
            }
        }