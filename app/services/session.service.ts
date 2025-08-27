import {createCookieSessionStorage, redirect} from "@remix-run/node";

export const SessionService = {
    getSessionStorage: () => {
        return createCookieSessionStorage({
            cookie: {
                name: "Session",
                secure: true,
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
                secrets: [process.env.SESSION_SECRET || 'default_secret'],
                httpOnly: true,
            },
        })
    },

    async createUserSession(userId: string, jwt: string, redirectTo: string) {
        const storage = SessionService.getSessionStorage();
        const session = await storage.getSession();
        session.set("userId", userId);
        session.set("userJwt", jwt);
        const cookies = await storage.commitSession(session);

        return redirect(redirectTo, {
            headers: {
                "Set-Cookie": cookies,
            },
        });
    },

    async deleteUserSession(redirectTo: string) {
        const storage = SessionService.getSessionStorage();
        const session = await storage.getSession();

        return redirect(redirectTo, {
            headers: {
                "Set-Cookie": await storage.destroySession(session),
            },
        });
    },

    getUserSession(request: Request) {
        const storage = SessionService.getSessionStorage();
        return storage.getSession(request.headers.get("Cookie"));
    },

    async isUserLoggedIn(request: Request): Promise<{
        isLoggedIn: boolean,
        userId: string | undefined,
        userJwt: string | undefined
    }> {
        const session = await SessionService.getUserSession(request);
        const currentUserId = session.get("userId");
        const currentUserJwt = session.get("userJwt");

        return {
            isLoggedIn: !!currentUserId,
            userId: currentUserId || undefined,
            userJwt: currentUserJwt || undefined,
        }
    }
}
