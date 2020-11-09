const initialState={
    user:[
        {id:1,name:'usman',address:'pahse 5'}
    ]
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Add_User':
            return {user:[action.payload,...state.user]}
            case 'DELETE':
                const newUser= state.user.filter(user=>user.id!==action.id)
                return {user:newUser}
        default:
            return state
    }

}
export default userReducer