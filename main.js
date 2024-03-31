const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const main = document.querySelector('main');

let secretkey = letters[Math.floor(Math.random() * 27)];
for (let i =0; i <= 0; i++) {    
    document.body.addEventListener('keyup',function(keyboardevent) {
        if(keyboardevent.key == secretkey) {
            i = 0;
            const h2Tag = document.createElement('h2');
            h2Tag.textContent = 'Secret Key Pressed ' + secretkey;
            main.appendChild(h2Tag);
            secretkey =  letters[Math.floor(Math.random() * 27)];
        };
    });
};
