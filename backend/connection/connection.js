const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected!");
}).catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1); 
});