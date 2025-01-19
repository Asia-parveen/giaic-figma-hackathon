import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request JSON (review data)
    const { name, rating, comment } = await req.json();

    if (!name || !rating || !comment) {
      return NextResponse.json(
        { error: "Missing required fields: name, rating, or comment" },
        { status: 400 }
      );
    }

    // You can save the review to a database here
    // Example: await saveReviewToDatabase(name, rating, comment);

    // Response indicating the review was saved successfully
    return NextResponse.json(
      { message: "Review saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving review:", error);
    return NextResponse.json(
      { error: "An error occurred while saving the review" },
      { status: 500 }
    );
  }
}
