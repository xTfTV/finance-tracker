import './finance.css'

// Importing the navbar
import Navbar from '../Components/Navbar/navbar'

export default function Finances() {
    return (
        <div>
            <title>Finances</title>
            <div className="page-layout">
                <Navbar />
                <div className="header-container">
                    <div className="header-card">
                        <h1>Finances</h1>
                        <p>Track your income, spending, and monthly balance</p>
                    </div>
                </div>

                <br />

                <div className="balance-summary-container">
                    <div className="total-balance">
                        <h2>Total Balance</h2>
                        <p>$0.00</p>
                    </div>
                    <div className="monthly-income">
                        <h2>Monthly Income</h2>
                        <p>$0.00</p>
                    </div>
                    <div className="monthly-spending">
                        <h2>Monthly Spending</h2>
                        <p>$0.00</p>
                    </div>
                </div>

                <br />

                <div className="add-transaction-container">

                    <div className="transactions-card">
                        <h2>Add Transaction</h2>

                        <form className="transaction-form">
                            <div className="type-container">
                                <label>Type:</label>
                                
                                <div className="type-toggle">
                                    <input type="radio" id="income" name="type" value="income" />
                                    <label htmlFor="income">Income</label>

                                    <input type="radio" id="expense" name="type" value="expense" />
                                    <label htmlFor="expense">Expense</label>
                                </div>
                            </div>

                            <div className="name-container">
                                <label>Name:</label>
                                <input type="text" />
                            </div>

                            <div className="amount-container">
                                <label>Amount:</label>
                                <input type="text" />
                            </div>

                            <div className="date-container">
                                <label>Date:</label>
                                <input type="text" />
                            </div>

                            <div className="category-container">
                                <label>Category:</label>
                                {/* This is hard coded for now but will change once the db is setup */}
                                {/* This is also just a select few of the ones that will be available */}
                                <select name="Category" id="category-select">
                                    <option value="food">Food</option>
                                    <option value="bills">Bills</option>
                                    <option value="paycheck">Paycheck</option>
                                    <option value="gas">Gas</option>
                                </select>
                            </div>

                            <div className="add-transaction-button">
                                <button>Add Expense</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
}