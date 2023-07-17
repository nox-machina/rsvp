import { NextResponse } from "next/server";
import connectDB from "../../../utils/connect";
import User from "../../../models/User";

export async function POST(req, res) {
  await connectDB();
  const request = await req.json();
  console.log(request.email);
  const existingUser = await User.findOne({ email: request.email });
  if (existingUser)
  return NextResponse.json({ error: "This email is already in use." }, { status: 400 });
  let newUser;
  newUser = new User({ email: request.email });
  await newUser.save();
  return new Response(JSON.stringify({ user: newUser, msg: "ok" }));
}