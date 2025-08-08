import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const meiliSearchObject = instantMeiliSearch(
    "https://meilisearch-orchester.denisdums.com/",
    "HvhzSPPIEV48wTGjLEzHxg3WNw5JDuw1",
    {
        placeholderSearch: false,
    }
);

export default meiliSearchObject;
export const searchClient = meiliSearchObject.searchClient;
