import { setLang } from '@/assets/locales/i18n';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useMemo } from 'react';
import { useTranslation } from "react-i18next";

const defaultLanguage = 'en';

const LanguageSelector = ({ isMobile }) => {
    const { i18n } = useTranslation("common");
    const { language: currentLanguage, options } = i18n;
    const locales = options?.languages ?? [currentLanguage];


    function languageChengeHandler(event) {
        i18n.changeLanguage(event.target.value.toLowerCase());
        setLang(event.target.value.toLowerCase());
    }

    const languageNames = useMemo(() => {
        return new Intl.DisplayNames([currentLanguage ?? defaultLanguage], {
            type: 'language',
        });
    }, [currentLanguage]);

    return (
        <>
            <FormControl className={isMobile ? "mx-auto" : ""} style={isMobile ? { display: 'table' } : {}}>
                <Select
                    labelId="language-selector"
                    id="language-selector"
                    value={currentLanguage}
                    onChange={languageChengeHandler}
                    autoWidth
                    inputprops={{ MenuProps: { disableScrollLock: true } }}
                    size="small"
                >
                    {
                        locales.map((locale) => {
                            const label = capitalize(languageNames.of(locale) ?? locale);
                            const flag = locale.toUpperCase() === 'IT' ? "/images/flags/IT.svg" : "/images/flags/US.svg";

                            return <MenuItem key={locale} value={locale} style={{ marginBottom: '0.5rem' }}><span style={{ display: 'flex' }}><img alt={locale.toUpperCase()} src={flag} style={{ maxWidth: '25px', marginRight: '0.5rem', float: 'left' }} />{label}</span></MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </>
    );
}

function capitalize(lang) {
    return lang.slice(0, 1).toUpperCase() + lang.slice(1);
}

export default LanguageSelector;