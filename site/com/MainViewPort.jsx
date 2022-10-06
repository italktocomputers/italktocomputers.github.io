import React from 'react';
import MillennialsAGenerationThatIsFightingBackAndWinning from '../articles/MillennialsAGenerationThatIsFightingBackAndWinning';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function MainViewPort() {
    return (
        <div>
            <SiteHeader />
            <MillennialsAGenerationThatIsFightingBackAndWinning />
            <SiteFooter />
        </div>
    );
}
