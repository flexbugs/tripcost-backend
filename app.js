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
	date: "2025-05-27",
	prices: {
		"Blyfri 95": 13.49,
		"Oktan 100": 15.46,
		Diesel: 12.29,
	},
};

app.get("/api/fuel-prices", (req, res) => {
	res.json(fuelPrices);
});

app.listen(port, () => {
	console.log(`TripCost API listening on port ${port}`);
});
