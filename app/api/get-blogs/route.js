import connectDb from "@/database/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const allBlogs = await Blog.find({});

    if (allBlogs.length > 0) {
      return NextResponse.json({ success: true, blogs: allBlogs });
    } else {
      return NextResponse.json(
        { success: false, message: "No blogs found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Not found any blogs please try again later ",
      },
      { status: 404 }
    );
  }
}
