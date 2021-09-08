
import { useState } from 'react';

function UserList(list_user) {
  const [ index, setIndex ] = useState(0)
  const plIndex = () => {
    if (list_user){
      if ( index < list_user.length -1){
        setIndex( index + 1)
      } else {
        setIndex( 0)
      }
    }
  }
  const miIndex = () => {
    if (list_user){
      if (index > 0){
        setIndex( index -1)
      } else {
        setIndex( list_user.length -1)
      }
    }
  }
  const showList = () =>{
    let result = null
    result = list_user.map((value,index)=>{
      if(index === list_user.length -1){
        return(
          <span>{value}</span>
        )
      } else {
        return(
          <span>{value} ,</span>
        )
      }
      
    })
    return result
  } 
  return [plIndex, miIndex, showList , index]
}

export default UserList;
