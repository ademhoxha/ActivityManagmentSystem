
export class SchedulerUtils implements IScheduler {

    allDayStrategy : EvaluateSchedulerEvent;
    partialSingleDay : EvaluateSchedulerEvent;

    constructor(){
        var strategyFact = new schedulerStrategyFactory();
        this.allDayStrategy = strategyFact.getAllDayStrategy();
        this.partialSingleDay = strategyFact.getDateEvaluation();
    }

    generateEventEndDate(start) {
        var time = start.split("T");
        if (time && time.length == 2) {
            var h = time[1].split(":")[0];
            var m = time[1].split(":")[1];

            if (m == "00") {
                m = "30";
            }
            else {
                let num = parseInt(h);
                num = num + 1;
                m = "00";
                h = num.toString();
                if (h.length == 1)
                    h = "0" + h;
            }
            return time[0] + "T" + h + ":" + m;
        }
    }

    isSlotAvailable(startDate, endDate, events) {
        var available = true;
        var startTime = startDate.split("T");
        var endTime = endDate.split("T");

        // manage a new all day event request
        var builder = { events,};
        builder['events'] = events;
        builder['startDate'] = startTime[0];
        builder['endDate'] = endTime[0];
        builder['s_h'] = parseInt(startTime[1].split(":")[0]);
        builder['s_m'] = parseInt(startTime[1].split(":")[1]);
        builder['e_h'] = parseInt(endTime[1].split(":")[0]);
        builder['e_m'] = parseInt(endTime[1].split(":")[1]);
        builder['startTime'] = startTime;
        builder['endTime'] = endTime;

        if(!this.allDayStrategy.isAvailable(builder))
           return false;

        // manage a partial day event request
        delete builder.events;
        events.forEach(element => {
            builder['startDateTime'] = startDate;
            builder['e_s_h'] = parseInt(element.start.split("T")[1].split(":")[0]);
            builder['e_s_m'] = parseInt(element.start.split("T")[1].split(":")[1]);
            builder['e_e_h'] = parseInt(element.end.split("T")[1].split(":")[0]);
            builder['e_e_m'] = parseInt(element.end.split("T")[1].split(":")[1]);
            builder['element'] = element;

            if(!this.partialSingleDay.isAvailable(builder))
                available = false;
        });
        return available;
    }

}

class schedulerStrategyFactory {
    getAllDayStrategy() : EvaluateSchedulerEvent {
        return new AllDayEvents();
    }
    getPartialSingleDay() : EvaluateSchedulerEvent {
        return new PartialDayEvent()
    }
    getMultipleDayEvent()  : EvaluateSchedulerEvent {
        return new MultipleDayEvent();
    }
    getDateEvaluation() : EvaluateSchedulerEvent {
        return new DateEvaluation();
    }
}


interface EvaluateSchedulerEvent {
    isAvailable(builder: any): boolean;
}

interface IScheduler {
    generateEventEndDate(start);
    isSlotAvailable(startDate, endDate, events);
}


/* Implementations */

class AllDayEvents implements EvaluateSchedulerEvent {
    isAvailable(builder: any): boolean {
        var events = builder.events;
        var e_h = builder.e_h;
        var s_h = builder.s_h;
        var startTime = builder.startTime;
        var avilable = true;
        if (e_h - s_h == 10) { // it is an allday event

            events.forEach(element => {

                var eventDate = new Date(builder.startDate.replace("-", "/")); 

                var startDate = new Date(element.start.split("T")[0].replace(new RegExp("-", 'g'), "/"));
                var endDate = new Date(element.end.split("T")[0].replace(new RegExp("-", 'g'), "/"));

                if( (eventDate >= startDate) && (eventDate <= endDate) )
                    avilable = false;
            });
            
        }

        return avilable;
    }
}

class PartialDayEvent implements EvaluateSchedulerEvent {
    isAvailable(builder: any): boolean {
        var element = builder.element;
        var e_e_h = builder.e_e_h;
        var e_s_h = builder.e_s_h;
        var s_h = builder.s_h;
        var s_m = builder.s_m;
        var e_e_m = builder.e_e_m; 
        var e_s_m = builder.e_s_m;
        var startTime = builder.startTime;

        if (element.start.includes(startTime[0]) && element.end.includes(startTime[0])) { // is another event (in a single day) in this day ?
            if ((s_h >= e_s_h) && (s_h <= e_e_h)) {
                if (!((s_h == e_s_h) && (s_m < e_s_m)) || !((s_h == e_e_h) && (s_m >= e_e_m)))
                    return false;
            }
        }
        return true;
    }
}

class MultipleDayEvent implements EvaluateSchedulerEvent {
    isAvailable(builder: any): boolean {
        var element = builder.element;
        var e_e_h = builder.e_e_h;
        var e_s_h = builder.e_s_h;
        var s_h = builder.s_h;
        var s_m = builder.s_m;
        var e_e_m = builder.e_e_m; 
        var e_s_m = builder.e_s_m;
        var startTime = builder.startTime;
        if (element.start.includes(startTime[0]) && !element.end.includes(startTime[0])) { // is another event (event over different days that start this day) in this day ?
            if ((s_h > e_s_h) || ((s_h == e_s_h) && (s_m >= e_s_m))) {
                return false;
            }
        }
        else if (!element.start.includes(startTime[0]) && element.end.includes(startTime[0])) { // is another event (event over different days that ends this day) in this day ?
            if ((s_h < e_e_h) && ((s_h == e_e_h) && (s_m < e_e_m))) {
                return false;
            }
        }
        return true;
    }

}

class DateEvaluation implements EvaluateSchedulerEvent {
    isAvailable(builder: any): boolean {

        var elementStart =  new Date((builder.element.start));
        var elementEnd =  new Date((builder.element.end));
        var evetStart =  new Date((builder.startDateTime));

        console.log("--- Element")
        console.log( "Element Start Date: "+elementStart)
        console.log( "Element End Date: "+elementEnd)
        console.log( "Event Start Date: "+evetStart)

        if( (evetStart >= elementStart) && (evetStart < elementEnd) )
            return false;
        return true;
    }

}

