import React from 'react';
import { RecommendationsTop } from './RecommendationsTop';
import { useScrollToTop } from '../../Hooks/useScrollToTop';

export const Recommendations = () => {
    useScrollToTop()
    return (
        <>
            <RecommendationsTop />
        </>
    );
}
