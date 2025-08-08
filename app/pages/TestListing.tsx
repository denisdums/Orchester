import { Link } from "@remix-run/react";
import {
    InstantSearch,
    Hits,
    Pagination,
    Highlight,
    Configure,
    RefinementList,
    HitsPerPage,
    ClearRefinements,
    CurrentRefinements,
} from "react-instantsearch";
import { searchClient } from "~/db/MeiliSearch";

const Hit = ({ hit }) => {
    return (
        <div className="p-4 border rounded mb-2">
            <Link to={`/musicians/${hit.id}`}>
                <h2 className="text-lg font-semibold">
                    <Highlight attribute="full_name" hit={hit} />
                </h2>
                <p className="text-sm text-gray-600">
                    <Highlight attribute="pupitre.title" hit={hit} />
                </p>
            </Link>
        </div>
    );
};

const TestListing = () => {
    const transformItems = (items) => {
        return items.map((item) => ({
            ...item,
            label: item.label.replace("pupitre.title", "Pupitre"),
        }));
    };

    return (
        <div className="max-w-5xl mx-auto py-4">
            <InstantSearch indexName="fiche-information" searchClient={searchClient}>
                <Configure query=" " />
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 flex items-center justify-between">
                        <div>
                            <CurrentRefinements
                                classNames={{
                                    item: "text-sm text-gray-600 flex items-center gap-2 justify-between",
                                    delete: "text-xs text-bold text-gray-500 ml-1 px-[3px] rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
                                    label: "hidden",
                                }}
                                transformItems={transformItems}
                            />
                        </div>
                        <HitsPerPage
                            items={[
                                { label: "12 résultats par page", value: 12, default: true },
                                { label: "24 résultats par page", value: 24 },
                            ]}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Pupitre</h2>
                            <RefinementList
                                attribute="pupitre.title"
                                sortBy={["name:asc"]}
                                classNames={{
                                    root: "mb-4",
                                    label: "text-sm font-medium",
                                    count: "text-xs text-gray-500 ml-2 p-1 rounded bg-gray-100",
                                    checkbox: "mr-2 accent-primary",
                                }}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div>
                                <ClearRefinements
                                    title="Rénitialiser"
                                    translations={{
                                        resetButtonText: "Tout réinitialiser",
                                    }}
                                    classNames={{
                                        button: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <Hits
                            hitComponent={Hit}
                            classNames={{
                                list: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2",
                            }}
                        />
                        <div className="mt-4">
                            <Pagination
                                showFirst={false}
                                showLast={false}
                                classNames={{
                                    root: "flex justify-center",
                                    list: "flex items-center",
                                    item: "px-3 py-1 border rounded mx-1",
                                    selectedItem:
                                        "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8",
                                    disabledItem: "opacity-50 cursor-not-allowed px-3 py-1 border rounded mx-1",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </InstantSearch>
        </div>
    );
};

export default TestListing;
