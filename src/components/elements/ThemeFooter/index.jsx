import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  GET_ALL_THEMES,
  SET_DEFAULT_THEME,
} from '../../../constants/apiEndpoints';
import { makeRequest } from '../../../utils/makeRequest';

import './ThemeFooter.css';

export default function ThemeFooter({ themeColor, setThemeColor }) {
  const [themes, setThemes] = useState(undefined);
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => {
    makeRequest(GET_ALL_THEMES)
      .then((themes) => {
        const allThemes = themes.themes;
        const preferredThemeId = themes.preferredThemeId;

        const preferredThemeColor = allThemes.filter(
          (theme) => theme.id === preferredThemeId
        )[0].colorHexCode;

        setThemeColor(preferredThemeColor);
        setThemes(themes.themes);
      })
      .catch(() => {
        setThemes(null);
      });
  }, []);

  function saveAsPreferredTheme() {
    makeRequest(SET_DEFAULT_THEME, {
      data: {
        preferredThemeId: themes.filter(
          (theme) => theme.colorHexCode === themeColor
        )[0].id,
      },
    })
      .then(() => {
        setShowSaveButton(false);
      })
      .catch(() => {});
  }

  if (themes === undefined) return 'Loading...';

  if (themes === null) {
    return (
      <footer className='body-padding'>
        Some Error Occured in fetching Themes
      </footer>
    );
  }
  return (
    <footer className='body-padding'>
      <div className='themes-container'>
        THEMES
        {themes.map((theme) => (
          <div
            onClick={() => {
              setShowSaveButton(true);
              if (themeColor !== theme.colorHexCode)
                setThemeColor(theme.colorHexCode);
            }}
            key={theme.id}
            style={{
              width: '2rem',
              height: '2rem',
              backgroundColor: theme.colorHexCode,
              border: '1px solid white',
            }}
          />
        ))}
      </div>

      {showSaveButton && (
        <button className='purple-button' onClick={saveAsPreferredTheme}>
          SAVE THEME
        </button>
      )}
    </footer>
  );
}

ThemeFooter.propTypes = {
  themeColor: PropTypes.string,
  setThemeColor: PropTypes.func,
};
