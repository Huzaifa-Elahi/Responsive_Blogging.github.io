// toggle function
$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    // click event

    $toggleCollapse.click(function(){
        // add and remove multiple css classes
        $nav.toggleClass('collapse');
    })

// toogle collapse anomaly











// in index we have initialized owl carousel but havent called it so here we called it
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:3000,
        nav: true,
        dots: false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        // here we use JQuery to ease our rag selection and changed arrows and applied timeout so the carousel can cahnge auto in evry 3sec

        responsive :responsive
        // calling responsive which is down below


        
    });

     // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const datee = document.querySelector('.datee');
const datee2 = document.querySelector('.datee2');
const datee3 = document.querySelector('.datee3');
const datee4 = document.querySelector('.datee4');
const copy = document.querySelector('.copy');

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const date = tomorrow.getDate();
// const month = tomorrow.getMonth();
const year = tomorrow.getFullYear();
const year2 = (tomorrow.getFullYear()+1); 

let month = tomorrow.getMonth();
month= months[month];
// for blog second increases one month
let month2 = (tomorrow.getMonth()+1);
month2= months[month2];

// for sidebar
const get_todays_date = new Date()
const todays_date = get_todays_date.getDate();
let month3 = (tomorrow.getMonth()+4);
month3= months[month3];
// sidebar end
datee.textContent = `${date} ${month}, ${year}`;
datee2.textContent = `${date} ${month2}, ${year}`;
datee3.textContent = `${date} ${month}, ${year2}`;
datee4.textContent = `${todays_date} ${month3}, ${year2}`;

// datee.textContent = ` ${tomorrow}`;

// SIDEBAR DATES

const s_date_1 = document.querySelector('.s_date_1');
const s_date_2 = document.querySelector('.s_date_2');
const s_date_3 = document.querySelector('.s_date_3');
const s_date_4 = document.querySelector('.s_date_4');
const s_date_5 = document.querySelector('.s_date_5');

s_date_1.textContent = `${date} ${month}, ${year}`;
s_date_2.textContent = `${date} ${month2}, ${year}`;
s_date_3.textContent = `${date} ${month}, ${year2}`;
s_date_4.textContent = `${todays_date} ${month}, ${year2}`;
s_date_5.textContent = `${date} ${month3}, ${year2}`;
copy.textContent = `${year}`;

// copy

const copy_year = tomorrow.getFullYear()



// scroll funtion

$('.move-up span').click(function(){
    $('html, body').animate({
        scrollTop:0
    },1000);

    
// AOS ANIMATION

AOS.init();
});

// carousel responsive

const responsive = {

    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
 
}


// (document).ready(function () {

//     $nav = $('.nav');
//     $toggleCollapse = $('.toggle-collapse');

//     /** click event on toggle menu */
//     $toggleCollapse.click(function () {
//         $nav.toggleClass('collapse');
//     })

//     // owl-crousel for blog
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         autoplay: false,
//         autoplayTimeout: 3000,
//         dots: false,
//         nav: true,
//         navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
//         responsive: responsive
//     });


//     // click to scroll top
//     $('.move-up span').click(function () {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 1000);
//     })

//     // AOS Instance
//     AOS.init();

// });
