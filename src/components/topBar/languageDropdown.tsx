import React from 'react';
import i18n from '../../i18nextConf';
import BarItem from '../barItem';
import '../../App.css';

interface LanguageDropdownProps {
  onClickAnyItem: () => void;
}

function LanguageDropdownMenu(Props: LanguageDropdownProps) {
  function SelectEnglish(){ i18n.changeLanguage('en'); Props.onClickAnyItem(); }
  function SelectGerman(){ i18n.changeLanguage('de'); Props.onClickAnyItem(); }
  function SelectFrench(){ i18n.changeLanguage('fr'); Props.onClickAnyItem(); }
  function SelectSpanish(){ i18n.changeLanguage('es'); Props.onClickAnyItem(); }
  function SelectPortuguese(){ i18n.changeLanguage('po'); Props.onClickAnyItem(); }
  function SelectItalian(){ i18n.changeLanguage('it'); Props.onClickAnyItem(); }
  function SelectRussian(){ i18n.changeLanguage('ru'); Props.onClickAnyItem(); }
  function SelectTagalog(){ i18n.changeLanguage('tl'); Props.onClickAnyItem(); }
  function SelectBahasa(){ i18n.changeLanguage('id'); Props.onClickAnyItem(); }
  function SelectArabic(){ i18n.changeLanguage('ar'); Props.onClickAnyItem(); }
  function SelectThai(){ i18n.changeLanguage('th'); Props.onClickAnyItem(); }
  function SelectKorean(){ i18n.changeLanguage('ko'); Props.onClickAnyItem(); }
  function SelectJapanese(){ i18n.changeLanguage('ja'); Props.onClickAnyItem(); }
  function SelectMandarin(){ i18n.changeLanguage('zh-guoyu'); Props.onClickAnyItem(); }
  function SelectCantonese(){ i18n.changeLanguage('zh-yue'); Props.onClickAnyItem(); }

  return (
    <div className='dropdown-menu passero'>
      <BarItem mouseUpHandler={SelectEnglish}>English</BarItem>
      <BarItem mouseUpHandler={SelectGerman}>Deutsch (German)</BarItem>
      <BarItem mouseUpHandler={SelectFrench}>Française (French)</BarItem>
      <BarItem mouseUpHandler={SelectSpanish}>Español (Spanish)</BarItem>
      <BarItem mouseUpHandler={SelectPortuguese}>Português (Portuguese)</BarItem>
      <BarItem mouseUpHandler={SelectItalian}>Italiano (Italian)</BarItem>
      <BarItem mouseUpHandler={SelectRussian}>русский язык (Russian)</BarItem>
      <BarItem mouseUpHandler={SelectTagalog}>Tagalog (Filipino)</BarItem>
      <BarItem mouseUpHandler={SelectBahasa}>Bahasa (Indonesian)</BarItem>
      <BarItem mouseUpHandler={SelectArabic}>اَلْعَرَبِيَّةُ (Arabic)</BarItem>
      <BarItem mouseUpHandler={SelectThai}>ภาษาไทย (Thai)</BarItem>
      <BarItem mouseUpHandler={SelectKorean}>한국어 (Korean)</BarItem>
      <BarItem mouseUpHandler={SelectJapanese}>日本語 (Japanese)</BarItem>
      <BarItem mouseUpHandler={SelectMandarin}>官话 (Mandarin)</BarItem>
      <BarItem mouseUpHandler={SelectCantonese}>廣東話 (Cantonese)</BarItem>
    </div>
  );
};

export default LanguageDropdownMenu;