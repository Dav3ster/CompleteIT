import React from "react";

export default function signUp() {
  async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && password) {
      const response = await fetch("/api/users", {
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
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
  return (
    <>
      <section class="sign-in-page">
        <div class="form-heading">
          <h1>Sign Up</h1>
        </div>
        <div class="form-section">
          <form class="signup-form">
            <div>
              <label for="username-signup">Select a Username</label>
              <input type="text" class="entry-field" id="username-signup" />
            </div>
            <div>
              <label for="password-signup">Select a password</label>
              <input type="password" class="entry-field" id="password-signup" />
            </div>
            <div>
              <button type="submit" class="login-signup-btn">
                Sign Up!
              </button>
            </div>
          </form>
        </div>

        <a href="/login" class="login-link">
          log in instead
        </a>
      </section>
    </>
  );
}
