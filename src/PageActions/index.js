import { useState } from "react";
import "./PageActions.css";

/**
 * This component is used to create the header(which contains file name) and Main Menu
 *
 */

export default function PageActions() {
  const [isFocused, setIsFocused] = useState(false);
  const [spreadsheetTitle, setSpreadsheetTitle] = useState('Untitled Spreadsheet');

  const handleTitleChange = (newTitle) => {
    setSpreadsheetTitle(newTitle);
    document.title = `${newTitle} - Google Sheets`;
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
    <div class="full-width-container">
      <header className="header">
        <input
          type="text"
          value={spreadsheetTitle}
          onChange={(e) => handleTitleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`header-title ${isFocused ? 'focused' : ''}`}
        />
      </header>
    </div>
    <div className="page-actions-container">
      <div className="page-actions">Home</div>
      <div className="page-actions page-actions-active">File</div>
      <div className="page-actions">Insert</div>
      <div className="page-actions">Layout</div>
      <div className="page-actions">Help</div>
    </div>
    </>
  );
}