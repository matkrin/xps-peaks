type EnergyInputProps = {
    xRayEnergy: number | "";
    setXRayEnergy: React.Dispatch<React.SetStateAction<number | "">>;
};

export default function EnergyInput(
    { xRayEnergy: xRayEnergy, setXRayEnergy: setXRayEnergy }: EnergyInputProps,
) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = e.target.value === "" ? "" : Number(e.target.value);
        if (numValue === "" || (numValue > 0 && numValue <= 6000)) {
            setXRayEnergy(numValue);
        }
    };

    return (
        <div style={{ padding: 10 }}>
            <label style={{ paddingRight: "5px" }}>X-Ray Energy [eV]</label>
            <input
                type="number"
                value={xRayEnergy}
                onChange={handleChange}
                min="100"
                max="6000"
                placeholder="Enter a number"
            />
        </div>
    );
}
