import Separator from "~/components/atoms/Separator";
import {IUser} from "~/interfaces/User.interface";
import {IEventDetail} from "~/interfaces/Event.interface";
import {IMusicianGroup} from "~/interfaces/Musician.interface";
import EventPresencesForm from "~/components/organisms/EventPresencesForm";
import {EventStats} from "~/components/organisms/EventStats";
import EventHero from "~/components/organisms/EventHero";
import EventResponsesGrid from "~/components/organisms/EventResponsesGrid";
import {EventResponseStats} from "~/components/organisms/EventResponseStats";
import {useFeatureFlags} from "~/providers/FeatureFlags.provider";

export type EventProps = {
  user: IUser,
  event: IEventDetail
  musicianGroups: IMusicianGroup[]
}
export default function Event({user, event, musicianGroups}: EventProps) {
  const {flags} = useFeatureFlags();


  return (
    <div className="flex flex-col gap-24 py-10">
      <EventHero event={event}/>
      {user && user.role.type === "comite" && (
        <>
          <Separator/>
          <div role="tablist" className="tabs tabs-lifted">
            {flags?.eventResponses &&
              (
                <>
                  <input type="radio" name="tabs" role="tab" className="tab whitespace-nowrap" aria-label="Réponses"/>
                  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <EventResponsesGrid musicianGroups={musicianGroups} responses={event.responses}/>
                  </div>
                  <input type="radio" name="tabs" role="tab" className="tab whitespace-nowrap"
                         aria-label="Stats Réponses"/>
                  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <EventResponseStats event={event} musicianGroups={musicianGroups}/>
                  </div>
                </>
              )
            }
            <input type="radio" name="tabs" role="tab" className="tab whitespace-nowrap" aria-label="Présences"
                   defaultChecked/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <EventPresencesForm musicianGroups={musicianGroups} event={event}/>
            </div>
            <input type="radio" name="tabs" role="tab" className="tab whitespace-nowrap" aria-label="Stats Présences"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <EventStats event={event} musicianGroups={musicianGroups}/>
            </div>
          </div>
        </>
      )}
    </div>
  )
}