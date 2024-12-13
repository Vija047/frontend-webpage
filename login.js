// JavaScript for interactivity

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get references to elements
  const loginButton = document.querySelector(".btnn a");
  const joinUsButton = document.querySelector(".cn a");

  loginButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent page reload
      const email = document.querySelector("input[type='email']").value;
      const password = document.querySelector("input[type='password']").value;

      if (!email || !password) {
          alert("Please enter both email and password.");
      } else {
          alert(`Logged in with email: ${email}`);
      }
  });

  joinUsButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent page reload
      alert("Thank you for your interest! More details will follow.");
  });

  // Example: Add dynamic hover effects on menu items
  const menuItems = document.querySelectorAll(".manu .ulli a");
  menuItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
          item.style.color = "blue";
      });
      item.addEventListener("mouseout", () => {
          item.style.color = "inherit"; // Reset to default
      });
  });
});
