import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "playbook", "The-Arcinelle-Playbook.pdf");
    const file = readFileSync(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="The-Arcinelle-Playbook.pdf"',
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
