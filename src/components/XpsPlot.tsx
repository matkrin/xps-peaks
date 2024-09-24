import { Config, Data, Layout } from "plotly.js";
import Plot from "react-plotly.js";
import elementLibrary from "../../library.json";

type XpsPlotProps = {
    excitationEnergy: number;
    selectedElements: string[];
};

const createColorMap = (elements: string[]) => {
    const colors = [
        "#1f77b4", // Blue
        "#ff7f0e", // Orange
        "#2ca02c", // Green
        "#d62728", // Red
        "#9467bd", // Purple
        "#8c564b", // Brown
        "#e377c2", // Pink
        "#7f7f7f", // Gray
        "#bcbd22", // Olive
        "#17becf", // Cyan
    ];

    const colorMap: { [key: string]: string } = {};
    elements.forEach((element, index) => {
        colorMap[element] = colors[index % colors.length]; // Cycle through colors
    });
    return colorMap;
};

export default function XpsPlot(
    { excitationEnergy, selectedElements }: XpsPlotProps,
) {
    const colorMap = createColorMap(selectedElements);
    const data: Data[] = elementLibrary
        .filter((it) => selectedElements.includes(it.element))
        .map((it) => {
            const energy = it.energyType == "BE"
                ? excitationEnergy - it.energy
                : it.energy;
            return {
                x: [energy],
                y: [1],
                name: `${it.element} ${it.type}`,
                hovertext: `${it.energy} eV, ${it.element} ${it.type}`,
                hoverinfo: "text",
                text: `${it.element} ${it.type} = ${it.energy} eV`,
                type: "bar", // Bar chart type
                width: 3,
                marker: { color: colorMap[it.element], opacity: 0.5 },
            };
        });

    const layout: Partial<Layout> = {
        autosize: true,
        margin: {
            l: 30,
            r: 30,
            t: 30,
            b: 70,
        },
        xaxis: {
            range: [0, excitationEnergy + 100],
            title: {
                text: "E<sub>kin</sub> [eV]",
                font: {
                    size: 18,
                },
                standoff: 12,
            },
            showline: true,
            ticks: "outside",
            mirror: true,
            linewidth: 2,
            tickwidth: 2,
            griddash: "dot",
            linecolor: "black",
            tickcolor: "black",
            tickfont: {
                size: 14,
            },
        },
        yaxis: {
            range: [0, 1],
            showline: true,
            showticklabels: false,
            ticks: "",
            mirror: true,
            linewidth: 2,
            tickwidth: 2,
            griddash: "dot",
            linecolor: "black",
            zeroline: false,
        },
    };

    const config: Partial<Config> = {
        displaylogo: false,
        responsive: true,
    };

    return (
        <div>
            <Plot
                style={{
                    width: "50vw",
                    height: "50vh",
                    position: "relative",
                    display: "inline-block",
                }}
                data={data}
                layout={layout}
                config={config}
            />
        </div>
    );
}
