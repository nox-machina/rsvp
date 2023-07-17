import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import connectDB from "./utils/connect";

export async function middleware(request) {
  // if (request.nextUrl.pathname == "/api") {
  //   console.log({"path matches": request.nextUrl.pathname});
  //   console.log("connecting to database...");
  //   await connectDB();
  //   return NextResponse.next();
  // }
  // if (request.nextUrl.pathname == "/api/auth") {
  //   console.log({"path matches": request.nextUrl.pathname});
  //   // return NextResponse.redirect(new URL("/dashboard", request.nextUrl.pathname));
  //   return NextResponse.next({"hmm": "ok"});
  // }
}