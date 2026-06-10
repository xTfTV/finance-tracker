import './about.css';
import Link from 'next/link';

export default function About() {
    return (
        <div className="page-layout">
            <title>About</title>

            <Link href="/Dashboard" className="back-button">Dashboard</Link>

            <div className="about-card">
                <h1>Hello! Welcome to my personal finance tracker</h1>
                <br /><br />
                <p>
                    The plan for this is to learn as much as I can about
                    system design and architecture through actually building
                    a working system. For now this will be a basic about page
                    but maybe sometime in the future I will turn this into something
                    worth while lol.
                </p>
                <br />
                <p>
                    This will allow you to track finances, connect your bank account
                    and keep track of any personal tasks or work related tasks you may
                    have to finish. I want this to be a all in one web application
                    and then possibly turn this into something like an executeable 
                    since that would be a lot easier than remembering a web address
                </p>
                <br />
                <p>
                    Right now I work as a level 3 applciation support but the end goal is to become 
                    a software engineer. I also graduated college December 2025 from Rutgers university
                    newark with my B.A. in computer science. Hope you enjoy the application! :)
                </p>
            </div>
        </div>
    );
}