let bab =Array.from( document.querySelectorAll(".pro .bullets li i"));
let left = document.querySelector(".pro .fa-angle-left");
let right = document.querySelector(".pro .fa-angle-right");
let img =Array.from(document.querySelectorAll(".home .img img"));

let index = 1;
img[index].classList.add("active");
bab[index].classList.add("fa-solid");

left.addEventListener("click", ()=> {
    index = (index - 1 + img.length) % img.length;
    home(index);
    });

right.addEventListener("click", ()=> {
    index = (index + 1) % img.length;
    home(index);
    });

bab.forEach((bullet, i) => {
    bullet.addEventListener("click", (e) => {
        index = i;
        home(index);
    });
});

const home = (index) => { 
       document.querySelector(".home .img .active").classList.remove("active");
        img[index].classList.add("active");
        let sol = document.querySelector(".bullets li i.fa-solid");
            sol.classList.remove("fa-solid");
            sol.classList.add("fa-regular");
        bab[index].classList.add("fa-solid");
        startInterval();
    };

let time ;
function startInterval() {
    clearInterval(time);
    time = setInterval(() => {
        index = (index + 1) % img.length;
        home(index);
    }, 3000);
}
startInterval();


// anther slider

let box =Array.from( document.querySelectorAll(".testimonials .box"));
let skillsbab =Array.from( document.querySelectorAll(".testimonials .bullets li i"));

let boxi1 = 0, boxi2 = 1;


skillsbab.forEach((bullet, i) => {
    bullet.addEventListener("click", (e) => {
boxi1 = i*2;
boxi2 = i*2+1;
swatch(boxi1, boxi2);
    });
});

const swatch = (boxi1, boxi2) => {
    document.querySelectorAll(".testimonials .box").forEach(boxEl => boxEl.classList.add("none"));
    box[boxi1].classList.remove("none");
    box[boxi2].classList.remove("none");
    let sol = document.querySelector(".testimonials .bullets li i.fa-solid");
    sol.classList.remove("fa-solid");
    sol.classList.add("fa-regular");
    skillsbab[boxi1/2].classList.add("fa-solid");
}
let Time;
function inter() { 
    clearInterval(Time);
    Time = setInterval(() => {
        boxi1 = (boxi1 + 2) % box.length;
        boxi2 = (boxi2 + 2) % box.length;
        swatch(boxi1, boxi2);
    }, 3000);
}
inter();

// progress bar

let skills = document.querySelector(".oskills");
let progress = document.querySelectorAll(".skills .prog span");

window.addEventListener("scroll", () => {
        if ((window.innerWidth >= 1200 &&window.scrollY >= skills.offsetTop  - 350) || (window.innerWidth < 1200 && window.scrollY >= skills.offsetTop - 100)) {
        progress.forEach((prog) => {
            prog.style.width = prog.dataset.progress;
        });
    }
})

// stats
let stats = document.querySelector(".stats");
let statsNum = document.querySelectorAll(".stats .number");
let start =0;
window.onscroll = function () {
if ((window.innerWidth >= 1200 &&window.scrollY >= stats.offsetTop  - 350) || (window.innerWidth < 1200 && window.scrollY >= stats.offsetTop - 100)) {
        if (!start){
        statsNum.forEach((num) => startcon(num))
        }
        start =1;
    }
}

function startcon (e){
    let goal = e.dataset.goal;  
let count = setInterval(() => {
                e.textContent++;
                if (e.textContent == goal) {
                    clearInterval(count);
                }
            }, 2000 / goal);
        }

// porttolio more and ul

let more = document.querySelector(".more");
let imgcon =Array.from(document.querySelectorAll(".Portfolio .imgs-con"));
let shuffle= Array.from( document.querySelectorAll(".shuffle li"));
let openmore=0;
let pbox= document.querySelectorAll(".Portfolio .imgs-con .box");
more.addEventListener("click",()=> {
    if (!openmore){
        imgcon[1].classList.remove("none")
        more.textContent=("Less")
        openmore=1;
    }
else{
        imgcon[1].classList.add("none")
        more.textContent=("more")
                openmore=0;
                        if (window.innerWidth >= 1200) {
window.scrollTo(window.scrollX, window.scrollY - 500);
                        }
        else if (window.innerWidth < 768) {
            window.scrollTo(window.scrollX, window.scrollY - 2000);
        }
    }
});

shuffle.forEach((el,i) => {
    el.addEventListener("click", () => {
        let clasEl=document.querySelectorAll(`.imgs-con .${el.textContent}`)
        document.querySelector(".shuffle .active").classList.remove("active");
        shuffle[i].classList.add("active");
        console.log(clasEl)
        if (clasEl.length!==0){
        pbox.forEach(boxEl => boxEl.classList.add("none"));
        clasEl.forEach(boxEl => boxEl.classList.remove("none")); 
        imgcon[1].classList.remove("none")
        more.style.display="none";
        if (window.innerWidth >= 1200) {
            pbox.forEach(boxEl => boxEl.style.flexBasis = "50%");
        }
        else {
            pbox.forEach(boxEl => boxEl.style.removeProperty("flex-basis"))
        }
    }
    else{
        pbox.forEach(boxEl => boxEl.classList.remove("none"));
                imgcon[1].classList.add("none")
        more.style.display="block";
                if (window.innerWidth >= 1200) {
                    pbox.forEach(boxEl => boxEl.style.removeProperty("flex-basis"))

        }
    }
    });
});

// buying con

let overl = document.querySelector(".Pricing .overlay");
let sure = document.querySelector(".sure");
let buy =document.querySelectorAll(".Pricing .Buy")
let prnone =document.querySelectorAll(".Pricing .none")
let notbuybut = document.querySelector(".sure .sbut .notsure");
let buybut = document.querySelector(".sure .sbut .sureb");
buy.forEach((el) => {
    el.addEventListener("click", () => {
        prnone.forEach(boxEl => boxEl.classList.remove("none"));
        document.body.style.overflow = "hidden";
    });
});
if (notbuybut) {
    notbuybut.addEventListener("click", () => {
        overl.classList.add("none");
        sure.classList.add("none");
        document.body.style.overflow = "auto";
                document.querySelector(".sure h2").textContent = `Are you sure abuot buying`;
        buybut.classList.remove("none");
        notbuybut.textContent = `not sure`;
    });}
    if (buybut) {
    buybut.addEventListener("click", () => {
        buybut.classList.add("none");
        document.querySelector(".sure h2").textContent = `Thank you for your purchase!`;
        notbuybut.textContent  =`back`
    });

}
