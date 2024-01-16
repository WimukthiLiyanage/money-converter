import React ,{useEffect, useState}from "react";
import axios from "axios";

export default function MainPage() {
  //states for the form feilds
  const [date, setDate] =useState(null);
  const [sourceCurrency, setSourceCurrency] =useState("");
  const [targetceCurrency, setTargetCurrency] =useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] =useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] =useState(0);
  const [currencyNames,setCurrencyNames]= useState([]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(
      date,
      setSourceCurrency,
      targetceCurrency,
      amountInTargetCurrency
    );
  };


useEffect(()=>{
  const getCurrencyName = async() =>{
    try{
      const responce = await axios.get("http://localhost:5000/getAllCurrencies");
      setCurrencyNames(responce.date);
    }catch(err){
      console.error(err);
    }
  };
  getCurrencyName();
},[]);

  return (
  <div>
    <h1 className="lg:mx-32 text-5xl font-bold text-blue-800 bg-center flex items-center justify-center flex-col">CONVERT YOUR CURRENCIES</h1>
    <p className="lg:mx-32 opacity-40 py-5 flex items-center justify-center flex-col">
      A currency conversion web app, designed for financial and economic purposes,This tool is valuable for businesses, investors, and financial professionals, providing an efficient means to perform currency conversions for various financial and accounting needs. </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
          
            <div className="mb-3">
              <label htmlFor={date} 
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Date</label>
              <input type="Date" id={date} name ={date}  
              onChange={(e)=>setDate(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
            </div>

            <div className="mb-3">
              <label htmlFor={sourceCurrency} 
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Source Currency</label>
              <select 
              onChange={(e)=>setSourceCurrency(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              name={sourceCurrency} 
              id={sourceCurrency} 
              value={sourceCurrency}
               >
                <option value="">Select Source Currency</option>
                {Object.keys(currencyNames).map((currency)=>(
                  <option className="p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor={targetceCurrency} 
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Target Currency</label>
              <select 
              onChange={(e)=>setTargetCurrency(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              name={targetceCurrency} 
              id={targetceCurrency} 
              value={targetceCurrency}
               >
                <option value="">Select Target Currency</option>
                {Object.keys(currencyNames).map((currency)=>(
                  <option className="p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor={amountInSourceCurrency} 
              className="block mb-2 text-sm font-medium text-white-900 dark:text-white">
              Amount In Source Currency</label>
              <input type="text" id={amountInSourceCurrency} name={amountInSourceCurrency}  
              onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter You'r Amount" required/>
            </div>

            <button className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md mb-3">Get The Target Currency</button>
            
          </form>
        </section>
      </div>
  </div>
  );
}
