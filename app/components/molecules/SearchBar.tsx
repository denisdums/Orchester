import { InstantSearch, SearchBox, Hits, useInstantSearch, Index } from "react-instantsearch";
import {Link, useLocation} from "@remix-run/react";
import { ChangeEvent, createRef, RefObject, useEffect, useState } from "react";
import classname from "classnames";
import OpenIcon from "~/components/atoms/OpenIcon";
import { searchClient } from "~/db/MeiliSearch";

export default function SearchBar() {
    return (
        <div className="relative w-full max-w-sm z-50">
            <InstantSearch indexName="fiche-information" searchClient={searchClient}>
                <SearchComponent />
            </InstantSearch>
        </div>
    );
}

const SearchComponent = () => {
    const location = useLocation()
    const [query, setQuery] = useState("");
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const inputRef: RefObject<HTMLFormElement> = createRef();

    useEffect(() => {
        setQuery("");
        setIsResultsVisible(false);
        if (inputRef.current) {
            inputRef.current.reset();
        }
    }, [location.key]);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    function handleReset() {
        setQuery("");
        setIsResultsVisible(false);
    }

    useEffect(() => {
        setIsResultsVisible(query.length > 0);
    }, [query]);

    return (
        <>
            <SearchBox
                searchAsYouType={true}
                onInput={handleInput}
                formRef={inputRef}
                placeholder={"Rechercher un musicien, un événement..."}
                classNames={{
                    root: "relative",
                    form: "flex items-center",
                    input: "w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary",
                    submit: "hidden",
                    reset: "hidden",
                    loadingIndicator: "hidden",
                }}
            />
            <div
                className={classname(
                    "transition-all absolute top-full bg-white mt-4 w-full  rounded drop-shadow-xl max-h-96 overflow-y-scroll primary-scrollbar p-2",
                    {
                        "invisible translate-y-12 opacity-0 p-2": !isResultsVisible,
                    }
                )}
            >
                <Index indexName="fiche-information">
                    <Hits hitComponent={Hit} onClick={handleReset} />
                </Index>
                <Index indexName="event">
                    <Hits hitComponent={Hit} onClick={handleReset} />
                </Index>
            </div>
        </>
    );
};

const Hit = ({ hit }: any) => {
    const hitType = hit._meilisearch_id.split("-").shift();
    if (hitType === "fiche") {
        return (
            <Link
                to={`/musicians/${hit.id}`}
                className="px-8 p-4 focus:ring-primary focus:bg-primary/5 hover:bg-primary/5 rounded flex items-center justify-between group"
            >
                <span>
                    {hit.full_name} {hit.Nom}
                </span>
                <OpenIcon className="w-4 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100" />
            </Link>
        );
    }

    if (hitType === "event") {
        return (
            <Link
                to={`/events/${hit.id}`}
                className="px-8 p-4 focus:ring-primary focus:bg-primary/5 hover:bg-primary/5 rounded flex items-center justify-between group"
            >
                <span>{hit.title}</span>
                <OpenIcon className="w-4 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100" />
            </Link>
        );
    }
    return null;
};
