import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

export const saveEmployeeAPI = async (Details)=>{
    return await commonAPI("POST",`${SERVERURL}/employee`,Details)
}

export const getEmployeeAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/employee`,{})
}

export const deleteEmployeeAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/employee/${id}`,{}      )
}

export const editEmployeeAPI = async (details)=>{
    return await commonAPI("PUT",`${SERVERURL}/employee/${details.id}`,details)
}

