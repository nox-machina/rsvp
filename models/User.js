//mongoose user schema
var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    otp: {
      value: {
        type: String,
        default: null,
      },
      issued: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
      }
    },
    rxtkn: {
      type: String,
      default: null,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
