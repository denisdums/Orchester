import {IMusician, IMusicianGroup} from "~/interfaces/musician.interface";
import EventResponseCard from "~/components/molecules/EventResponseCard";
import {IEventResponse} from "~/interfaces/event.interface";

export type EventResponsesFormProps = {
    musicianGroups: IMusicianGroup[],
    responses: IEventResponse[]
}

export default function EventResponsesGrid({musicianGroups, responses}: EventResponsesFormProps) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {musicianGroups.map((group, index) => (
                <div key={index} className="col-span-2 lg:col-span-3 flex flex-col gap-2">
                    <h2>{group.title}</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        {group.musicians.map((musician, index) => (
                            <EventResponseCard key={index}
                                               musician={musician}
                                               response={responses.find(response => response.musician.id === musician.id)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}