/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(array){
    return {firstName: array[0], familyName:array[1], 
    title:array[2], payPerHour:array[3], timeInEvents:[], timeOutEvents:[]}
    
}

function createEmployeeRecords(arrOfArrs){
    return  arrOfArrs.map(createEmployeeRecord)
    }

    function createTimeInEvent(timeString){
let [date, hour] = timeString.split(' ')

        this.timeInEvents.push({
            type:"TimeIn", 
            date:date, 
            hour:parseInt(hour)
     })
     return this
    }

    function createTimeOutEvent(timeString){
        let [date, hour] = timeString.split(' ')
        
                this.timeOutEvents.push({
                    type:"TimeOut", 
                    date:date, 
                    hour:parseInt(hour)
             })
             return this
            }

            function hoursWorkedOnDate(dateMatch){ 
                const end = this.timeOutEvents.find(element => {
                   return element.date === dateMatch
                })
                
                
                const start = this.timeInEvents.find(element => {
                   return element.date === dateMatch
                })
                
                return (end.hour - start.hour) / 100
                  
            }

                function wagesEarnedOnDate(dateMatch){

                    return hoursWorkedOnDate.call(this, dateMatch) * this.payPerHour
                       
                }


                function calculatePayroll(array){
                    let totalPay = 0
                    let newArr = array.map(employee => allWagesFor(employee))
                    newArr.forEach(num => totalPay +=num)
                    return totalPay
        
                }

                function findEmployeeByFirstName(collection){
console.log(collection)
                    
                   collection.firstName.find(element => {
                        return element.firstName === "Loki"
                    })
                    console.log(person.firstName)
                }