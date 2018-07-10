export class ProjectUtils {
    statusOk = "ok";
    statusError = "error"

    losingPorject = "- Project cost is more than project earnings!";
    limitTime = "- To deliver this project on time the approximate number of workers needed is: ";


    validateNewProjectData(data) : any{
        var ret= {
            status : this.statusOk,
            message : []
        };
       var cost : number = ( data.selledDays * data.selledCostForDay ) -  ( data.estimatedDays * data.estimatedCostForDay );
       if(cost < 0) {
        ret.message.push(this.losingPorject);
        ret.status = this.statusError;
        //return ret;
       }

       var numberOfDays : number= (data.deliveryDate.getTime() -  data.startDate.getTime()) / (1000 * 60 * 60 * 24);
       var wrokers : number = data.estimatedDays / (numberOfDays*(0.73) ); // no sunday and saturday

       if(wrokers > 10){
        ret.message.push(this.limitTime+wrokers.toFixed(0));
        ret.status = this.statusError;
        //return ret;
       }

       return ret;
    }

    getProjectCost(selledDays, selledCostForDay, estimatedDays, estimatedCostForDay ) : number {
        return Math.floor(( selledDays * selledCostForDay ) -  ( estimatedDays * estimatedCostForDay ));
    }

    getProjectNumberOfDays(deliveryDate, startDate) : number {
        return Math.floor((deliveryDate.getTime() -  startDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    getProjectWorkers(estimatedDays, numberOfDays) : number {
        return Math.floor(estimatedDays / (numberOfDays*(0.73) ));
    }
}
