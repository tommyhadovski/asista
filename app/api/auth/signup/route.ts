import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name, companyName } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email a heslo sú povinné" }, { status: 400 });
    }

    const supabase = createServerClient();

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    // Create company if name provided
    if (companyName && authData.user) {
      const { error: companyError } = await supabase
        .from("companies" as never)
        .insert({
          name: companyName,
          industry: "",
          address: "",
          phone: "",
          email,
          plan: "starter",
          settings: {},
        } as never);

      if (companyError) {
        console.error("Company creation error:", companyError);
      }
    }

    return NextResponse.json({ user: authData.user });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
