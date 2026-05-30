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

                </nav>
            </div>
        </div>
    );
}