import axios from "axios";
import { CLEARCOMPLETED_API, CREATE_API, DELETE_API, DISPLAY_API, EDIT_API, UPDATESTATUS_API } from "./api";

export const CreateTask = async (taskData) => {
    console.log(taskData);
    const { title, description, duedate } = taskData;

    try {
        const response = await axios.post(`${CREATE_API}`, {
            title,
            description,
            duedate
        })
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const DisplayTask = () => axios.get(`${DISPLAY_API}`)


//updates the task status in backend , make PUT request and waits for the response from backend
export const UpdateTaskStatus = async (id, taskstatus) => {
    try {
        const response = await axios.put(`${UPDATESTATUS_API}`, {
            id,
            taskstatus
        })
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export const EditTask = async (taskData) => {
    console.log(taskData)
    const { id, title, description, duedate } = taskData
    try {
        const response = await axios.put(`${EDIT_API}`, {
            id,
            title,
            description,
            duedate
        })
        console.log("Inside task services: ", response)
        return response
    }
    catch (error) {
        console.error(error)
    }
}

export const DeleteTask = async (id) => {
    try {
        const response = await axios.delete(`${DELETE_API}`, { data: { id } });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const ClearCompleted = async () => {
    try {
        const response = await axios.delete(`${CLEARCOMPLETED_API}`)
        console.log("delete response : ", response)
        return response
    }
    catch (error) {
        console.error(error)
    }
}