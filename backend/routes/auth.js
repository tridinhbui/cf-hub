const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

// Register new user
router.post("/register", async (req, res) => {
	try {
		const { name, email, password, profile } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Create new user
		const user = new User({
			name,
			email,
			password,
			profile,
		});

		await user.save();

		// Generate JWT token
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET || "your-secret-key",
			{ expiresIn: "24h" }
		);

		res.status(201).json({
			message: "User created successfully",
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
				profile: user.profile,
			},
		});
	} catch (error) {
		console.error("Registration error:", error);
		res
			.status(500)
			.json({ message: "Error creating user", error: error.message });
	}
});

// Login user
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find user
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// Check password
		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// Update last login
		user.lastLogin = new Date();
		await user.save();

		// Generate JWT token
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET || "your-secret-key",
			{ expiresIn: "24h" }
		);

		res.json({
			token,
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
				role: user.role,
				profile: user.profile,
			},
		});
	} catch (error) {
		res.status(500).json({ message: "Error logging in", error: error.message });
	}
});

// Get user profile (protected route)
router.get("/profile", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.userId).select("-password");
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error fetching profile", error: error.message });
	}
});

// Update user profile (protected route)
router.put("/profile", auth, async (req, res) => {
	try {
		const updates = req.body;
		const user = await User.findByIdAndUpdate(
			req.user.userId,
			{ $set: { profile: updates } },
			{ new: true }
		).select("-password");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error updating profile", error: error.message });
	}
});

module.exports = router;
