import {IEventDetail} from "~/interfaces/Event.interface";
import EventCalendarButton from "~/components/molecules/EventCalendarButton";
import EventResponseForm from "~/components/molecules/EventResponseForm";
import {useFeatureFlags} from "~/providers/FeatureFlags.provider";

export type EventHeroProps = {
  event: IEventDetail;
}

export default function EventHero({event}: EventHeroProps) {
  const date = new Date(event.date);
  const dateInLetters = date.toLocaleString('default', {weekday: 'long'}) + " " + date.getDate() + " " + date.toLocaleString('default', {month: 'long'}) + " " + date.getFullYear();
  const {flags} = useFeatureFlags();


  return (
    <div className="hero py-14 bg-base-200 relative">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{event.title}</h1>
          <p className="text-neutral/40 first-letter:uppercase">{dateInLetters}</p>
          {event.description && <p className="py-6">{event.description}</p>}
          {flags?.eventResponses && <EventResponseForm event={event}/>}
        </div>
        <div>
          <EventCalendarButton event={event} className={"absolute top-5 right-5"}/>
        </div>
      </div>
    </div>
  )
}