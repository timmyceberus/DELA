$('button[type=submit]').on('click', () => {
    const name = $('input[type=text]').val();
    const password = $('input[type=password').val();

    if(name!='' && password!='') {
        localStorage.setItem('name', name);
        window.location.href = "index.html"
    }

    if (name==='') {
        $('input[type=text] ~ span.float').addClass('error');
        $('input[type=text] ~ span.faded').addClass('error');
        $('input[type=text] ~ .error-message').addClass('show');
    }

    if (password==='') {
        $('input[type=password] ~ span.float').addClass('error');
        $('input[type=password] ~ span.faded').addClass('error');
        $('input[type=password] ~ .error-message').addClass('show');
    }
});

$('input[type=text]').on('keydown', ()=>{
    $('input[type=text] ~ span.float').removeClass('error');
    $('input[type=text] ~ span.faded').removeClass('error');
    $('input[type=text] ~ .error-message').removeClass('show');

})

$('input[type=password]').on('keydown', ()=>{
    $('input[type=password] ~ span.float').removeClass('error');
    $('input[type=password] ~ span.faded').removeClass('error');
    $('input[type=password] ~ .error-message').removeClass('show');
})
