import {IMusician} from "~/interfaces/musician.interface";
import {Link} from "@remix-run/react";
import {ArrowRight, ArrowUpRightFromSquare, Slash} from "lucide-react";
import {Button} from "~/components/ui/button";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";

export type MusicianProps = {
    musician: IMusician
}
export default function Musician(props: MusicianProps) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink to="/">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash/>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink to="/musicians">Liste des musiciens</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash/>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        {props.musician.full_name}
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col gap-10 pb-32">
                <section>
                    <div className="container">
                        <div className="grid items-center gap-8 lg:grid-cols-2">
                            <div
                                className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
                                <p className="py-2 px-4 border rounded-full text-xs">{props.musician.presences?.length} présences</p>
                                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                                    {props.musician.full_name}
                                </h1>
                                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button className="w-full sm:w-auto" asChild={true}>
                                        <Link to={props.musician.editLink} className="btn btn-primary" target="_blank"
                                              rel="noreferrer">
                                            Editer le musicien
                                            <ArrowRight className="mr-2 size-4"/>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full sm:w-auto" asChild={true}>
                                        <Link to={"/musicians"} className="btn btn-secondary">Retour à la liste des
                                            musiciens</Link>

                                    </Button>
                                </div>
                            </div>
                            <div className="hidden md:block relative aspect-[3/4]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        viewBox="0 0 800 800"
                                        className="size-full text-muted-foreground opacity-20"
                                    >
                                        {Array.from(Array(720).keys()).map((dot, index, array) => {
                                            const angle = 0.2 * index;
                                            const scalar = 40 + index * (360 / array.length);
                                            const x = Math.round(Math.cos(angle) * scalar);
                                            const y = Math.round(Math.sin(angle) * scalar);

                                            return (
                                                <circle
                                                    key={index}
                                                    r={(3 * index) / array.length}
                                                    cx={400 + x}
                                                    cy={400 + y}
                                                    opacity={1 - Math.sin(angle).toFixed(5)}
                                                />
                                            );
                                        })}
                                    </svg>
                                </div>
                                <div
                                    className="absolute left-[8%] top-[10%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
                                <div
                                    className="absolute right-[12%] top-[20%] flex aspect-square w-1/5 justify-center rounded-lg border border-border bg-accent"></div>
                                <div
                                    className="absolute bottom-[24%] right-[24%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <Table>
                        <TableCaption>Liste des présences de {props.musician.full_name}</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Identifiant</TableHead>
                                <TableHead>Evènement</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Lien de l'évènement</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {props.musician.presences?.map((presence, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{presence.id}</TableCell>
                                    <TableCell>{presence.title}</TableCell>
                                    <TableCell>{presence.date}</TableCell>
                                    <TableCell>
                                        <Button asChild={true} className="block w-max">
                                            <Link to={`/events/${presence.id}`}>
                                                <ArrowUpRightFromSquare/>
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}