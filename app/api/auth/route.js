import connectDB from "../../../utils/connect";
import User from "../../../models/User";
import { NextResponse } from "next/server";
import sendEmail from "../../../utils/email";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  const response = await req.json();
  console.log(response.email);
  if (!response.email)
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  await connectDB();
  const user = await User.findOne({ email: response.email });
  if (!user)
    return NextResponse.json(
      {
        error:
          "Please check your details or contact an admin to request access.",
      },
      { status: 409 }
    );

  try {
    const otp = require("crypto").randomBytes(3).toString("hex");
    const salt = await bcrypt.genSalt(10);
    const otpHash = await bcrypt.hashSync(otp, salt);

    await user.updateOne({
      otp: {
        value: otpHash,
        issued: Math.floor(Date.now() / 1000),
      },
    });
    await sendEmail(user.email, otp);
    return NextResponse.json(
      { msg: "Please check your email for a one-time password...." },
      { status: 200 }
    )
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Uh oh! Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
