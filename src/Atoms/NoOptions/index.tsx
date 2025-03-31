"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
import { components } from 'react-select';

export const NoOptionsMessage = (props) => {
  const { language } = useLanguageStore()
  const { fontFamily } = useInvalidWidgetStore()
  return (
    <components.NoOptionsMessage {...props}>
      <span className={`
${fontFamily ? " font-kharkiv" : " font-montserrat"}
`} style={{ color: "#A0A0A0" }}>
        {language == "ua" ? "Варіанти відсутні" : " Options are unavailable"}</span>
    </components.NoOptionsMessage>
  );
};
