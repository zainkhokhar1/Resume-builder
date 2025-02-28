
import { configureStore } from '@reduxjs/toolkit';
import TemplateSlice from './TemplateSlice.js';

export const store = configureStore({
    reducer: {
        template: TemplateSlice
    }
});

