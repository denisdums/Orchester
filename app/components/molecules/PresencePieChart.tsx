"use client"

import {Label, Legend, Pie, PieChart} from "recharts"
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "~/components/ui/chart"
import {IPupitreCount} from "~/interfaces/event.interface";
import {H3} from "~/components/ui/typography";

export type PresencePieChartProps = {
    pupitreCounts: IPupitreCount[]
}

export default function PresencePieChart({pupitreCounts}: PresencePieChartProps) {
    const colors = [
        "hsl(217, 89%, 61%)",
        "hsl(4, 77%, 56%)",
        "hsl(145, 63%, 46%)",
        "hsl(45, 95%, 54%)",
        "hsl(267, 89%, 61%)",
        "hsl(14, 88%, 54%)",
        "hsl(184, 55%, 53%)",
        "hsl(27, 100%, 51%)",
        "hsl(152, 77%, 34%)",
        "hsl(291, 47%, 51%)",
    ]

    const chartData = pupitreCounts.map((pupitreCount, index) => {
        return {name: pupitreCount.title, count: pupitreCount.count, fill: colors[index]}
    });

    const chartConfig = {} satisfies ChartConfig
    pupitreCounts.forEach((pupitreCount, index) => {
        chartConfig[pupitreCount.title] = {
            label: pupitreCount.title,
            color: colors[index]
        }
    });

    const totalCount = pupitreCounts.reduce((acc, pupitreCount) => acc + pupitreCount.count, 0);

    return (
        <div className="flex flex-col">
            <div className="items-center pb-0">
                <H3>Répartition des présences</H3>
            </div>
            <div className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>}/>
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="name"
                            innerRadius={60}
                            outerRadius={80}
                            strokeWidth={10}
                        >
                            <Label
                                content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalCount}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Musiciens
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                        <Legend/>
                    </PieChart>
                </ChartContainer>
            </div>
        </div>
    )
}