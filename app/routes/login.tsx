import {ActionFunctionArgs, redirect} from "@remix-run/node";
import {UserRepository} from "~/repositories/UserRepository";
import {SessionService} from "~/services/SessionService";
import {useActionData} from "@remix-run/react";
import LoginForm from "~/components/organisms/LoginForm";

export async function action({request}: ActionFunctionArgs) {
    const body = await request.formData();
    const email = body.get("email") as string;
    const password = body.get("password") as string

    if (!email || !password) {
        return {
            error: "Email or password is missing",
        };
    }

    const data = await UserRepository.authenticate(email, password);

    console.log(data);

    if (!data) {
        return {
            error: "Email or password is incorrect",
        };
    }

    const {jwt, user} = data;
    return await SessionService.createUserSession(user.id, jwt, '/');
}


export default function Login() {
    const actionData = useActionData<{ error: any } | undefined>();
    return (
        <LoginForm error={actionData?.error}/>
    )
}