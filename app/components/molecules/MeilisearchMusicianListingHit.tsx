import {IRawMusicianHit} from "~/interfaces/musician-hit.interface";
import {MusicianHitFactory} from "~/factories/musician-hit.factory";
import {Link} from "@remix-run/react";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {Highlight} from "react-instantsearch";

export default function MeilisearchMusicianListingHit({hit}: { hit: IRawMusicianHit }) {
    const musicianHit = MusicianHitFactory.fromRawMusicianHitToMusicianHit(hit)
    return (
        <div className="p-4 border rounded mb-2 hover:shadow-sm transition-shadow">
            <Link to={`/musicians/${musicianHit.id}`}>
                <div className="flex items-start gap-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={musicianHit.image}/>
                        <AvatarFallback>{musicianHit.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">
                            <Highlight attribute="full_name" hit={hit}/>
                        </h2>
                        <p className="text-sm text-gray-600">
                            <Highlight attribute="pupitre.title" hit={hit}/>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};