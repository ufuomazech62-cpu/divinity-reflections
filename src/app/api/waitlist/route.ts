import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "qosta1210@gmail.com";

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

    // Send email notification
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: NOTIFICATION_EMAIL,
        subject: `🎉 New Waitlist Sign-up: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #292524; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
              New Early Access Request
            </h2>
            <div style="background: #fafaf9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #57534e;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #57534e;">Email:</strong> <a href="mailto:${email}" style="color: #d97706;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #57534e;">School/District:</strong> ${schoolDistrictName}</p>
              <p style="margin: 10px 0;"><strong style="color: #57534e;">Role:</strong> ${role}</p>
              <p style="margin: 10px 0;"><strong style="color: #57534e;">Estimated Students:</strong> ${studentsNum.toLocaleString()}</p>
            </div>
            <p style="color: #78716c; font-size: 14px;">
              This person has requested early access to Divinity Reflections.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      return NextResponse.json(
        { error: "Failed to submit. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully added to waitlist",
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
  return NextResponse.json({ count: 0 });
}
