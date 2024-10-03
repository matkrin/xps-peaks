type EnergyInputProps = {
    xRayEnergy: number | "";
    setXRayEnergy: React.Dispatch<React.SetStateAction<number | "">>;
};

export default function EnergyInput(
    { xRayEnergy: xRayEnergy, setXRayEnergy: setXRayEnergy }: EnergyInputProps,
) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = e.target.value === "" ? "" : Number(e.target.value);
        if (numValue === "" || (numValue > 0 && numValue <= 3000)) {
            setXRayEnergy(numValue);
        }
    };

    return (
        <div style={{ padding: "10px" }}>
            <label style={{ paddingRight: "5px" }}>X-Ray Energy</label>
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
