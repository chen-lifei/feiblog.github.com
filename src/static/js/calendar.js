window.onload = function () {
    window.setMonth = new Date().getMonth();
    // window.setMonth = 5;
    var ul = document.querySelector(".day");
    var pre = document.querySelector(".pre");
    var back = document.querySelector(".back");
    function getDate() {
        ul.innerHTML = '';
        var date = new Date();
        date.setMonth(setMonth);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        document.querySelector(".date").innerHTML = y + "年" + m + "月";
        var month = setMonth % 12;

        if (month < 0) {
            month = month % 12 + 12;
        }
        // 获取当前月份的天数
        date.setMonth(month + 1);
        date.setDate(0);
        var allDay = date.getDate();

        // 获取当前月份第一天是星期几
        date.setMonth(month);
        date.setDate(1);
        var firstDay = date.getDay();

        // 填充空白天数
        for (var i = 0; i < firstDay; i++) {
            var li = document.createElement("li");
            ul.append(li);
        }
        // 填充非空白天数
        for (var i = 1; i <= allDay; i++) {
            var li = document.createElement("li");
            li.innerHTML = i;
            ul.append(li);
        };
        // 周末颜色变灰
        for (var i = 0; i < ul.children.length; i++) {
            if (i % 7 == 0 || i % 7 == 6) {
                ul.children[i].style.color = "#ccc";
            }
        }
        // 给当前日期改颜色
        var odate = new Date();
        var oyear = odate.getFullYear();
        var omonth = odate.getMonth() + 1;
        if (oyear == y && omonth == m) {
            ul.children[d + firstDay - 1].style.color = "#007dff";
        };
    };
    getDate();
    pre.onclick = function () {
        setMonth--;
        getDate();
    };
    back.onclick = function () {
        setMonth++;
        getDate();
    }
}