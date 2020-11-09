import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
const User=()=>{
    // drstructuring user in reducer
    const {user}=useSelector(state=>state)
    console.log(user)
    const dispatch=useDispatch()
   return(
        <>
        {
            user?user.map(element=>(
                <React.Fragment key={element.id}>
                    <div className="col-md-8">
                    <table class="table table-striped">
                     <tbody>
                     <tr>
                     <td>  {element.name}</td>
                    <td>  {element.address}</td>
                    <td> <button className="btn btn-danger ml-3" onClick={()=>dispatch({type:'DELETE',id:element.id})  }>delete</button></td>
                    </tr>
                  </tbody>
                  </table>
                  </div>

                 </React.Fragment>
                  )):' '
        }
         </>
    )
}
export default User
