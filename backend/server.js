const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/test-users", (req, res) => {
  const testUsers = [{ id: 1, name: "John Doe", email: "john@example.com" }];
  res.json({
    success: true,
    users: testUsers,
    message: "This is test data. Configure DB for real data.",
  });
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
