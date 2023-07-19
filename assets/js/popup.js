$(function(){
    // 배경 클릭 시 팝업 닫기
    $('.popup').click(function(e){
        if (e.target !== e.currentTarget) return;
        $('.popup').css('display', 'none');
        $('.popup').empty();
    });
});


var popup_html = {
    popup_2btn : function(date) {
                var html = '<div class="popup_html popup_2btn">'
                +     '<div class="change_place" onclick="popup(\'popup_playroom\', \'' + date + '\' )">'
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
                + '</div>';
                return html;
                },
    popup_playroom : function(date) { 
                var html = '<div class="popup_playroom">'
                +         '<p class="popup_header">'
                +             '<span onclick="popup_back(\'' + date + '\')"><img src="./assets/images/icon/arrow-left.png"></span>'
                +             '타석변경'
                +         '</p>'
                +         '<div class="popup_body">'
                +            ' <ul class="choice_playroom">'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">1</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">2</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">3</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">4</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">5</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">6</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">7</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">8</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">9</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">10</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">11</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">12</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">13</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">14</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)">15</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">16</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">17</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">18</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">19</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)">20</li>'
                +             '</ul>'
                +             '<p>'
                +                 '<span class="reserv_possible">예약가능</span>'
                +                 '<span class="reserv_complete">예약완료</span>'
                +             '</p>'
                +             '<button class="c_btn">확인 후 시간변경</button>'
                +             '<button class="c_btn" onclick="set_playroom(\'' + date + '\')">확인</button>'
                +         '</div>'
                +     '</div>';
                return html;
                },
}

//팝업 액션
function popup(type, day){
    switch(type){
        case "popup_2btn" :
            var html = popup_html.popup_2btn(day);
            $('.popup').append(html)
            $('.popup').css('display', 'flex');
            break;
        case "popup_playroom" :
            var html = popup_html.popup_playroom(day);
            $('.popup').empty();
            $('.popup').append(html)
            break;
    }
}

//뒤로가기
function popup_back(day){
    $('.popup').empty();
    var html = popup_html.popup_2btn(day);
    $('.popup').append(html);
}

//타석 선택 엑션
function choice_playroom(el){
    var class_name = $(el).attr('class');
    console.log(class_name);
    if(class_name == 'reserv_possible'){
        console.log('gkgk')
        $(el).parent().children('li').removeClass('on');
        $(el).addClass('on');
    }
}

//타석 선택 완료
function set_playroom(day){
    $('.popup').empty();
    var html = popup_html.popup_2btn(day);
    $('.popup').append(html);
}
