const { createContext, Children, useState } = require("react");


const initState = {
    id:"",
    add:(id)=>{},
    remove:(id)=>{}
}
export const favoriteContext = createContext(initState)

export const FavoriteProvider = ({children})=>{
    const FavoriteProvider = favoriteContext

    const [selectedId,setSelectedId] = useState([])

    function onAddMeal (id) {

        console.log('Add Meal',id)
        setSelectedId(curr=>[...curr,id])
    }

    function onRemovemeal(id) {

        console.log(id)
   
        setSelectedId(curr=>curr.filter(meald=>meald !== id))
    }
    const globalvalue = {
        id:selectedId,
        add:onAddMeal,
        remove:onRemovemeal
    }

    return <FavoriteProvider.Provider value={globalvalue}>
        {children}
    </FavoriteProvider.Provider>
}