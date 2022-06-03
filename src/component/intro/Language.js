import React from 'react';
import { useTranslation} from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' }
};

const Language = () => {
    const { i18n } = useTranslation();

    return (
        <div className='language'>
        {Object.keys(lngs).map((lng) => (
          <button className='languageBox' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    );
};

export default Language;