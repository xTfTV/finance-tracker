import './page.css'

export default function Home() {
  return (
    <div className="login-parent">
      <div className="login-box">
        <div className="welcome-container-child">
          <h1>Welcome to Finance Tracker, your all in one solution!</h1>
        </div>
        <div className="login-form-child">
          <form className="form-layout">
            <label>Username</label>
            <input name="Username" />

            <label>Password</label>
            <input name="Password" />

            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
