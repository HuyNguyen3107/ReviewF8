import { NextResponse } from "next/server";

export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  const isLogin = request.cookies.get("isLogin");
  const page = request.cookies.get("page");
  const currentLogin = request.cookies.get("currentLogin");

  if (isLogin?.value === "login" && pathname === "/auth") {
    console.log("ok chua");

    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });

  return response;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
