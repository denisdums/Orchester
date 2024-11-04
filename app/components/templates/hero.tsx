import {Button} from "~/components/ui/button";
import {useContext} from "react";
import {UserContext} from "~/providers/User.provider";
import {Link} from "@remix-run/react";

export default function Hero() {
    const {user} = useContext(UserContext);

    return (
        <section>
            <div className="container">
                <div
                    className='flex items-center justify-center rounded-2xl border bg-[url("/images/block/circles.svg")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
                    <div className="mx-auto max-w-screen-md">
                        <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
                            Bienvenue {user?.musician.first_name} !
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            Orchester est un outil permettant de garder à jour toutes les informations
                            musiciens de notre orchestre. Mais aussi plein
                            d'autres choses !
                        </p>
                        <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
                            {user && user.role.type === "comite" && (

                                <Button size="lg" asChild={true}>
                                    <Link to={"/musicians"}>Voir la liste des musiciens</Link>
                                </Button>
                            )}
                            {!user && (
                                <Button size="lg" asChild={true} variant="outline">
                                    <Link to={"/login"}>Connectez-vous</Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};