$(document).ready(function(){
 var i=0;
 var numOfQuestions=0;
 var choice_c = 1;
 $("#addq").click(function(){
         numOfQuestions++;
         i++;
         $("#questions").append("<div id='newq' style='margin-top: 5px; margin-bottom: 5px'></div>");
         $("#newq").append("Question: <input type='text' name='q"+i+"' class='form-control' style='display: inline-block' id='q"+i+"'/>");
         $("#qnum").attr("value", numOfQuestions);
         $("#newq").append("<label><input type='radio' name='radio"+i+"' value='radio' class='choices radiobox' id='radiobox"+i+"'/>&nbsp;Radiobox&nbsp;&nbsp;</label>");
         $("#newq").append("<label><input type='radio' name='radio"+i+"' value='check' class='choices checkbox' id='checkbox"+i+"'/>&nbsp;Checkbox&nbsp;&nbsp;</label>");
         $("#newq").append("<label><input type='radio' name='radio"+i+"' value='text' class='choices textbox' id='textbox"+i+"'/>&nbsp;Text&nbsp;&nbsp;</label>");
         $("#newq").append("<input type='text' class='form-control qchoice' name='radiochoice"+choice_c+"_q"+i+"' id='radiochoice"+choice_c+"' title='q"+i+"' style='display: none'/>");
         choice_c++;
         $("#newq").append("<input type='text' class='form-control qchoice' name='radiochoice"+choice_c+"_q"+i+"' id='radiochoice"+choice_c+"' title='q"+i+"' style='display: none'/>");
         choice_c++;
         $("#newq").append("<button id='radiobtn"+i+"' type='button' class='btn btn-primary add-radio-choice' style='display: none'><span class='glyphicon glyphicon-plus'></span>Add choices</button>");
         $("#newq").append("<button id='checkbtn"+i+"' type='button' class='btn btn-primary add-checkbox-choice' style='display: none'><span class='glyphicon glyphicon-plus'></span>Add choices</button>");
     });
     $(document.body).on('change', '.choices' ,function() {
         if ($(".radiobox").is(":checked")) {
             $(".add-radio-choice").show();
             $(".qchoice").show();
             $(".add-checkbox-choice").hide();
         }
         else if ($(".checkbox").is(":checked")) {
             $(".add-checkbox-choice").show();
             $(".add-radio-choice").hide();
             $(".qchoice").show();
         }
         else if($(".textbox").is(":checked")){
             $(".add-checkbox-choice").hide();
             $(".add-radio-choice").hide();
             $(".qchoice").hide();
         }
     });
     $(document.body).on('click', '.add-radio-choice' ,function(){
         $("#newq").append("Choice: <input type='text' name='radiochoice"+choice_c+"_q"+i+"' title='q"+i+"' class='form-control qchoice' id='radiochoice"+choice_c+"'/>");
         $("#choicenum").attr("value", choice_c);
     });
     $(document.body).on('click', '.add-checkbox-choice' ,function(){
         $("#newq").append("<input type='text' name='radiochoice"+choice_c+"_q"+i+"' title='q"+i+"' class='form-control qchoice' id='checkboxchoice"+choice_c+"'>");
         $("#choicenum").attr("value", choice_c);
     });
