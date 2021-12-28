import React from 'react';
import i18n from '../../i18nextConf';
import BarItem from '../items/barItem';
import '../../App.css';

interface LanguageDropdownProps {
  onBlur: () => void;
  onClickAnyItem: () => void;
}

const LanguageDropdownMenu = (Props: LanguageDropdownProps) => {
  const { onBlur, onClickAnyItem } = Props;

  function SelectEnglish() { i18n.changeLanguage('en'); onClickAnyItem(); }
  function SelectGerman() { i18n.changeLanguage('de'); onClickAnyItem(); }
  function SelectFrench() { i18n.changeLanguage('fr'); onClickAnyItem(); }
  function SelectSpanish() { i18n.changeLanguage('es'); onClickAnyItem(); }
  function SelectPortuguese() { i18n.changeLanguage('po'); onClickAnyItem(); }
  function SelectItalian() { i18n.changeLanguage('it'); onClickAnyItem(); }
  function SelectRussian() { i18n.changeLanguage('ru'); onClickAnyItem(); }
  function SelectTagalog() { i18n.changeLanguage('tl'); onClickAnyItem(); }
  function SelectBahasa() { i18n.changeLanguage('id'); onClickAnyItem(); }
  function SelectArabic() { i18n.changeLanguage('ar'); onClickAnyItem(); }
  function SelectThai() { i18n.changeLanguage('th'); onClickAnyItem(); }
  function SelectKorean() { i18n.changeLanguage('ko'); onClickAnyItem(); }
  function SelectJapanese() { i18n.changeLanguage('ja'); onClickAnyItem(); }
  function SelectMandarin() { i18n.changeLanguage('zh-guoyu'); onClickAnyItem(); }
  function SelectCantonese() { i18n.changeLanguage('zh-yue'); onClickAnyItem(); }

  return (
    <div className='dropdown-menu passero'>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectEnglish}>English</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectGerman}>Deutsch (German)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectFrench}>Française (French)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectSpanish}>Español (Spanish)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectPortuguese}>Português (Portuguese)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectItalian}>Italiano (Italian)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectRussian}>русский язык (Russian)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectTagalog}>Tagalog (Filipino)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectBahasa}>Bahasa (Indonesian)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectArabic}>اَلْعَرَبِيَّةُ (Arabic)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectThai}>ภาษาไทย (Thai)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectKorean}>한국어 (Korean)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectJapanese}>日本語 (Japanese)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectMandarin}>官话 (Mandarin)</BarItem>
      <BarItem onBlur={onBlur} mouseUpHandler={SelectCantonese}>廣東話 (Cantonese)</BarItem>
    </div>
  );
};

export default LanguageDropdownMenu;
