import './tasks.css';
import Navbar from '../Components/Navbar/navbar';

import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Task Manager'
}


export default function Tasks() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="header-container">
                <div className="header-card">
                    <h1>Task Manager</h1>
                    <p>Plan your day, keep track of tasks, and stay organized</p>
                </div>
            </div>

            <div className="next-prev-container">
                <div className="next-prev-card">
                    <button>← Prev</button>
                    <h3>Day of the Week</h3>
                    <button>Next →</button>
                </div>
            </div>

            <div className="new-task-container">
                <div className="new-task-layout">
                    <div className="new-task-form">
                        <form>
                            <label>Task Title</label>
                            <input type="text"></input>
                            {/* Will be changing this - 96 option tags is not feasible - js will take care of this */}
                            <label>Start Time</label>
                            <select>
                                <option>Time 1</option>
                                <option>Time 2</option>
                                <option>Time ...</option>
                            </select>
                            {/* Will also be changing this to be dynamic */}
                            <label>End Time</label>
                            <select>
                                <option>Time 1</option>
                                <option>Time 2</option>
                                <option>Time ...</option>
                            </select>

                            <button>Add Task</button>   
                        </form>
                    </div>
                </div>
                <div className="daily-notes-form">
                    <form>
                        <label>Add Notes</label>
                        <textarea></textarea>

                        <button> Submit Note</button>
                    </form>
                </div>
            </div>
        </div>
    );
}