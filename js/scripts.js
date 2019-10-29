/* Sidebar toggle (mobile) */
$(function () {
    $("#menu-toggle").click(function(e) {
	   e.preventDefault();
       $(".page-wrapper").toggleClass("toggled");
    });
});

/* Loop for Age */
$(function(){
    var age="";
    var agelimit=130;
    for(var i=18;i<=agelimit;i++)
    {
       age+="<option value='"+i+"'>"+i+"</option>";
    }       
    $("#fage").html(age);        
 });

/* Form Validation and Submission */
$(function() {
    $("#formDetails").validate({
        rules: {
            number: {
                digits: true
            }
        },
        submitHandler: function (form) {
            var form = $(this);
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).done(function() {
                $("#mainContent").remove();
                $("#successContent").load( "form-success.html" ).hide().fadeIn("slow");
            });
        }
    });
});