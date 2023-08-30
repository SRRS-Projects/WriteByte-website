import { useMemo } from "react";

const useFilterNotes = (notesList, query) => {
    const FilterNotes = useMemo(() => {
        return notesList.filter(note => note.title.toLowerCase().includes(query.toLowerCase()))
    }, [notesList, query])

    return FilterNotes;
}


export default useFilterNotes;