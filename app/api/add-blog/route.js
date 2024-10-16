import connectDb from "@/database/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectDb();
    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }

    const newBlog = await Blog.create({
      title,
      description,
    });

    return NextResponse.json(
      { success: true, message: "Blog added successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
