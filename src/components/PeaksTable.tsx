import elementLibrary from "../../library.json";

type PeaksTableProps = {
    selectedElements: string[];
    xRayEnergy: number | "";
};

function startsWithLetter(str: string): boolean {
    return /^[A-Za-z]/.test(str);
}

export default function PeaksTable(
    { selectedElements, xRayEnergy: xRayEnergy }: PeaksTableProps,
) {
    if (typeof xRayEnergy === "string") {
        return;
    }

    const data = elementLibrary.filter((it) =>
        selectedElements.includes(it.element)
    )
        .map((it) => {
            const type = startsWithLetter(it.type)
                ? it.type.toUpperCase()
                : it.type;
            const bindingEnergy = it.energyType === "KE"
                ? xRayEnergy - it.energy
                : it.energy;
            const kineticEnergy = it.energyType === "BE"
                ? xRayEnergy - it.energy
                : it.energy;

            return (
                <tr key={`${it.element}${it.type}`}>
                    <td>{it.element}</td>
                    <td>{type}</td>
                    <td>{bindingEnergy} eV</td>
                    <td>{kineticEnergy} eV</td>
                </tr>
            );
        });

    const showTable = selectedElements.filter((s) => s !== "").length > 0;

    return (
        <div>
            {showTable &&
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Element</th>
                                <th>Peak Type</th>
                                <th>Binding Energy</th>
                                <th>Kinetic Energy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                )}
        </div>
    );
    // );
}
