	

$(document).ready(function(){

    Parse.initialize("W55Jkpl19kt2F7GjrWxqo053IOE2Snnq2oPhci4K", "c44pq0VrJIgvMWZzHJyGLcVeT6eHrB721vhyviHU");

    $("#confirm1").unbind("click").bind("click",  function(){
        var email = $("#email1").val();
        var TestObject = Parse.Object.extend("MailingList");
        var testObject = new TestObject();
          testObject.save({email: email}, {
          success: function(object) {
            console.log("Success");
            console.log(object);
            $("#form1").css("display", "none");
            $("#form2").css("display", "none");
            $("#form1Confirm").css("display", "block");
            $("#form2Confirm").css("display", "block");
          },
          error: function(model, error) {
            console.log("Failure");
            console.log(error);
          }
        });
    });

    $("#confirm2").unbind("click").bind("click",  function(){
        var email = $("#email2").val();
        var TestObject = Parse.Object.extend("MailingList");
        var testObject = new TestObject();
          testObject.save({email: email}, {
          success: function(object) {
            console.log("Success");
            console.log(object);
            $("#form1").css("display", "none");
            $("#form2").css("display", "none");
            $("#form1Confirm").css("display", "block");
            $("#form2Confirm").css("display", "block");
          },
          error: function(model, error) {
            console.log("Failure");
            console.log(error);
          }
        });
    });


});
	