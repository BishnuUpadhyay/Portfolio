var typed=new Typed(".typing",{
    strings:["Web Designer","web Developer"],
    typespeed:100,
    backspeed:60,
    loop:true,
})

    function toggle() {
        var x = document.getElementById("navigation");
        if (x.style.left === "-270px") {
            x.style.left = "0px";
            document.getElementById('home').style.left = '270px';
        } else {
            x.style.left = "-270px";
            document.getElementById('home').style.left = '0px';
        }
    }

    $(document).ready(function(){
        $('.nav li a').click(function(event){
            //remove all pre-existing active classes
            $('.active').removeClass('active');
    
            //add the active class to the link we clicked
            $(this).addClass('active');
    
            //Load the content
            //e.g.
            //load the page that the link was pointing to
            //$('#content').load($(this).find(a).attr('href'));      
    
            // event.preventDefault();
        });
    });

  