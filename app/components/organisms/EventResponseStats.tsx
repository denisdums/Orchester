import {IEventDetail, IEventResponse, IPupitreCount} from "~/interfaces/event.interface";
import {useEffect, useState} from "react";
import {IMusicianGroup} from "~/interfaces/musician.interface";
import PresencePieChart from "~/components/molecules/PresencePieChart";

export type EventStatsProps = {
  event: IEventDetail
  musicianGroups: IMusicianGroup[]
}

export function EventResponseStats({event, musicianGroups}: EventStatsProps) {
  const [mostPresentPupitre, setMostPresentPupitre] = useState<IPupitreCount | null>();
  const [totalMusicians, setTotalMusicians] = useState<number>(0);
  const [eventResponsesPresent, setEventResponsesPresent] = useState<IEventResponse[]>([]);
  const [eventResponsesAbsent, setEventResponsesAbsent] = useState<IEventResponse[]>([]);
  const [pupitreCounts, setPupitreCounts] = useState<IPupitreCount[]>([]);

  useEffect(() => {
    const presentResponses = event.responses.filter(response => response.isPresent);
    const absentResponses = event.responses.filter(response => !response.isPresent);
    const pupitreCounts = getPupitreCounts(presentResponses);
    const mostPresentPupitreByPupitreCount = getMostPresentPupitre(pupitreCounts);
    const totalMusicians = getTotalMusicians();

    setTotalMusicians(totalMusicians);
    setPupitreCounts(pupitreCounts);
    setEventResponsesPresent(presentResponses);
    setEventResponsesAbsent(absentResponses);
    setMostPresentPupitre(mostPresentPupitreByPupitreCount);
  }, [event]);


  function getMostPresentPupitre(pupitreCounts: IPupitreCount[]): IPupitreCount | null {
    if (!pupitreCounts.length) {
      return null;
    }
    return pupitreCounts.reduce((prev, current) => (prev.count > current.count) ? prev : current);
  }

  function getTotalMusicians(): number {
    let count = 0;
    musicianGroups.forEach(musicianGroup => {
      count += musicianGroup.musicians.length;
    });
    return count;
  }

  function getPupitreCounts(presentResponses: IEventResponse[]): IPupitreCount[] {
    const pupitreNames = presentResponses
      .map(presence => presence.musician.pupitre.title)
      .filter((v, i, self) => i == self.indexOf(v));
    return pupitreNames.map(pupitreName => {
      return {
        title: pupitreName,
        count: presentResponses.filter(response => response.musician.pupitre.title === pupitreName).length
      }
    });
  }

  const presencePercentage = Math.round((eventResponsesPresent.length / totalMusicians) * 100);
  const absencePercentage = Math.round((eventResponsesAbsent.length / totalMusicians) * 100);
  const notRespondedPercentage = Math.round(((totalMusicians - eventResponsesPresent.length - eventResponsesAbsent.length) / totalMusicians) * 100);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="stats stats-vertical lg:stats-horizontal">
        {mostPresentPupitre && (
          <div className="stat">
            <div className="stat-title">Pupitre qui sera le plus représenté</div>
            <div className="stat-value">{mostPresentPupitre?.title}</div>
            <div className="stat-desc">{mostPresentPupitre?.count} musiciens</div>
          </div>
        )}
        <div className="stat">
          <div className="stat-title">Participants</div>
          <div className="stat-value">{eventResponsesPresent.length}</div>
          <div className="stat-desc">{presencePercentage}% de présents</div>
          <div className="stat-desc">{absencePercentage}% d'absents</div>
          <div className="stat-desc">{notRespondedPercentage}% de réponses manquantes</div>
        </div>
      </div>

      <PresencePieChart pupitreCounts={pupitreCounts}/>
    </div>
  )
}