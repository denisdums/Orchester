import {InstantSearch, SearchBox, Hits, useInstantSearch, Index} from 'react-instantsearch';
import {Link} from "@remix-run/react";
import {ChangeEvent, createRef, RefObject, useEffect, useState} from "react";
import classname from "classnames";
import OpenIcon from "~/components/atoms/OpenIcon";
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const {searchClient} = instantMeiliSearch(
    'https://app-meilisearch-dev-001.azurewebsites.net',
    'ie8sM&aL8A9NdrX8',
    {
        placeholderSearch: false,
    }
);
export default function App() {
    return (
        <div className="relative w-full max-w-sm z-50">
            <InstantSearch indexName="fiche-information" searchClient={searchClient}>
                <SearchComponent/>
            </InstantSearch>
        </div>
    )
};

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const {results, setUiState, uiState} = useInstantSearch();
    const inputRef: RefObject<HTMLFormElement> = createRef();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    function handleReset() {
        setQuery("")
        setIsResultsVisible(false)
        setUiState({musician: {query: ""}})
    }

    function handleKeyDown(e: KeyboardEvent) {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            inputRef.current?.querySelector("input")?.focus()
        }
        if (e.key === "Escape") {
            inputRef.current?.querySelector("input")?.blur()
        }
    }

    useEffect(() => {
        setIsResultsVisible(query.length > 0);

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [query])

    return (
        <>
            <SearchBox onInput={handleInput}
                       formRef={inputRef}
                       placeholder={"Rechercher un musicien"}/>
            <div
                className={classname('transition-all absolute top-full bg-white mt-4 w-full p-2 rounded drop-shadow-xl max-h-96 overflow-y-scroll primary-scrollbar', {
                    'invisible translate-y-12 opacity-0': !isResultsVisible
                })}>
                <Index indexName="fiche-information">
                    <Hits hitComponent={Hit} onClick={handleReset}/>
                </Index>
                <Index indexName="event">
                    <Hits hitComponent={Hit} onClick={handleReset}/>
                </Index>
            </div>
        </>
    )
}

const Hit = ({hit}: any) => {
    const hitType = hit._meilisearch_id.split('-').shift();
    if (hitType === "fiche") {
        return (
            <Link to={`/musicians/${hit.id}`}
                  className="px-8 p-4 focus:ring-primary focus:bg-primary/5 hover:bg-primary/5 rounded flex items-center justify-between group">
                <span>{hit.full_name} {hit.Nom}</span>
                <OpenIcon className="w-4 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100"/>
            </Link>
        )
    }

    if (hitType === "event") {
        return (
            <Link to={`/events/${hit.id}`}
                  className="px-8 p-4 focus:ring-primary focus:bg-primary/5 hover:bg-primary/5 rounded flex items-center justify-between group">
                <span>{hit.title}</span>
                <OpenIcon className="w-4 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100"/>
            </Link>
        )
    }
    return null;
}