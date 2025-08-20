import {MusicianFactory} from "~/factories/musician.factory";
import {IMusicianHit, IRawMusicianHit} from "~/interfaces/musician-hit.interface";

export const MusicianHitFactory = {
    fromRawMusicianHitToMusicianHit: (hit: IRawMusicianHit): IMusicianHit => {
        return {
            ...hit,
            image: MusicianFactory.getMusicianImageUrlFromRawFullName(hit.full_name),
            initials: hit.full_name
                .split(" ")
                .map(name => name[0])
                .join(""),
        };
    }
}