import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../contexts/ThemeContext';

import ResetStyle from '../style/global/reset';
import FontStyles from '../style/global/fonts';
import GlobalStyle from '../style/global/global';
import { light, dark } from '../style/themes';

const ThemeProvider = ({ children, chosenTheme }) => {
    const [theme, setTheme] = useState('light');

    const values = {
        theme,
        setTheme,
    };

    const themeObject = useMemo(() => {
        switch (chosenTheme || theme) {
        case 'dark': {
            return dark;
        }
        default: {
            return light;
        }
        }
    }, [chosenTheme, theme]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {
                if (e.matches) {
                    setTheme('dark');
                }
            });
        window
            .matchMedia('(prefers-color-scheme: light)')
            .addEventListener('change', (e) => {
                if (e.matches) {
                    setTheme('light');
                }
            });
    }, []);

    return (
        <ThemeContext.Provider value={values} theme={themeObject}>
            <ResetStyle />
            <FontStyles />
            <GlobalStyle />
            <div className={`theme theme--${chosenTheme || theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    chosenTheme: PropTypes.string,
};

ThemeProvider.defaultProps = {
    chosenTheme: null,
};

export default ThemeProvider;
