import {IMusician} from "~/interfaces/musician.interface";
import {Link, useLocation, useNavigate} from "@remix-run/react";
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
import {DatePicker} from "~/components/molecules/DatePicker";
import FilterIcon from "~/components/atoms/FilterIcon";
import {useCallback, useEffect, useState} from "react";

export type MusicianProps = {
    musician: IMusician,
    startDate?: string,
    endDate?: string
}
export default function Musician(props: MusicianProps) {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (props.startDate) {
            setStartDate(new Date(props.startDate));
        }
        if (props.endDate) {
            setEndDate(new Date(props.endDate));
        }
    }, [props.startDate, props.endDate]);

    const applyFilters = useCallback(() => {
        const searchParams = new URLSearchParams(location.search);

        if (startDate) {
            searchParams.set('startDate', startDate.toISOString());
        } else {
            searchParams.delete('startDate');
        }
        if (endDate) {
            searchParams.set('endDate', endDate.toISOString());
        } else {
            searchParams.delete('endDate');
        }
        navigate(`/musicians/${props.musician.id}?${searchParams.toString()}`);
    }, [startDate, endDate, navigate, props.musician.id, location.search]);

    const resetFilters = useCallback(() => {
        setStartDate(undefined);
        setEndDate(undefined);
        navigate(`/musicians/${props.musician.id}`);
    }, [navigate, props.musician.id]);

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
                        <div className="grid items-center gap-8 lg:grid-cols-12">
                            <div
                                className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left lg:col-span-7">
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
                            <div className="hidden md:block relative aspect-[3/4] lg:col-span-5">
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
                                                    cy={400 + y}  // @ts-expect-error expect-error
                                                    opacity={1 - Math.sin(angle).toFixed(5)}
                                                />
                                            );
                                        })}
                                    </svg>
                                </div>
                                <div
                                    className="absolute left-[8%] top-[10%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent">
                                    <img
                                        src={props.musician.image}
                                        alt={props.musician.full_name}
                                        className="h-full w-full rounded-lg object-cover"/>
                                </div>
                                <div
                                    className="absolute right-[12%] top-[20%] flex aspect-square w-1/5 justify-center rounded-lg border border-border bg-accent"></div>
                                <div
                                    className="absolute bottom-[24%] right-[24%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">Présences</h2>
                        <p className="py-2 px-4 border rounded-full text-xs">{props.musician.presences?.length} présences</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <FilterIcon className="w-4"/>
                            <p>Filtrer</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <DatePicker label={'Date de début'} onChange={setStartDate} date={startDate}/>
                            <DatePicker label={'Date de fin'} onChange={setEndDate} date={endDate}/>
                            <Button onClick={applyFilters}> Appliquer </Button>
                            <Button onClick={resetFilters} variant="outline">
                                Réinitialiser
                            </Button>
                        </div>
                    </div>
                    <Table>
                        <TableCaption>Liste des présences de {props.musician.full_name}</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Evènement</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {props.musician.presences?.map((presence, index) => (
                                <TableRow key={index} className="group relative">
                                    <TableCell className="font-semibold">{presence.title}</TableCell>
                                    <TableCell>{presence.date}</TableCell>
                                    <TableCell>
                                        <Button asChild={true} className="block w-max">
                                            <Link to={`/events/${presence.id}`}
                                                  className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transition-duration-300 after:absolute after:top-0 after:left-0 after:w-full after:h-full">
                                                Voir l'évènement <ArrowUpRightFromSquare/>
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