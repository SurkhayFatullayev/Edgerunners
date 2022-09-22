function myTrig() {
    window.location.href = "https://www.st-trigger.co.jp/";
}

function myCdpr() {
    window.location.href = "https://cdprojektred.com/en";
}

function myNetflix() {
    window.location.href = "https://www.netflix.com/az-ru/title/81054853";
}

const faders = document.querySelector('.fade-in');
const appearOptions ={
    threshold:1 
};
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll)
{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}
, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
