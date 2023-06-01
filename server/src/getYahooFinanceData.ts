const yahooFinance = require('yahoo-finance');
let getYahooFinanceData = (previousWeekDate:any ,nextWeekDate:any, symbol:string) => {
    // call the yahoo finance api
    try{
        return yahooFinance.historical({
            symbol: symbol+'.NS',
            from: previousWeekDate,
            to: nextWeekDate,
        }, function (err:any, quotes:any) {
            if(err){
                console.log(err);
            } else{
                return quotes;
            }
        });
    } catch(error:any){
        console.error(error)
    }
}

export default getYahooFinanceData;