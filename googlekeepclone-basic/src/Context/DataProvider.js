import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState(() => {
        const storedNotes = localStorage.getItem("notes");
        return storedNotes ? JSON.parse(storedNotes) : [];
    });
    

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
                    
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataProvider;