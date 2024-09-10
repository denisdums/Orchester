import {IPupitreCount} from "~/interfaces/Event.interface";
import {Cell, Label, LabelList, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {useMediaQueries} from "~/providers/MediaQueries.provider";

export type PresencePieChartProps = {
    pupitreCounts: IPupitreCount[]
}
export default function PresencePieChart({pupitreCounts}: PresencePieChartProps) {
    const {isMobile} = useMediaQueries();

    const colors = [
        'oklch(var(--p))',
        'oklch(var(--s))',
        'oklch(var(--a))',
        'oklch(var(--n))',
        'oklch(var(--wa))',
        'oklch(var(--er))',
        'oklch(var(--su))',
        'oklch(var(--in))',
        'oklch(var(--pc))',
    ];

    const eventChartDatas = pupitreCounts.map((pupitreCount, index) => {
        return {
            name: pupitreCount.title + " (" + pupitreCount.count + ")" ,
            value: pupitreCount.count,
            color: colors[index] || 'oklch(var(--p))'
        }
    });

    return (
        <ResponsiveContainer width="100%" height={isMobile ? 325 : 250}>
            <PieChart>
                <Pie
                    data={eventChartDatas}
                    innerRadius={60}
                    outerRadius={80}
                    fill="oklch(var(--p))"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {eventChartDatas.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                    ))}
                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    )
}