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
            var form = $("#formDetails");
            var submitButton = $("#form-submit");
            var mainContent = $("#mainContent");
            var successContent = $("#successContent");

            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                dataType: 'jsonp',
                data: form.serialize(),
                beforeSend: function() {
                    submitButton.html('Sending....');
                },
                complete: function(data) {
                    mainContent.fadeOut(5000, function() { 
                        $(this).remove();
                    });
                    successContent.load("form-success.html");
                }
            });
        }
    });
});