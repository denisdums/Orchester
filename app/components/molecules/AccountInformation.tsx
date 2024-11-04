import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";

export type AccountInformationProps = {
    name: string;
    label: string;
    value: string;
}
export default function AccountInformation({name, label, value}: AccountInformationProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{label}</CardTitle>
            </CardHeader>
            <CardContent>
                {value}
            </CardContent>
        </Card>
    )
}