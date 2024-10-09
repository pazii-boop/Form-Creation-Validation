document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Define the async function to fetch user data
  async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // Step 3: Select the HTML element where API data will be displayed
    const dataContainer = document.getElementById("api-data");

    try {
      // Step 4: Fetch data from the API
      const response = await fetch(apiUrl);
      const users = await response.json();

      // Step 5: Clear the "Loading user data..." message
      dataContainer.innerHTML = "";

      // Step 6: Create a <ul> element
      const userList = document.createElement("ul");

      // Step 7: Loop through the users array and create <li> for each user
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name; // Set the text to user's name
        userList.appendChild(listItem); // Append the <li> to the <ul>
      });

      // Step 8: Append the userList (ul) to dataContainer
      dataContainer.appendChild(userList);
    } catch (error) {
      // Step 9: Handle errors by displaying an error message
      dataContainer.innerHTML = "Failed to load user data.";
    }
  }

  // Step 10: Run fetchUserData when the DOM has fully loaded
  fetchUserData();
});
