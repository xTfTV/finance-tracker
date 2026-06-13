import './tasks.css';
import Navbar from '../Components/Navbar/navbar';

export default function Tasks() {
    return (
        <div className="page-container">
            <title>Task Manager</title>
            <Navbar />
            <div className="header-container">
                <div className="header-card">
                    <h1>Task Manager</h1>
                    <p>Plan your day, keep track of tasks, and stay organized</p>
                </div>
            </div>
            <div className="next-prev-container">
                <div className="next-prev-card">
                    <button>Prev</button>
                    <h3>Day of the Week</h3>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}