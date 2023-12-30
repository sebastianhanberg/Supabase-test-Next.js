"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
      appearance={{
        theme: "dark",
        button: {
          className:
            "bg-white text-gray-900 hover:bg-gray-600 font-medium py-2 px-4 border border-gray-400 rounded shadow hover:shadow-md transition duration-200 ease-in-out",
        },
        input: {
          className:
            "bg-gray-700 border border-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
        },
      }}
    />
  );
}
