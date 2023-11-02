$(document).ready(() => {

    checkusernamevalid = true;
    checkusermail = true;
    checkpassword = false;
    checkconfirmpassword = false;

    $('#email').on("input", function () {

        const email = $('#email').val();
        const regExEmail = /^[\w-\.]+@northeastern.edu$/.test(email);

        console.log(email);
        console.log(regExEmail);
        if (email == '') {
            $('.erroremail').text('Email cannot be empty');
            checkusermail = false;
            validate();
        }
        else if (!regExEmail) {
            $('.erroremail').text('Please Enter correct Email Id');
            checkusermail = false;
            validate();

        }
        else {
            $('.erroremail').text('');
            checkusermail = true;
            validate();

        }
    })


    $('#username').on("input", function () {

        const username = $('#username').val();
        // const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const regName = /^[A-Za-z\s']{3,12}$/.test(username);

        // console.log(email);
        // console.log(regExEmail);
        if (username == '') {
            $('.errorusename').text('User Name cannot be empty');
            checkusernamevalid = false;
            validate();

        }
        else if (!regName) {
            $('.errorusename').text('Please Enter correct User Name');
            checkusernamevalid = false;
            validate();

        }
        else {
            $('.errorusename').text('');
            // localStorage.setItem('name', username);

            // localStorage.setItem("name",username)
            checkusernamevalid = true;
            validate();


        }
        localStorage.setItem("name", username);
    })



    $('#password').on("input", function () {
        let password = $('#password').val();
        let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);;
        let cpassword = $('#cpassword').val();

        if (password == '') {
            $('.errorpass').text('Password cannot be empty');
            checkpassword = false;
            validate();

        }
        else if(regexpass ){
            $('.errorpass').text('');
            checkpassword = true;
            validate();
            if(cpassword == password){
                $('.errorpass').text('');
                checkpassword = true;
                checkconfirmpassword = true;
    
                validate();
            }
            else if (cpassword != password) {
                $('.errorcpass').text('Confirm Password is not matching');
                checkconfirmpassword = false;
                checkpassword=true;
                validate();  
            }
            
        }
        else if (!regexpass) {
            $('.errorpass').text('Password is not valid');
            checkpassword = false;
            validate();
           
        }
        
        // else if(cpassword == password){
        //     $('.errorpass').text('');
        //     checkpassword = true;
        //     checkconfirmpassword = false;

        //     validate();
        // }
        else {
            $('.errorpass').text('');
            checkpassword = true;
            validate();


        }

    })


    $('#cpassword').on("input", function () {
        const password = $('#password').val();

        const cpassword = $('#cpassword').val();
        const regexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/.test(cpassword);;

        if (cpassword == '') {
            $('.errorcpass').text('Confirm Password cannot be empty');
            checkconfirmpassword = false;
            validate();

        }
        else if (cpassword != password) {
            $('.errorcpass').text('Confirm Password pass is not matching');
            checkconfirmpassword = false;
            validate();

        }
        // else if(cpassword == password){
        //     $('.errorpass').text('');
        //     checkpassword = true;
        //     validate();
        // }
        else {
            $('.errorcpass').text('');
            checkconfirmpassword = true;
            validate();
        }

    })
    function validate(){
        if(checkusernamevalid && checkusermail && checkpassword && checkconfirmpassword) {
            $('#submitbutton').prop('disabled', false);
            $('#submitbutton').css({
                'background-color': 'blue',
                'cursor': 'pointer'


            });
    
            
        }
        else{
            $('#submitbutton').prop('disabled', true);
            $('#submitbutton').css({
                'background-color': 'gray',
                'cursor': 'not-allowed'
        });




    }
    }
  


});