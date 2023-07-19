$(function(){
    // 배경 클릭 시 팝업 닫기
    $('.popup').click(function(e){
        if (e.target !== e.currentTarget) return;
        $('.popup').css('display', 'none');
        $('.popup').empty();
    })
});

var popup_html = {
    popup_2btn : '<div class="popup_html popup_2btn">'
                +     '<div class="change_place">'
                +         '<div>'
                +             '<img src="./assets/images/images/select_r_number_img.svg">'
                +         '</div>'
                +         '<p class="">타석변경</p>'
                +     '</div>'
                +     '<div class="change_time">'
                +         '<div>'
                +             '<img src="./assets/images/images/select_time_img.svg">'
                +         '</div>'
                +         '<p>시간변경</p>'
                +     '</div>'
                + '</div>',
    popup_playroom : '',
}

function popup(type, day){
    switch(type){
        case "popup_2btn" :
            $('.popup').append(popup_html[type])
            $('.popup').css('display', 'flex');
    }
}
