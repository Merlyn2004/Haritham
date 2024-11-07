// Sample Data to populate the leaderboard initially
const leaderboardData = [
    { username: "Rajesh", userId: "U001", avatar: "https://via.placeholder.com/150", points: 1500 },
    { username: "Asha", userId: "U002", avatar: "https://via.placeholder.com/150", points: 1200 },
    { username: "Vishal", userId: "U003", avatar: "https://via.placeholder.com/150", points: 1100 },
    { username: "Priya", userId: "U004", avatar: "https://via.placeholder.com/150", points: 950 },
    { username: "Kumar", userId: "U005", avatar: "https://via.placeholder.com/150", points: 900 }
];

// Function to display the leaderboard
function displayLeaderboard() {
    const tableBody = document.querySelector('#leaderboardTable tbody');
    tableBody.innerHTML = ""; // Clear current table rows

    // Sort the leaderboard by points in descending order
    leaderboardData.sort((a, b) => b.points - a.points);

    // Display only the top 5 members
    const top5 = leaderboardData.slice(0, 5);

    // Create new table rows for top 5 members
    top5.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${data.avatar}" alt="${data.username}" class="avatar-table"></td>
            <td>${data.username}</td>
            <td>${data.userId}</td>
            <td>${data.points}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Display the leaderboard initially
displayLeaderboard();
