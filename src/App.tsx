import "./App.css";
import { useState } from "react";
import ElementSelect from "./components/ElementSelect";
import EnergyInput from "./components/EnergyInput";
import XpsPlot from "./components/XpsPlot";

function App() {

    const [selectedElements, setSelectedElements] = useState<string[]>(['']);
    const [excitationEnergy, setExcitationEnergy] = useState<number | ''>('');

    return (
        <>
            <XpsPlot selectedElements={selectedElements} excitationEnergy={excitationEnergy || 1}/>
            <EnergyInput excitationEnergy={excitationEnergy} setExcitationEnergy={setExcitationEnergy} />
            <ElementSelect
                selectedElements={selectedElements}
                setSelectedElements={setSelectedElements}
            />

            <p style={{ marginTop: '20px' }}>
                Selected Elements: {selectedElements.filter((e) => e !== '').join(', ') || 'None'}
            </p>
        </>
    )
};

export default App;
