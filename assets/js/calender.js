$(function () {
    calendarMaker($("#calendarForm"), new Date());
});

var months_en = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var nowDate = new Date();
function calendarMaker(target, date) {
    if (date == null || date == undefined) {
        date = new Date();
    }
    nowDate = date;
    if ($(target).length > 0) {
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        $(target).empty().append(assembly(year, month));
    } else {
        console.error("custom_calendar Target is empty!!!");
        return;
    }

    var thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var thisLastDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);


    var tag = "<tr>";
    var cnt = 0;
    //빈 공백 만들어주기
    for (i = 0; i < thisMonth.getDay(); i++) {
        tag += "<td class='calen_days'></td>";
        cnt++;
    }

    //날짜 채우기
    for (i = 1; i <= thisLastDay.getDate(); i++) {
        if (cnt % 7 == 0) { tag += "<tr>"; }
        
        //개인 연습, 프로 레슨 차이
        if(i == 3){
            tag += "<td class='calen_days'><span class='personal_trainning'>" + i + "</span></td>";
        } else if(i == 5){
            tag += "<td class='calen_days'><span class='pro_trainning'>" + i + "</span></td>";
        } else {
            tag += "<td class='calen_days'><span>" + i + "</span></td>";
        }
        cnt++;
        if (cnt % 7 == 0) {
            tag += "</tr>";
        }
    }
    $(target).find("#custom_set_date").append(tag);
    calMoveEvtFn();
    //리스트 height 계산
    list_height();

    

    function assembly(year, month) {
        var calendar_html_code =
            "<table class='custom_calendar_table'>" +
            "<colgroup>" +
            "<col style='width:81px'/>" +
            "<col style='width:81px'/>" +
            "<col style='width:81px'/>" +
            "<col style='width:81px'/>" +
            "<col style='width:81px'/>" +
            "<col style='width:81px'/>" +
            "<col style='width:81px'/>" +
            "</colgroup>" +
            "<thead class='cal_date'>" +
            "<th><button type='button' class='prev'><img src='./assets/images/icon/arrow-left.svg' ></button></th>" +
            "<th colspan='5'><p class='calen_month'>" + months_en[month] + "<span>(" + month + "월)</span></p> <p class='calen_year'>" + year + "</p></th>" +
            "<th><button type='button' class='next'><img src='./assets/images/icon/arrow-right.svg' ></button></th>" +
            "</thead>" +
            "<thead class='cal_week'>" +
            "<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>sat</th>" +
            "</thead>" +
            "<tbody id='custom_set_date'>" +
            "</tbody>" +
            "</table>";
        return calendar_html_code;
    }

    function calMoveEvtFn() {
        //전달 클릭
        $(".custom_calendar_table").on("click", ".prev", function () {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate());
            calendarMaker($(target), nowDate);
            //리스트 height 사이즈 변경
            list_height();
        });
        //다음날 클릭
        $(".custom_calendar_table").on("click", ".next", function () {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate());
            calendarMaker($(target), nowDate);
            //리스트 height 사이즈 변경
            list_height();
        });
        //일자 선택 클릭
        $(".custom_calendar_table").on("click", "td", function () {
            $(".custom_calendar_table .select_day").removeClass("select_day");
            $(this).removeClass("select_day").addClass("select_day");
            var day = $(this).text();
            popup("popup_2btn",day);
        });
    }

    function checkDay(){
        
    }
}