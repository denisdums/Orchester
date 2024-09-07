export type AccountInformationProps = {
    name: string;
    label: string;
    value: string;
}
export default function AccountInformation({name, label, value}: AccountInformationProps) {
    return (
        <div className="flex flex-col">
                <span className="font-bold">{label}</span>
                <span>{value}</span>
        </div>
    )
}