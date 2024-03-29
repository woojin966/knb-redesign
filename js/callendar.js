$(document).ready(function(){
    var gcObject = {
        options : options ={ 
            dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            dayBegin:1,monthNames:[],
            onprevYear:function(e){},
            onCurrentYear:function(e){},
            onPrevMonth:function(e){},
            onNextMonth:function(e){},
            events:[{
                date:null,
                eventName:null,
                className:null,
                onclick:function(e,t){},
                dateColor:"#38385c"
            }],
            onclickDate:function(e,t){},
            nextIcon:"&gt;",
            prevIcon:"&lt;"
        },
        el:"",
        eventAnimate:"none",
        pickedDate:new Date,
        prevMonth(){
            this.pickedDate=new Date(this.pickedDate.getFullYear(),
            this.pickedDate.getMonth()-2,1),
            this.options.onPrevMonth(this.pickedDate),
            this.eventAnimate="prev",
            this.render()
        },
        nextMonth(){
            this.pickedDate=new Date(this.pickedDate.getFullYear(),
            this.pickedDate.getMonth(),1),
            this.options.onNextMonth(this.pickedDate),
            this.eventAnimate="next",
            this.render()
        },
        prevYear(){
            
        },
        currentYear(){},
        render(){
            const e=$(this.el);e.html("");
            const t=$('<div class="gc-calendar"></div>');
            e.append(t);
            const n=$('<div class="gc-calendar-header"></div>');
            n.appendTo(t);
            const a=$('<span class="gc-calendar-month-year"></span>');
            a.appendTo(n);
            $(`<div class="tabMenuBox iS5Box1"><ul><li><a href='javascript:void(0)' class='tabbtn prevYearBtn year'> ${this.pickedDate.getFullYear() - 1}</a></li><li><a href='javascript:void(0)' class='tabbtn currentYearBtn year'> ${this.pickedDate.getFullYear()}</a></li></ul></div>`).appendTo('.scheduleTitle2');
            $('.prevYearBtn').on("click",(function(e){gcObject.prevTear()}));
            $(`<span class='month'>${this.options.monthNames[this.pickedDate.getMonth()]}</span>`).appendTo(a);   
            const o=$(`<button type="button" class='prev'>${this.options.prevIcon}</button>`);
            o.appendTo(n),o.on("click",(function(e){gcObject.prevMonth()}));
            const s=$(`<button type="button" class='next'>${this.options.nextIcon}</button>`);
            s.appendTo(n),s.on("click",(function(e){gcObject.nextMonth()}));
            const c=$('<table class="calendar"></table>');
            c.removeClass("slide-in-left slide-in-right slide-out-left slide-out-right"),"none"==this.eventAnimate?c.hide().addClass("slide-in-left").show():"prev"==this.eventAnimate?c.hide().addClass("slide-out-right").show().delay(200).hide().removeClass("slide-out-right").addClass("slide-in-left").show():c.hide().addClass("slide-out-left").show().delay(200).hide().removeClass("slide-out-left").addClass("slide-in-right").show(),c.appendTo(t);const i=$("<thead></thead>");
            i.appendTo(c);const d=$("<tr></tr>");
            d.appendTo(i);
            const l=this.options.dayNames.length;
            for(let e=0;e<l;e++){
                var r=e+gcObject.options.dayBegin;
                r>=l&&(r-=l);
                const t=gcObject.options.dayNames[r];
                $('<th class="dayname">'+t+"</th>").appendTo(d)}var h=$("<tbody></tbody>");
                h.appendTo(c);
                const p=this.getCalendarArray(),g=new Date;
                p.forEach((function(e){var t=$("<tr></tr>");
                e.forEach((function(e){var n=$('<td class="day"></td>');
                n.appendTo(t);
                var a=$('<a type="button" class="btn-gc-cell"></a>');
                n.append(a),a.click((function(t){gcObject.options.onclickDate(t,e)}));
                var o=$(`<span class="day-number">${e.date}</span>`);
                n.addClass(e.class),o.appendTo(a),g.getFullYear()==e.datejs.getFullYear()&&g.getMonth()==e.datejs.getMonth()&&g.getDate()==e.datejs.getDate()&&a.addClass("today");
                var s="";gcObject.options.events.forEach((function(t){if(t.date.getFullYear()==e.datejs.getFullYear()&&t.date.getMonth()==e.datejs.getMonth()&&t.date.getDate()==e.datejs.getDate()){n.addClass("event");
                var a=$(`<div class="gc-event ${t.className}">${t.eventName}</div>`);
                s="color:"+(t.dateColor||"inherit"),a.on("click",(function(e){t.onclick(e,t)})),n.append(a)}})),o.attr("style",s)})),t.appendTo(h)}))},getCalendarArray(){var e=new Date(this.pickedDate.getFullYear(),this.pickedDate.getMonth(),1).getDay(),t=new Date(this.pickedDate.getFullYear(),this.pickedDate.getMonth()+1,0).getDate(),n=new Date(this.pickedDate.getFullYear(),this.pickedDate.getMonth(),0).getDate(),a=[],o=e-gcObject.options.dayBegin;o<0&&(o=7+o);
                    for(let e=0;e<o;e++)a.push({
                        datejs:new Date(this.pickedDate.getFullYear(),this.pickedDate.getMonth()-1,n),
                        date:n,class:"prev-month"
                    }),n--;a.reverse();
                    var s=1;
                    for(let e=a.length;e<7;e++)a.push({
                        datejs:new Date(this.pickedDate.getFullYear(),
                        this.pickedDate.getMonth(),s),date:s,class:"current-month"
                    }),s++;
                    var c=[a],i=!1,d=this.pickedDate,l="current-month";
                    for(let e=1;e<6;e++){
                        var r=[];
                        for(let e=0;e<7;e++)r.push({
                            datejs:new Date(d.getFullYear(),d.getMonth(),s),
                            date:s,class:l
                        }),++s>t&&(s=1,d.setDate(1),d.setMonth(d.getMonth()+1),i=!0,l="next-month");
                        if(c.push(r),i)break
                    }return c
                }};
                        jQuery.fn.calendarGC=function(e={
                            dayNames:dayNames,
                            dayBegin:dayBegin,
                            monthNames:monthNames,
                            onPrevYear:onPrevYear,
                            onCurrentYear:onCurrentYear,
                            onPrevMonth:onPrevMonth,
                            onNextMonth:onNextMonth,
                            events:events,
                            onclickDate:onclickDate,
                            nextIcon:"&gt;",
                            prevIcon:"&lt;"
                        }){return gcObject.options.dayNames = e.dayNames||["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
                        gcObject.options.dayBegin=void 0===e.dayBegin||null===e.dayBegin?1:e.dayBegin,
                        gcObject.options.monthNames=e.monthNames||["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
                        gcObject.options.onPrevMonth=e.onPrevMonth||function(e){},
                        gcObject.options.onNextMonth=e.onNextMonth||function(e){},
                        gcObject.options.events=e.events||[{date:null,eventName:null,className:null,onclick:function(e,t){},dateColor:"#38385c"}],
                        gcObject.options.onclickDate=e.onclickDate||function(e,t){},gcObject.options.nextIcon=e.nextIcon||"&gt;",gcObject.options.prevIcon=e.prevIcon||"&lt;",gcObject.el=this,gcObject.render(),gcObject
    };
});