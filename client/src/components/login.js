import React from "react";

export default function log() {
  async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  }

  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
    
  return (
    <>
      <section class="login-page">
        <div class="form-heading">
          <h1>Log In</h1>
        </div>
        <div class="form-section">
          <form class="login-form">
            <div>
              <label for="username-login">Username</label>
              <input type="text" class="entry-field" id="username-login" />
            </div>
            <div>
              <label for="password-login">Password</label>
              <input type="password" class="entry-field" id="password-login" />
            </div>
            <div>
              <button type="submit" class="login-signup-btn">
                Log In!
              </button>
            </div>
          </form>
        </div>

        <a href="/signup" class="sign-in-link">
          sign up instead
        </a>
      </section>
    </>
  );
}
