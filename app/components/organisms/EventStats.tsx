import {IEventDetail, IPupitreCount} from "~/interfaces/Event.interface";
import {useEffect, useState} from "react";
import {IMusicianGroup} from "~/interfaces/Musician.interface";
import PresencePieChart from "~/components/molecules/PresencePieChart";

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
            <div className="stats stats-vertical lg:stats-horizontal">
                {mostPresentPupitre && (
                    <div className="stat">
                        <div className="stat-title">Pupitre le plus représenté</div>
                        <div className="stat-value">{mostPresentPupitre?.title}</div>
                        <div className="stat-desc">{mostPresentPupitre?.count} musiciens</div>
                    </div>
                )}
                <div className="stat">
                    <div className="stat-title">Participants</div>
                    <div className="stat-value">{event.presences.length}</div>
                    <div className="stat-desc">{presencePercentage}% de présents</div>
                </div>
            </div>

            <PresencePieChart pupitreCounts={getPupitreCounts()}/>
        </div>
    )
}