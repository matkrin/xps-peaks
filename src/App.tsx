import "./App.css";
import { useState } from "react";
import ElementSelect from "./components/ElementSelect";
import EnergyInput from "./components/EnergyInput";
import XpsPlot from "./components/XpsPlot";
import PeaksTable from "./components/PeaksTable";

function App() {
    const [selectedElements, setSelectedElements] = useState<string[]>([""]);
    const [excitationEnergy, setExcitationEnergy] = useState<number | "">(1486);

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <EnergyInput
                        excitationEnergy={excitationEnergy}
                        setExcitationEnergy={setExcitationEnergy}
                    />
                    <ElementSelect
                        selectedElements={selectedElements}
                        setSelectedElements={setSelectedElements}
                    />
                </div>
                <XpsPlot
                    selectedElements={selectedElements}
                    excitationEnergy={excitationEnergy || 1}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PeaksTable
                    selectedElements={selectedElements}
                    excitationEnergy={excitationEnergy}
                />
            </div>
        </>
    );
}

export default App;
