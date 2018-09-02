
$(document).ready(function(){

    /* section 2 animation for large screen */

    let imageHover1 = $(".sec2-container-background_1");

    let $imgPosition1 = $('.sec2_image_1_1'),
        $imgStartCoordinate1 = $('.sec2_image_1_1').offset(),
        $targetCoordinatesLeft1 = $('.sec2_heading').offset();

    let $leftDist = $targetCoordinatesLeft1.left - $imgStartCoordinate1.left;


    $(imageHover1).hover(function (){

        $imgPosition1.animate({
                left: $leftDist},
            2000);

    });


    let imageHover2 = $(".sec2-container-background_2");
    let $imgPosition2 = $('.sec2_image_2_1'),
        $imgStartCoordinate2 = $('.sec2_image_2_1').offset(),
        $targetCoordinatesLeft2 = $('.sec2_desc_2').offset();


    $(imageHover2).hover(function (){

        $imgPosition2.animate({
                left: $targetCoordinatesLeft2.left - $imgStartCoordinate2.left - 200},
            2000);


    });


    let imageHover3 = $(".sec2-container-background_3");

    let $imgPosition = $('.sec2_image_3_1'),
        $imgStartCoordinate = $('.sec2_image_3').offset(),
        $targetCoordinatesLeft = $('.sec2_heading').offset(),
        $targetCoordinatesTop = $('.sec2_desc_3').offset();


    $(imageHover3).hover(function (){

        $imgPosition.animate({
                'left': $targetCoordinatesLeft.left - $imgStartCoordinate.left,
                'top': $targetCoordinatesTop.top - $imgStartCoordinate.top},
            2000);


    });


    /* section 2 animation for small screen */

    let imageHover1_sm = $(".sec2-container-background_1_small");

    let $imgPosition1_sm = $('.sec2_image_1_1_small'),
        $imgStartCoordinate1_sm = $('.sec2_image_1_1_small').position(),
        $targetCoordinatesTop1_sm = $('.sec2_desc_1_small').position();


    $(imageHover1_sm).hover(function (){

        $imgPosition1_sm.animate({
                'top': $targetCoordinatesTop1_sm.top - $imgStartCoordinate1_sm.top + 100},
            2000);

    });


    let imageHover2_sm = $(".sec2-container-background_2_small");
    let $imgPosition2_sm = $('.sec2_image_2_1_small'),
        $imgStartCoordinate2_sm = $('.sec2_image_2_1_small').position(),
        $targetCoordinatesLeft2_sm = $('.sec2_desc_2_small').position();


    $(imageHover2_sm).hover(function (){

        $imgPosition2_sm.animate({
                top: $targetCoordinatesLeft2_sm.top - $imgStartCoordinate2_sm.top + 100},
            2000);


    });


    let imageHover3_sm = $(".sec2-container-background_3_small");

    let $imgPosition_sm = $('.sec2_image_3_1_small'),
        $imgStartCoordinate_sm = $('.sec2_image_3_small').position(),
        $targetCoordinatesTop_sm = $('.sec2_desc_3_small').position();


    $(imageHover3_sm).hover(function (){

        $imgPosition_sm.animate({
                'top': $targetCoordinatesTop_sm.top - $imgStartCoordinate_sm.top},
            2000);


    });


    /* section 3 animation for large */


    let imageHover4 = $(".sec3-container-background");

    $(imageHover4).hover(function (){

        let $imgPosition1 = $('.sec3_image_1'),
            $imgPosition2 = $('.sec3_image_1_1'),
            $descPosition = $('.sec3_heading_desc_holder');

        $imgPosition1.animate({
            position: "relative",
            left: '180px',
            top: '150px',
            opacity: '0.8'
        }, 2500);

        $imgPosition2.animate({
            position: "relative",
            left: '0px',
            top: '300px',
            opacity: '0.8'
        }, 2500);

        $descPosition.animate({
            position: "relative",
            left: '0px',
            top: '400px',
            width: '500px',
            height: '300px',
            padding:'50px',
            opacity: '0.8'
        }, 2500);

    });


    /* section 3 animation for small */

    let imageHover4_sm = $(".sec3-container-background_sm");

    $(imageHover4_sm).hover(function (){

        let $imgPosition1_sm = $('.sec3_image_1_sm'),
            $descPosition_sm = $('.sec3_heading_desc_holder_sm');



        $imgPosition1_sm.animate({
            position: "relative",
            top: '40px'
        }, 2500);


        $descPosition_sm.animate({
            position: "relative",
            left: '0px',
            top: '200px',
            padding:'50px'
        }, 2500);


    });


    let headingHover5 = $(".sec4-container-background");

    $(headingHover5).hover(function (){

        let $headingPosition = $('.sec4_heading');

        $headingPosition.animate({
            position: "relative",
            top: '40px',
            left: '0px'
        },2000);

        $('.title1').css({
            'border-bottom-width': '1.5px',
            'border-bottom-color': '#545470',
            'border-bottom-style':  'solid'
        });


        $('.title2').css({
            'border-bottom-width': '1.5px',
            'border-bottom-color': '#545470',
            'border-bottom-style':  'solid'
        });


        $('.title3').css({
            'border-bottom-width': '1.5px',
            'border-bottom-color': '#545470',
            'border-bottom-style':  'solid'
        });

    });


    $(headingHover5).hover(function (){

        if (window.matchMedia('(min-width: 992px)').matches){
            let $image1Position = $('.image1_card');
            let $image3Position = $('.image3_card');

            $image1Position.animate({
                position: "relative",
                left: '40px'
            },4000);


            $image3Position.animate({
                position: "relative",
                right: '40px'
            },4000);

        }
    });


    let headingHover = $(".sec5-container-background");

    $(headingHover).hover(function (){

        let $headingPosition = $('.sec5_heading');

        $headingPosition.animate({
            position: "relative",
            top: '5px',
            left: '0px'
        },3000);

    });


})


/* text animation section 5 */
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}

var j = 0;
var txt1 = "select images for more information.";
var speed1 = 100;


$(".sec5-container-background").hover(function typeWrite(){

    $('sec5-container-background').scrollView();

    if (j < txt1.length) {
        (document).getElementById("sec5_heading_images").innerHTML += txt1.charAt(j);
        j++;

        setTimeout(typeWrite, speed1);

    }

});

var i = 0;
var txt = "Brown Sugar Bee";
var speed = 500;
var speed_sm = 700;

$(".sec5-container-background").hover(function typeWrite(){

    $('sec5_card').scrollView();

    if (i < txt.length) {
        (document).getElementById("sec5_heading_id").innerHTML += txt.charAt(i);
        i++;

        if (window.matchMedia('(max-width: 767px)').matches){
            setTimeout(typeWrite, speed_sm);
        }
        else{
            setTimeout(typeWrite, speed);
        }

    }

});


// Get the 1st modal
var modal1 = document.getElementById('myModal');

// Get the button that opens the modal
var image_button = document.getElementById("sec5_img_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modal_counter = 0;

// When the user clicks the button, open the modal
image_button.onclick = function() {
    modal_counter ++;
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
    modal_counter--;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        modal_counter--;
    }
}


// Get the 2nd modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var image_button2 = document.getElementById("sec6_img_btn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
image_button2.onclick = function() {
   if(modal_counter){
       modal1.style.display = "none";
       modal_counter--;
   }
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


/* footer animation */

let imageHoverFooter1 = $(".footer-container-background");

$(imageHoverFooter1).hover(function (){

        let $imgFooter1 = $('.footer_image_1'),
            $imgFooter2 = $('.footer_image_2');

        $imgFooter1.animate({
            position: "relative",
            left: '0px'
        }, 2500);

        $imgFooter2.animate({
            position: "relative",
            right: '0px'
        }, 2500);

});

