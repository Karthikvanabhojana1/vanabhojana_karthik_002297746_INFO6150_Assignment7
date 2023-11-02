$(document).ready(() => {

      $('#populatetext').text(localStorage.getItem("name"));

 $('#num1').on("input", function () {

        const num1 = $('#num1').val();
        const regexnum1 = /^-?\d+(\.\d+)?$/.test(num1);

      
        if (num1 == '') {
            $('#errornum1').text('Number 1 cannot be empty');
            num1check = false;
            // validatenum();
        }
        else if (!regexnum1) {
            $('#errornum1').text('Please enter the Numerical Digits');
            num1check = false;
            // validatenum();

        }
        else {
            $('#errornum1').text('');
            num1check = true;
            // validatenum();

        }
    })

    $('#num2').on("input", function () {

        const num2 = $('#num2').val();
        const regexnum2 =/^-?\d+(\.\d+)?$/.test(num2);

      
        if (num2 == '') {
            $('#errornum2').text('Number 2 cannot be empty');
            num2check = false;
            // validatenum();
        }
        else if (!regexnum2) {
            $('#errornum2').text('Please enter the Numerical Digits');
            num2check = false;
            // validatenum();

        }
        else {
            $('#errornum2').text('');
            num2check = true;
            // validatenum();

        }
    })

    $('.operation').click((event) => {
        const buttonId = $(event.currentTarget).attr('id');
        console.log(buttonId)
    var num;
        const num1 = parseFloat($('#num1').val()) ;
        const num2 =parseFloat($('#num2').val()) ;
        switch (buttonId) {
            case "add":
               num= num1+num2;
                break;
            case "subtract":
                num= num1-num2;
                break;
            case "divide":
                if(num2==0){
num="Number2 cannot be zero"
                }
                else{
                num=num1/num2;
                }
                break;
            case "multiply":
                num=num1*num2;
                
                break;
            default:
                break;
        }
console.log(num);
$('#res').val(num);
    });
});