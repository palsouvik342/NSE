import getActualDateFunc from "./getActualDates";
import getTheSymbol from "./getTheSymbol";
import getYahooFinanceData from "./getYahooFinanceData";

const getNSEData = async(company_name:string, xdividend_date:any) => {
    
    let dividentDate = xdividend_date;
    let companyName = company_name;

    // call the function which gives the nextweekdate and previousweekdate 
    let actualDates = getActualDateFunc(dividentDate);

    // call a function from which we can get the symbol from the company name
    let actSymbol = await getTheSymbol(companyName);
    console.log(actualDates,actSymbol)

    // call the function which calls yahoo-finance api
    return await getYahooFinanceData(actualDates.actualPreviousWeekDate, actualDates.actualNextWeekDate, actSymbol);
    
}

export default getNSEData;