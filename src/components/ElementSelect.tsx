import "../App.css";
import library from "../../library.json";
import React from "react";

type ElementSelectProps = {
    selectedElements: string[];
    setSelectedElements: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function ElementSelect(
    { selectedElements, setSelectedElements }: ElementSelectProps,
) {
    const elementSet = new Set(library.map((e) => e.element));
    const chemicalElements = Array.from(elementSet).sort();

    // Handler to update selected value for a specific index
    const handleSelectChange = (index: number, value: string) => {
        const newSelectedElements = [...selectedElements];
        newSelectedElements[index] = value;
        setSelectedElements(newSelectedElements);
    };

    // Handler to add a new select input
    const addNewSelect = () => {
        setSelectedElements([...selectedElements, ""]);
    };

    // Handler to remove a specific select input
    const removeSelect = (index: number) => {
        const newSelectedElements = selectedElements.filter((_, i) =>
            i !== index
        );
        setSelectedElements(newSelectedElements);
    };

    // Filter options to exclude already selected elements
    const getAvailableOptions = (currentValue: string) => {
        return chemicalElements.filter(
            (element) =>
                !selectedElements.includes(element) || element === currentValue,
        );
    };

    return (
        <div style={{ width: "200px", margin: "0 auto" }}>
            {/* Grid layout container */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                {selectedElements.map((selectedElement, index) => (
                    <React.Fragment key={index}>
                        <select
                            value={selectedElement}
                            onChange={(e) =>
                                handleSelectChange(index, e.target.value)}
                            style={{ width: "100%" }}
                        >
                            <option value="" disabled>
                                Select an element
                            </option>
                            {getAvailableOptions(selectedElement).map((
                                element,
                            ) => (
                                <option key={element} value={element}>
                                    {element}
                                </option>
                            ))}
                        </select>
                        {/* Remove button */}
                        <button
                            className="x-btn"
                            onClick={() => removeSelect(index)}
                        >
                            ×
                        </button>
                    </React.Fragment>
                ))}
            </div>

            {/* Button to add a new select input, neatly aligned below */}
            <button className="add-btn" onClick={addNewSelect}>
                + Add Element
            </button>
        </div>
    );
}
