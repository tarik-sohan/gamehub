import axios from "axios";

 export default axios.create({
    
    baseURL : 'https://api.rawg.io/api',
    params:{
        key : '8ceef4f7b035495abc8f8d12f3cb784c'
    } 
})