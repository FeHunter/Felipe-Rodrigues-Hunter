import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient.js";


function GetUser () {
    const [user, setUser] = useState(null)
    supabase.auth.onAuthStateChange(async (event, session)=>{
        if (session){
            const { user } = session
            if (user) setUser(user)
        }
    })
    return user
}
export default GetUser