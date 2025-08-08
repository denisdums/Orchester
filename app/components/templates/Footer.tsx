import {Link} from "@remix-run/react";

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="rounded-lg max-w-5xl bg-foreground text-background mx-auto flex justify-center">
                <div className="py-4 px-8 max-w-3xl w-full flex justify-between">
                    <ul className="text-sm flex flex-col gap-2">
                        <li>
                            <Link to="/musicians">Liste des musiciens</Link>
                        </li>
                        <li>
                            <Link to="/events">Liste des évènements</Link>
                        </li>
                        <li>
                            <Link to="/mentions-legales">Mentions légales</Link>
                        </li>
                    </ul>
                    <Link to="/" className="text-2xl font-bold">Orchester.</Link>
                </div>
            </div>
        </footer>
    )
}