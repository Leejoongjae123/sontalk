import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { redirect } from "next/navigation";
import {createMiddlewareClient}from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const {pathname,searchParams}=req.nextUrl
  const result= await updateSession(req)
  const res=NextResponse.next()

  const publicUrls=['/reset']
  if (publicUrls.includes(req.nextUrl.pathname)){
    return res
  }

  const supabase=createMiddlewareClient({req,res})

  const {data:{session}}=await supabase.auth.getSession()
  



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
    '/master',
  ],
};
