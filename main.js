
window.addEventListener('load', myScript);

function myScript() {
    //let bottom = document.getElementsByClassName('grid bottom');
    let top = document.getElementsByClassName('grid top');
    //let y = bottom[0].offsetTop;
    document.querySelector('body').scrollIntoView(false);
    //$('body, html').animate({ scrollTop: 2716 }, 0).animate({ scrollTop: 0 }, 4000);
    //bottom[0].focus()
    //bottom[0].scrollIntoView(true, {behavior: "smooth"});
    let scrollTop = () => {top[0].scrollIntoView({behavior: 'smooth'})}
    setTimeout(scrollTop, 2000);
    
    //console.log('y= ' + y)
}

// window.onload = function() { DO I NEED THIS!!!
    let topButton = document.getElementById('topButton')
    console.log(topButton)
    topButton.addEventListener('click', toTheTop)

    function toTheTop() {
        let top = document.getElementsByClassName('grid top');
        top[0].scrollIntoView({behavior: 'smooth'});
    }
// }