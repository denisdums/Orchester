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
import {UserService} from "~/services/UserService";
import {SessionService} from "~/services/SessionService";
import GlobalProvider from "~/providers/Global.provider";
import React from "react";
import Header from "~/components/templates/Header";
import {IFeatureFlags} from "~/interfaces/FeatureFlags.interface";
import PageProgress from "~/components/atoms/PageProgress/PageProgress";


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
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
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