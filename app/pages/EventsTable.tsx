import {IUser} from "~/interfaces/user.interface";
import {IEvent} from "~/interfaces/event.interface";
import {IMusicianGroup} from "~/interfaces/musician.interface";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "~/components/ui/table";
import {Fragment, useCallback, useEffect, useState} from "react";
import {DatePicker} from "~/components/molecules/DatePicker";
import {Button} from "~/components/ui/button";
import {useLocation, useNavigate} from "@remix-run/react";
import FilterIcon from "~/components/atoms/FilterIcon";

export type EventsProps = {
    user: IUser,
    events: IEvent[],
    musicianGroups: IMusicianGroup[],
    startDate?: string,
    endDate?: string
}
export default function EventsTable(props: EventsProps) {
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
        navigate(`/events/table?${searchParams.toString()}`);
    }, [startDate, endDate, navigate, location.search]);

    const resetFilters = useCallback(() => {
        setStartDate(undefined);
        setEndDate(undefined);
        navigate(`/events/table`);
    }, [navigate]);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Evènements</h2>
                <p className="py-2 px-4 border rounded-full text-xs">{props.events?.length} évènements</p>
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
            <div className="relative w-full max-h-[600px] border rounded-md overflow-y-auto">
            <Table noWrapper>
                <TableHeader className="bg-background sticky top-0 z-10">
                    <TableRow>
                        <TableHead className="font-medium sticky left-0 bg-background">Musicien</TableHead>
                        {props.events.map(event => (
                            <TableHead key={event.id}
                                       className="text-center">{new Date(event.rawDate).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: '2-digit'
                            })}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.musicianGroups.map((group, index) => (
                        <Fragment key={index}>
                            <TableRow className="bg-muted">
                                <TableCell colSpan={props.events.length + 1}>
                                    <span className="sticky left-2 font-bold">{group.title}</span>
                                </TableCell>
                            </TableRow>
                            {group.musicians.map((musician, mIndex) => (
                                <TableRow key={mIndex} className="group">
                                    <TableCell className="font-medium sticky left-0 bg-background group-hover:bg-muted transition-colors">{musician.full_name}</TableCell>
                                    {props.events.map((event, eIndex) => (
                                        <TableCell key={eIndex} className="text-center">
                                            {event.presences.includes(musician.id) ? <span
                                                className="mx-auto block w-4 h-4 rounded-full bg-green-500"></span> : event.excuses.includes(musician.id) ?
                                                <span className="mx-auto block w-4 h-4 rounded-full bg-orange-500"></span> :
                                                <span className="mx-auto block w-4 h-4 rounded-full bg-red-500"></span>}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
        </div>
    )
}