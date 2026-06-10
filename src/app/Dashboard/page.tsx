import './dashboard.css'
import Navbar from '../Components/Navbar/navbar';

// Can also just use the <title></title> tags but this taught me something new so oh well
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Dashboard'
}


export default function Dashboard() {
    return (
        <div className="page-container">

            <Navbar />

            <div className="welcome-message-container">
                <div className="welcome-header">
                    <h1>Welcome Back [Name]</h1>
                    <h1>Here is a quick overview for [add date and time]</h1>
                </div>
            </div>

            <div className="finance-overview-container">
                <div className="balance-container">
                    <h2>Balance:</h2>
                    <p>$0.00</p>
                </div>
                <div className="monthly-spending-container">
                    <h2>Monthly Spending:</h2>
                    <p>$0.00</p>
                </div>
                <div className="tasks-due-container">
                    <h2>Tasks Due:</h2>
                    <p># Tasks</p>
                </div>
            </div>

            {/* This will need to be updated once the backend, API routes are made */}
            {/* Just for UI creation to visualize the layout */}
            <div className="transactions-job-container">
                <div className="transactions-container">
                    <h2>Recent Transactions:</h2>
                    <p>Transaction 1</p>
                    <p>Transaction 2</p>
                    <p>Transaction 3</p>
                    <p>Transaction 4</p>
                    <p>Transaction 5</p>
                </div>
                <div className="job-container">
                    <h2>Job Applications Sent:</h2>
                    <p>Job 1</p>
                    <p>Job 2</p>
                    <p>Job 3</p>
                    <p>Job 4</p>
                    <p>Job 5</p>
                </div>
            </div>

            <div className="notes-reminders-container">
                <div className="notes-card">
                    <h1>Notes / Reminders</h1>
                    {/* Maybe will change this to a list format, not sure this is also temp */}
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                    <p>Item 5</p>
                </div>
            </div>
        </div>
    );
}