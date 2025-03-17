import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(req, { params }) {
  const { id } = await params;

  const headerList = headers();
  const type = headerList.get("Content-Type");

  const cookiesList = cookies();
  const coo2 = (await cookiesList).get("Cookie_2")?.value;

  return NextResponse.json({ id, coo2, type });
}
