import React ,{useState,useEffect}from 'react'
import axios from 'axios'
//import List from './ToDisplay'
import Table from './Table2'
const dataSource = [
    {
        key: 1,
      Country: 'Aegentina',
      Date:'29-6-2021',
      NewConfirmed:22,
      NewRecovered: 32,
      NewDeaths: 12,
    },
    {
        key: 2,
        Country: 'India',
        Date:'29-6-2021',
        NewConfirmed:50,
        NewRecovered: 32,
        NewDeaths: 10,
      },
      {
        key: 3,
        Country: 'USA',
        Date:'29-6-2021',
        NewConfirmed:33,
        NewRecovered: 15,
        NewDeaths: 18,
      },
  ];

 function DataFetching(){
    //const [posts,setPosts]=useState([])
    const [text,setText]=useState('')
    const[searchresult,setSearchresult]=useState([])
    /*useEffect(()=>{
        axios.get('https://api.covid19api.com/summary')
        .then(res =>{
            
            setPosts(res.data.Countries)
            console.log(posts)
        })
        .catch(err =>{
            console.log(err)
        })
    })*/
    function onSearch(event){
        setText(event.target.value)
        if(text!=='')
        {

        const newlist= dataSource.filter((data)=>{
            return Object.values(data).join("").toLowerCase().includes(text.toLowerCase());
        });
        setSearchresult(newlist);
    }
    else{
        setSearchresult(dataSource);
    }

    }
    return(
        <div>
           <center> <h1>Covid Status</h1></center>
           <center><input  type='text' value={text}  onChange={onSearch}placeholder="Search using Country name"/> &nbsp;
           </center>
           <Table datafromApi={text.length<1?dataSource:searchresult}/>
        </div>
    )
}
export default DataFetching
