import './dashboard.css'

// Can also just use the <title></title> tags but this taught me something new so oh well
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Dashboard'
}

import Link from 'next/link'


export default function Dashboard() {
    return (
        <div className="page-container">
            <div className="Navbar-container">
                <nav>
                    <Link href="/Dashboard" className="link-style">Dashboard</Link>
                    <Link href="/Finances" className="link-style">Finances</Link>
                    <Link href="/About" className="link-style">About</Link>
                    <Link href="/" className="link-style">Logout</Link>
                </nav>
            </div>

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
        </div>
    );
}