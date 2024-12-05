export type SelectionDTO = {
    startDate: string;
    endDate: string;
    isTestChecked: boolean;
    selectedCity: string;
  };
  
  // Define a key for localStorage
  const STORAGE_KEY = 'weatherAppSelections';
  
  // Initial state
  const defaultSelections: SelectionDTO = {
    startDate: '',
    endDate: '',
    isTestChecked: false,
    selectedCity: '',
  };
  
  // Get stored selections from localStorage, or use default if none exist
  const loadSelections = (): SelectionDTO => {
    const storedSelections = localStorage.getItem(STORAGE_KEY);
    if (storedSelections) {
      return JSON.parse(storedSelections);
    }
    return defaultSelections;
  };
  
  // Store selections in localStorage
  const saveSelections = (selections: SelectionDTO): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
  };
  
  // Initial load from localStorage
  let currentSelections: SelectionDTO = loadSelections();
  
  // Getter to retrieve selections
  export const getSelections = (): SelectionDTO => {
    return { ...currentSelections };
  };
  
  // Setter to update selections and save to localStorage
  export const updateSelections = (updatedValues: Partial<SelectionDTO>): void => {
    currentSelections = { ...currentSelections, ...updatedValues };
    saveSelections(currentSelections);
  };
  