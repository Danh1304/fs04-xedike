const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    userType: {type: String, required: true},
    phone: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    registerDate: {type: String, required: true},
    numberOfTrips: {type: String, required: true},
    numberOfKms: {type: String, required: true},
    avatar: {type: String, required: true},
    isActive: {type: Boolean, required: true},
})