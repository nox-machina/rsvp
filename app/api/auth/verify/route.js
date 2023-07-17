import connectDB from "../../../../utils/connect";
import User from "../../../../models/User";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    console.log("hello");
//   const response = await req.json();

//   try {
//     console.log(response);
//   } catch (error) {
//     console.log(error.message);
//   }

  return NextResponse.json({ msg: "ok" }, { status: 200 });
}
