import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "d18c4e7dc33f4a10ae1dd735faddfdd7"
    }
})