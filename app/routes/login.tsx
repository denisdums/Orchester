import {ActionFunctionArgs} from "@remix-run/node";
import {UserRepository} from "~/repositories/user.repository";
import {SessionService} from "~/services/session.service";
import {useActionData} from "@remix-run/react";
import LoginForm from "~/components/organisms/LoginForm";

export async function action({request}: ActionFunctionArgs) {
    const body = await request.formData();
    const email = body.get("email") as string;
    const password = body.get("password") as string

    if (!email || !password) {
        return {
            error: "Il manque des informations pour se connecter",
        };
    }

    const data = await UserRepository.authenticate(email, password);

    if (!data) {
        return {
            error: "Email ou mot de passe incorrect",
        };
    }

    const {jwt, user} = data;
    return await SessionService.createUserSession(user.id, jwt, '/');
}


export default function Login() {
    const actionData = useActionData<{ error: any } | undefined>();
    return (
        <section className="py-32">
            <div className="container">
                <LoginForm error={actionData?.error}/>
            </div>
        </section>
    )
}