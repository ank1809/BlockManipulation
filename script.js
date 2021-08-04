window.addEventListener('load', function() {
    let block = document.getElementById('block');
    let scaleCoef = 1;
    let rotateDeg = 0;
    //posy manipulation
    let posy = document.getElementById('pos-y');
    posy.addEventListener('input', function() {
            block.style.top = posy.value + 'px';
        })
        //posx manmipulation
    let posx = document.getElementById('pos-x');
    posx.addEventListener('input', function() {
            block.style.left = posx.value + 'px';
        })
        //size manipulation
    let size = document.getElementById('size');
    size.addEventListener('input', function() {
            scaleCoef = size.value;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        })
        //opacity manipulation
    let opacity = document.getElementById('opacity');
    opacity.addEventListener('input', function() {
            block.style.opacity = opacity.value;
        })
        //selector manipulation
    let selector = document.getElementById('shape-select');
    let okbutton = document.getElementById('ok-shape');
    okbutton.addEventListener('click', function() {
            let option = selector.value;
            if (option == '1') {
                block.style.borderRadius = '0';
                rotateDeg = 0;
                block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;

            } else if (option == '2') {

                block.style.borderRadius = '50%';
            } else if (option == '3') {
                block.style.borderRadius = '0';
                rotateDeg = 45;
                block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;

            }

        })
        //Hex manipulation
    let Hex = document.getElementById('Hex');
    Hex.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                block.style.backgroundColor = `#${Hex.value}`;

            }

        })
        //RGBA manipulation
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbaInputs = document.querySelectorAll('.rgba-container input');

    rgbaInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
        })
    })

})