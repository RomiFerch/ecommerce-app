import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  correo: {
    type: String,
    unique: true,
    lowercase: true,
  },
  edad: {
    type: Number,
    required: true,
    min: 16,
    max: 150
  },
  password: {
    type: String,
    select: false,
    required: true,
    minLength: 8
  },
  signupLogin: {
    type: Date,
    default: Date.now,
  },

  lastLogin: Date,

  newsletter: Boolean,
});

export const User = mongoose.model("user", userSchema);

/* userSchema.pre('save', (next)=>{
let user = this
if(!user.isModified('password'))
}) */
