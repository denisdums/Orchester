import type {MetaFunction} from "@remix-run/node";
import Musicians from "~/pages/Musicians";

export const meta: MetaFunction = () => {
    return [
        {title: "Musiciens"},
        {name: "description", content: "Liste des musiciens"},
    ];
};

export async function loader() {
    return null;
}

export default function Index() {
    return <Musicians/>;
}
