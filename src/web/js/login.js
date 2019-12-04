$('button[type=submit]').on('click', () => {
    const name = $('input[type=e-mail]').val();
    const password = $('input[type=password').val();

    if(name!='' && password!='') {
        localStorage.setItem('name', name);
        window.location.href = "index.html"
    }
    
    if (name==='') {
        $('input[type=e-mail] ~ span.float').addClass('error');
        $('input[type=e-mail] ~ span.faded').addClass('error');
    }

    if (password==='') {
        $('input[type=password] ~ span.float').addClass('error');
        $('input[type=password] ~ span.faded').addClass('error');
    }
});

$('input[type=password]').on('keydown', ()=>{
    $('input[type=password] ~ span.float').removeClass('error');
    $('input[type=password] ~ span.faded').removeClass('error');
})