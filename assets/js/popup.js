//선택한 타석 번호 임시저장
var choose_room_number;
//선택한 시간 임시 저장
var choose_time;

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
                +     '<div class="change_time" onclick="popup(\'popup_playtime\', \'' + date + '\' )">'
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
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_1">1</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_2">2</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_3">3</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_4">4</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_5">5</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_6">6</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_7">7</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_8">8</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_9">9</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_10">10</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_11">11</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_12">12</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_13">13</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_14">14</li>'
                +                 '<li class="reserv_possible" onclick="choice_playroom(this)" id="playroom_15">15</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_16">16</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_17">17</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_18">18</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_19">19</li>'
                +                 '<li class="reserv_complete" onclick="choice_playroom(this)" id="playroom_20">20</li>'
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
    popup_playtime : function(date) { 
                var html = '<div class="popup_playtime">'
                +            '<p class="popup_header">'
                +                '<span onclick="popup_back(12)"><img src="./assets/images/icon/arrow-left.png"></span>'
                +                '시간변경'
                +            '</p>'
                +            '<div class="popup_body">'
                +                '<ul class="choice_playtime">'
                +                    '<li onclick="choice_playtime(this)" id="playtime_00" class="reserv_possible">00:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_01" class="reserv_possible">01:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_02" class="reserv_possible">02:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_03" class="reserv_complete">03:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_04" class="reserv_possible">04:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_05" class="reserv_possible">05:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_06" class="reserv_possible">06:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_07" class="reserv_possible">07:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_08" class="reserv_possible">08:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_09" class="reserv_complete">09:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_10" class="reserv_possible">10:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_11" class="reserv_possible">11:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_12" class="reserv_possible">12:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_13" class="reserv_possible">13:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_14" class="reserv_possible">14:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_15" class="reserv_possible">15:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_16" class="reserv_possible">16:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_17" class="reserv_possible">17:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_18" class="reserv_possible">18:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_19" class="reserv_possible">19:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_20" class="reserv_possible">20:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_21" class="reserv_possible">21:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_22" class="reserv_possible">22:00</li>'
                +                    '<li onclick="choice_playtime(this)" id="playtime_23" class="reserv_possible">23:00</li>'
                +                '</ul>'
                +                '<p>'
                +                    '<span class="reserv_possible">예약가능</span>'
                +                    '<span class="reserv_complete">예약완료</span>'
                +                '</p>'
                +                '<button class="c_btn" onclick="set_playroom(\'' + date + '\')">확인</button>'
                +            '</div>'
                +        '</div>';
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
        case "popup_playtime" : 
            var html = popup_html.popup_playtime(day);
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
    if($(el).attr('class').indexOf('on') <= -1){
        var room_number = $(el).attr('id');
        choose_room_number = room_number.replace("playroom_", "");
        console.log(choose_room_number);
    }
    if(class_name == 'reserv_possible'){
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

//시간 선택 엑션
function choice_playtime(el){
    var class_name = $(el).attr('class');
    if($(el).attr('class').indexOf('on') <= -1){
        var room_number = $(el).attr('id');
        choose_room_number = room_number.replace("playtime_", "");
        console.log(choose_room_number);
    }
    if(class_name == 'reserv_possible'){
        $(el).parent().children('li').removeClass('on');
        $(el).addClass('on');
    }
}

//시간 선택 완료
function set_playroom(day){
    $('.popup').empty();
    var html = popup_html.popup_2btn(day);
    $('.popup').append(html);
}