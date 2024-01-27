import React, { useState } from 'react';
import moment from 'moment';
import "./task.css";
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from '../../Axios/axios.js';
import Toast from '../Toast/Toast.jsx';
import { Link } from 'react-router-dom';
function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [error, setError] = useState(false);
    const [toast, setToast] = useState();


    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/removeTask", { _id: task._id }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            setToast(res.data.message)
            setError(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setToast(error.data.message)
        }
        dispatch({
            type: "REMOVE_TASK",
            id
        })
    }



    const handleMarkDone = async(e) => {
        try {
            const res = await axios.post("/task/completeTask", { _id: task._id }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            setToast(res.data.message)
            setError(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setToast(error.data.message)
        }
        
        dispatch({
            type: "MARK_DONE",
            id
        })
    }
    return (
        <div className='flex items-center justify-center gap-2 py-4 mb-3 rounded-lg shadow-md bg-slate-300'>
            <div className="mark-done">
                <input type="checkbox" className="checkbox" onChange={handleMarkDone} checked={task.completed}  disabled={task.completed} />
            </div>
            <div className="w-10/12 text-sm task-info text-slate-900">
                <h4 className="text-lg capitalize task-title">{task.title}</h4>
                <p className="task-description">{task.description}</p>
                <p className='text-xs italic opacity-60'>Due Date: {task.date}</p>
                <p className='text-xs italic opacity-60'>Category: {task.category}</p>
                <div className='italic opacity-60'>
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
            <div className="text-sm text-white remove-task">
                <DeleteIcon
                    style={{ fontSize: 30, cursor: "pointer" }}
                    size="large"
                    onClick={handleRemove}
                    className="p-1 bg-blue-700 border-2 border-white rounded-full shadow-2xl remove-task-btn" />
                   <Link to={`/editTask/${task._id}`}><EditIcon  style={{ fontSize: 30, cursor: "pointer" }}
                    size="large" className="p-1 bg-blue-700 border-2 border-white rounded-full shadow-2xl remove-task-btn" ></EditIcon></Link>
            </div>
            <Toast tost={toast} error={error} />
        </div>
    );
}

export default Task;