import { NextResponse,type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
  const {pathname,searchParams}=request.nextUrl
  const result= await updateSession(request)
  return result
  
}


export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    '/master'
  ],
};
