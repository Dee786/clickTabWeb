import { isLogin } from "../../utils/isLogin";
import  * as types from "../actions/authActions";
const initialState = {
    isauthenticated: isLogin(),
    user:{
        
    },
    coupons:[{
        name:"Amazon.in",
        price:"200Rs",
        couponCode:"FREE200",
        link:"https://www.amazon.in",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        description:""
    },
    {
        name:"Amazon.in",
        price:"200Rs",
        couponCode:"FREE200",
        link:"https:/www.amazon.in",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        description:""
    },
    {
        name:"Amazon.in",
        price:"200Rs",
        couponCode:"FREE200",
        link:"https:/www.amazon.in",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        description:""
    },
    {
        name:"Amazon.in",
        price:"200Rs",
        couponCode:"FREE200",
        link:"https:/www.amazon.in",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        description:""
    },
    {
        name:"Amazon.in",
        price:"200Rs",
        couponCode:"FREE200",
        link:"https:/www.amazon.in",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU",
        description:""
    }],
    offers:[{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    },{
        name:"myntra",
        price:"200Rs",
        Offerlink:"www.myntra.com",
        offerid:"1",
        description:"description description description descriptiondescription",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvblhwixyjNjflJnoyKx_JxMNBZa0Tqj1pQ&usqp=CAU"
    }],
    website:window.location.href,
};
const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.SIGN_IN:
            return{
                ...state,
                isauthenticated:true,
                user:action.payload,
            }
        case types.SIGN_OUT:
            return{
                ...state,
                isauthenticated:false,
                user:{},
            }
        default:
            return state
    }
}

export default authReducer;