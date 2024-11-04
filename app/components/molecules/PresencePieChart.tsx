"use client"

import * as React from "react"
import {Label, Legend, Pie, PieChart} from "recharts"
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card"
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "~/components/ui/chart"
import {IPupitreCount} from "~/interfaces/event.interface";
import {H3} from "~/components/ui/typography";

export type PresencePieChartProps = {
    pupitreCounts: IPupitreCount[]
}

export default function PresencePieChart({pupitreCounts}: PresencePieChartProps) {

    //color with tone of black
    const colors = [
        "hsl(0, 0%, 0%)",
        "hsl(0, 0%, 10%)",
        "hsl(0, 0%, 20%)",
        "hsl(0, 0%, 30%)",
        "hsl(0, 0%, 40%)",
        "hsl(0, 0%, 50%)",
        "hsl(0, 0%, 60%)",
        "hsl(0, 0%, 70%)",
        "hsl(0, 0%, 80%)",
        "hsl(0, 0%, 90%)",
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