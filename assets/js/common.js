$(function(){
    // input placeholder show/hide
    $('input').focus(function(){
        $(this).prev().hide();
    });
    $('input').focusout(function(){
        if($(this).val() == null || $(this).val() == ""){
            $(this).prev().show();
        }
    });

    //리스트영역 잡기
    
    $(window).resize(function(){
        list_height();
    }).resize();
});

//패스워드 보기/감추기
function sh_pw(el){
    var name = $(el).attr('class');
    if(name.indexOf('show_pw') > -1){
        $('.hide_pw').show();
        $(el).hide();
        $(el).siblings('input').css('-webkit-text-security', 'none');
    } else if(name.indexOf('hide_pw') > -1) {
        $('.show_pw').show();
        $(el).hide();
        $(el).siblings('input').css('-webkit-text-security', 'disc');
    }
}

function list_height(){
    var url = window.location.href;
    if(url.indexOf('main') > -1){
        var window_height = window.outerHeight;
        var calender_height = $('#calendarForm').outerHeight(true);
        console.log(calender_height)
        $('.list_container').css('height', (window_height - calender_height - 152) + 'px');
    }
}