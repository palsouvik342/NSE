import axios from 'axios';
let getTheSymbol = async (companyName:string) => {
    try {
        const response = await axios.get(`https://www.nseindia.com/api/search/autocomplete?q=${encodeURIComponent(companyName)}`);
        const data = response.data;
        if (data) {
            const newSymbols = data.symbols.filter((item:any)=>{return item.result_type == 'symbol'});
            const symbol = newSymbols[0].symbol;
            return symbol;
        }
    } catch (error:any) {
        console.error('Error:', error.message);
    }
}
 export default getTheSymbol