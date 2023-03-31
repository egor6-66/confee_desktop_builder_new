import React from 'react';

import { SwitchThemesView } from 'entities/application';
import { useTheme } from 'shared/hooks';

function SwitchThemes() {
    const [theme, setTheme] = useTheme();

    return <SwitchThemesView theme={theme} onChange={setTheme} />;
}

export default SwitchThemes;
