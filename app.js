const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Configure CORS
const corsOptions = {
	origin: "http://localhost:5173", // Allow Vite frontend
	optionsSuccessStatus: 200,
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Mock fuel prices
const fuelPrices = {
	date: "2025-05-13",
	prices: {
		"Blyfri 95": 13.94,
		"Oktan 100": 15.56,
		Diesel: 12.49,
	},
};

app.get("/api/fuel-prices", (req, res) => {
	res.json(fuelPrices);
});

app.listen(port, () => {
	console.log(`TripCost API listening on port ${port}`);
});
