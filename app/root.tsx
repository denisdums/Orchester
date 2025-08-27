import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {json, type LoaderFunctionArgs} from "@remix-run/node";

import "./tailwind.css";
import {UserService} from "~/services/user.service";
import {SessionService} from "~/services/session.service";
import GlobalProvider from "~/providers/Global.provider";
import React from "react";
import Header from "~/components/templates/Header";
import {IFeatureFlags} from "~/interfaces/featureFlags.interface";
import PageProgress from "~/components/atoms/PageProgress/PageProgress";
import {Toaster} from "~/components/ui/toaster";
import Footer from "~/components/templates/Footer";

export function links() {
  return [
    {
      rel: "icon",
      sizes: "any",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
  ]
}

export async function loader({params, request}: LoaderFunctionArgs) {
  const featureFlags: IFeatureFlags = {
    eventResponses: false,
  }

  const {isLoggedIn, userId, userJwt} = await SessionService.isUserLoggedIn(request);
  if (!isLoggedIn || !userId || !userJwt) {
    return {
      isLogged: false,
    }
  }

  const user = await UserService.getByID(userId);

  return json({
    isLogged: true,
    user,
    featureFlags
  })
}

export function Layout() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-touch-fullscreen" content="yes"/>
      <meta name="apple-mobile-web-app-title" content="orchester"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#FFFFFF"/>
      <Meta/>
      <Links/>
    </head>
    <body>
    <GlobalProvider data={data}>
      <Header/>
      <PageProgress/>
      <main className="px-4 md:px-0 max-w-5xl mx-auto">
        <App/>
      </main>
      <Footer/>
      <Toaster />
      <ScrollRestoration/>
      <Scripts/>
    </GlobalProvider>
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet/>;
}