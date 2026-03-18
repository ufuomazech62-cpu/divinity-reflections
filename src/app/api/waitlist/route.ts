import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, schoolDistrictName, role, estimatedStudents } = body;

    // Validate required fields
    if (!name || !email || !schoolDistrictName || !role || !estimatedStudents) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate estimatedStudents is a positive number
    const studentsNum = parseInt(estimatedStudents);
    if (isNaN(studentsNum) || studentsNum <= 0) {
      return NextResponse.json(
        { error: "Estimated students must be a positive number" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEntry = await db.waitlist.findFirst({
      where: { email },
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Create waitlist entry
    const entry = await db.waitlist.create({
      data: {
        name,
        email,
        schoolDistrictName,
        role,
        estimatedStudents: studentsNum,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully added to waitlist",
        data: {
          id: entry.id,
          name: entry.name,
          email: entry.email,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.waitlist.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Failed to get waitlist count:", error);
    return NextResponse.json(
      { error: "Failed to get waitlist count" },
      { status: 500 }
    );
  }
}
