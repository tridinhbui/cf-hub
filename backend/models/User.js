const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	role: {
		type: String,
		enum: ["user", "admin", "mentor"],
		default: "user",
	},
	profile: {
		firstName: String,
		lastName: String,
		bio: String,
		avatar: String,
		skills: [String],
		interests: [String],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	lastLogin: Date,
	isActive: {
		type: Boolean,
		default: true,
	},
});

// Hash password before saving
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		next(error);
	}
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
	return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
