$.fn.validateForm = function() {
    $(this).validate({
        rules: {
            apple : 'required',
            name: 'required',
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            add1: 'required',
            city : 'required',
            country : 'required'
        },
        messages: {
            apple: 'Please select a computer',
            name: 'Please enter your Full Name',
            email: 'Please enter a valid email address',
            phone : 'Please enter a valid phone number',
            add1 : 'Please enter your address',
            city : 'Please enter your city',
            country : 'Please enter your country'
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
};
$(document).ready(function() {
    $('form').validateForm();
});