import {IEventDetail, IPupitreCount} from "~/interfaces/event.interface";
import {useEffect, useState} from "react";
import {IMusicianGroup} from "~/interfaces/musician.interface";
import PresencePieChart from "~/components/molecules/PresencePieChart";
import {H3, H4, P} from "~/components/ui/typography";
import {Card, CardContent, CardHeader} from "~/components/ui/card";

export type EventStatsProps = {
    event: IEventDetail
    musicianGroups: IMusicianGroup[]
}

export function EventStats({event, musicianGroups}: EventStatsProps) {
    const [mostPresentPupitre, setMostPresentPupitre] = useState<IPupitreCount | null>();
    const [totalMusicians, setTotalMusicians] = useState<number>(0);

    useEffect(() => {
        setMostPresentPupitre(getMostPresentPupitre());
        setTotalMusicians(getTotalMusicians());
    }, [event]);


    function getMostPresentPupitre(): IPupitreCount | null {
        const pupitreCounts = getPupitreCounts();
        if (pupitreCounts.length === 0) return null;
        return pupitreCounts.reduce((prev, current) => (prev.count > current.count) ? prev : current);
    }

    function getPupitreCounts() {
        const pupitreNames = event.presences
            .map(presence => presence.pupitre.title)
            .filter((v, i, self) => i == self.indexOf(v));
        const pupitreCounts: IPupitreCount[] = pupitreNames.map(pupitreName => {
            return {
                title: pupitreName,
                count: event.presences.filter(presence => presence.pupitre.title === pupitreName).length
            }
        });

        return pupitreCounts;
    }

    function getTotalMusicians(): number {
        let count = 0;
        musicianGroups.forEach(musicianGroup => {
            count += musicianGroup.musicians.length;
        });
        return count;
    }

    const presencePercentage = Math.round((event.presences.length / totalMusicians) * 100);

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mostPresentPupitre && (
                    <Card>
                        <CardHeader>
                            <H3>Pupitre le plus représenté</H3>
                        </CardHeader>
                        <CardContent>
                            <H4>{mostPresentPupitre?.title}</H4>
                            <P>{mostPresentPupitre?.count} musiciens</P>
                        </CardContent>
                    </Card>
                )}
                {!!event.presences.length && (
                    <Card>
                        <CardHeader>
                            <H3>Participants</H3>
                        </CardHeader>
                        <CardContent>
                            <H4>{event.presences.length}</H4>
                            <P>{presencePercentage}% de présents</P>
                        </CardContent>
                    </Card>
                )}
            </div>
            {!!event.presences.length && (
                <PresencePieChart pupitreCounts={getPupitreCounts()}/>
            )}
        </div>
    )
}