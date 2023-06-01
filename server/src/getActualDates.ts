let getActualDateFunc = (dividentDate:any)=>{
    // to split year, month and day from the incoming divident date
    const dateParts = dividentDate.split('-');
    const year = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[0], 10) ;
    
    const nextWeek = new Date(year, month, day)
    const previousweek = new Date(year, month, day);

    // add 7 days to the current date
    nextWeek.setDate(nextWeek.getDate() + 7)
    // deduct 7 days to the current date
    previousweek.setDate(previousweek.getDate() - 7)
    let actualNextWeekDate = nextWeek.toISOString().split('T')[0] 
    let actualPreviousWeekDate = previousweek.toISOString().split('T')[0];
    return {actualNextWeekDate,actualPreviousWeekDate};
}

export default getActualDateFunc;