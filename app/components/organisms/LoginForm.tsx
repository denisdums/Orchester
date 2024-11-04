import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {UserRound} from "lucide-react";
import {Button} from "~/components/ui/button";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import classNames from "classnames";

export default function LoginForm({error = undefined, onModal}: { error?: string | undefined, onModal?: boolean}) {
    return (
        <div className="flex flex-col gap-10">
            <form method="post" action="/login" className="flex flex-col items-center gap-4">
                {error && (
                    <div role="alert" className="bg-red-400 border border-red-600 alert-error flex items-center gap-4 rounded text-white max-w-sm mx-auto py-2 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>{error}</span>
                    </div>
                )}


                <div className="flex flex-col gap-4">
                    <Card className={classNames('mx-auto w-full max-w-md', {'border-0': onModal})}>
                        <CardHeader className="items-center">
                            <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground"/>
                            <CardTitle className="text-xl">Connexion</CardTitle>
                            <CardDescription>
                                Connectez-vous pour accéder à votre compte.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Mot de passe</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="********"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Se connecter
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
        </div>
    )
}