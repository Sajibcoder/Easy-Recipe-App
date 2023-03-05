import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import {fetchData} from "../service"

function RecipeLists(props) {
    const [searchMenu,setSearchMenu] = useState('')
    const [query,setQuery] = useState('pizza')
    const [data,setData] = useState('');

   const searchrecipe = (searchQuery) => {
    fetchData(searchQuery).then((response)=> {
        setData(response)
        props.setLoader(false)
    })
   }

    useEffect(()=>{
        fetchData(query).then((response)=> {
            setData(response)
            props.setLoader(false)
        })
    },[])
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input 
                    onChange={(e)=> setSearchMenu(e.target.value)} 
                    value={searchMenu} 
                    type="text" 
                    placeholder='Search you recipe' />
                <button onClick={()=> (searchrecipe(searchMenu),props.setLoader(true))}><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            {
               data && data.hits.map((item,index)=> (
                    <div key={index} className='flexItem'>
                        <div className='img-wrapper'>
                            <img src={item.recipe.image} />
                        </div>
                        <p>{item.recipe.label}</p>
                        <a rel="noreferrer" href={item.recipe.shareAs} target="_blank">See Details</a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RecipeLists
