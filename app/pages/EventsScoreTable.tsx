import {IUser} from "~/interfaces/user.interface";
import {IMusician} from "~/interfaces/musician.interface";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {useCallback, useEffect, useState} from "react";
import {DatePicker} from "~/components/molecules/DatePicker";
import {Button} from "~/components/ui/button";
import {useLocation, useNavigate} from "@remix-run/react";
import FilterIcon from "~/components/atoms/FilterIcon";
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {H4} from "~/components/ui/typography";

export type EventsProps = {
    user: IUser,
    musiciansWithTotalScores: (IMusician & { totalScore: number, percentageOfPresenceAtEvents: number })[],
    startDate?: string,
    endDate?: string,
    averageDefile: number,
    averageRepetition: number,
    averageConcert: number,
    averageBanda: number,
    averageOverall: number,
    defileEvents: any[],
    repetitionEvents: any[],
    eventConcerts: any[],
    eventBandas: any[],
}

export default function EventsScoreTable(props: EventsProps) {
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
        navigate(`/events/scores?${searchParams.toString()}`);
    }, [startDate, endDate, navigate, location.search]);

    const resetFilters = useCallback(() => {
        setStartDate(undefined);
        setEndDate(undefined);
        navigate(`/events/scores`);
    }, [navigate]);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Scores de présence</h2>
            </div>
            <div className="flex flex-col gap-2">

                <div className="grid grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Nombre de musiciens actifs:</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="block text-4xl text-center my-8 text-muted-foreground">{props.musiciansWithTotalScores.length}</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Moyenne de présence:</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc">
                                <li className="ml-8 text-muted-foreground">Défilé: {props.averageDefile}</li>
                                <li className="ml-8 text-muted-foreground">Répétition: {props.averageRepetition}</li>
                                <li className="ml-8 text-muted-foreground">Concert: {props.averageConcert}</li>
                                <li className="ml-8 text-muted-foreground">Banda: {props.averageBanda}</li>
                                <li className="ml-8 text-muted-foreground">Global: {props.averageOverall}</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Nombre d'évènements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc">
                                <li className="ml-8 text-muted-foreground">Défilé: {props.defileEvents.length}</li>
                                <li className="ml-8 text-muted-foreground">Répétition: {props.repetitionEvents.length}</li>
                                <li className="ml-8 text-muted-foreground">Concert: {props.eventConcerts.length}</li>
                                <li className="ml-8 text-muted-foreground">Banda: {props.eventBandas.length}</li>
                                <li className="ml-8 text-muted-foreground">Global: {props.defileEvents.length + props.repetitionEvents.length + props.eventConcerts.length + props.eventBandas.length}</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <hr/>
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
            <div className="relative w-full max-h-[600px] border rounded-md overflow-y-auto">
                <Table noWrapper>
                    <TableHeader className="bg-background sticky top-0 z-10">
                        <TableRow>
                            <TableHead className="font-medium sticky left-0 bg-background">Musicien</TableHead>
                            <TableHead className="font-medium sticky left-0 bg-background">Score</TableHead>
                            <TableHead className="font-medium sticky left-0 bg-background">% de présence</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.musiciansWithTotalScores.map((musician, index) => (
                            <TableRow key={index} className="group">
                                <TableCell
                                    className="font-medium sticky left-0 bg-background group-hover:bg-muted transition-colors">{musician.full_name}</TableCell>
                                <TableCell
                                    className="font-medium sticky left-0 bg-background group-hover:bg-muted transition-colors">{musician.totalScore}</TableCell>
                                <TableCell
                                    className="font-medium sticky left-0 bg-background group-hover:bg-muted transition-colors">{musician.percentageOfPresenceAtEvents} %</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}