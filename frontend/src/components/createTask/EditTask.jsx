import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import "./createTask.css"
import Toast from '../Toast/Toast.jsx';
import { useNavigate, useParams } from 'react-router-dom';
function EditTask() {
    const { dispatch } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState('');
    const [error, setError] = useState(false);
    const [description, setDescription] = useState("");
    const [toast, setToast] = useState();
    const { taskId } = useParams();
    const navigate=useNavigate()
    
    const fetchSingleTask=async()=>{
        try {
            const res = await axios.post("/task/fetchSingleTask", { id:taskId }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            console.log(res.data);
            setTitle(res.data[0].title);
            setDescription(res.data[0].description);
            setCategory(res.data[0].category);
            setDate(res.data[0].date)            
            setError(false);
        } catch (error) {
            setError(true)
            setToast(error.data.message)
        }
    }
    
    useEffect(()=>{
        fetchSingleTask()
    },[])
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/updateTask", { title, description,category,date,id:taskId }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            setToast(res.data.message)
            setTimeout(()=>{
                navigate('/')
            },2000)
            setError(false)
        } catch (error) {
            setError(true)
            setToast(error.data.message)
        }
        dispatch({
            type: "ADD_TASK",
            title,
            description,
            category,
            date
            
        })
        setTitle("")
        setCategory('')
        setDate('')
        setDescription("")
    }

    return (
        <div className="flex justify-center mx-3 mt-3 addContainer md:w-1/3 md:mx-auto">
            <div className='w-11/12'>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div>
                        <label htmlFor="date">Due Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            required
                            onChange={(e) => setDate(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            value={category}
                            required
                            onChange={(e) => setCategory(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="description">Description</label>
                        <textarea
                            rows={5}
                            name="description"
                            id="description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ resize: "none" }}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className='px-5 py-1 text-white bg-blue-700 rounded-md '
                        >Update</button>
                    </div>
                </form>
                <Toast tost={toast} error={error} />



            </div>
        </div>
    );
}

export default EditTask;