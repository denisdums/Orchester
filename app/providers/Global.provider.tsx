import React from "react";
import UserProvider from "~/providers/User.provider";
import ToastProvider from "~/providers/Toast.provider";
import MediaQueriesProvider from "~/providers/MediaQueries.provider";

export type GlobalProviderDataType = {
    children: any;
    data: any;
}
export default function GlobalProvider({children, data}: GlobalProviderDataType) {
    return (
        <UserProvider isLogged={data.isLogged} user={data?.user}>
            <ToastProvider>
              <MediaQueriesProvider>
                {children}
              </MediaQueriesProvider>
            </ToastProvider>
        </UserProvider>
    );
}