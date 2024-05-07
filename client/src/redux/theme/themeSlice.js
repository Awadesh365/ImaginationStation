import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode: true, // Assuming dark mode is initially set to true
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        /**
         * Toggles the theme between 'light' and 'dark'.
         *
         * @param {Object} state - The current state object.
         * @returns {void}
         */
        toggleTheme: (state) => {
            // Toggle the theme between 'light' and 'dark'.
            state.theme = state.theme === 'light' ? 'dark' : 'light';

            // Toggle the isDarkMode flag between true and false, indicating the current theme.
            state.isDarkMode = !state.isDarkMode;
        },
    }
});



// Export the toggleTheme action creator, this will be used in the Home component.
export const { toggleTheme } = themeSlice.actions;

// Export the themeSlice reducer, this will be used in the store.
export default themeSlice.reducer; 
