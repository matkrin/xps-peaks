
type EnergyInputProps = {
    excitationEnergy: number | "";
    setExcitationEnergy: React.Dispatch<React.SetStateAction<number | "">>
}

export default function EnergyInput({ excitationEnergy, setExcitationEnergy }: EnergyInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numValue = e.target.value === '' ? '' : Number(e.target.value);
        if (numValue === '' || (numValue > 0 && numValue <= 3000)) {
            setExcitationEnergy(numValue);
        }
    };

    return (
        <div style={{ padding: "10px" }}>
            <label>Excitation Energy</label>
            <input
                type="number"
                value={excitationEnergy}
                onChange={handleChange}
                min="100"
                max="3000"
                placeholder="Enter a number"
            />
        </div>
    );
};
