import React, { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Array of objects
  const users = [
    { id: 1, name: "Swapnil", role: "Developer" },
    { id: 2, name: "Aarav", role: "Designer" },
    { id: 3, name: "Priya", role: "Developer" },
    { id: 4, name: "Rohit", role: "Tester" },
  ];

  // Recap of array filter:
  // filter() → creates a new array with only elements that pass the condition
  // Example: numbers.filter(num => num > 5)

  // Filter and transform to uppercase
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((user) => ({
      ...user,
      name: user.name.toUpperCase(),
    }));

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Array Filter & Uppercase Example</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      {/* Display Filtered Users */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "10px",
                background: "#f1f1f1",
                margin: "5px auto",
                width: "300px",
                borderRadius: "5px",
              }}
            >
              <strong>{user.name}</strong> — {user.role}
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}
