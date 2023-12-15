import React, { useState, useCallback,useEffect } from "react";
import "../../css/style.css";

import useTopbarContext from "../ContextElements/TopBarContext.jsx";

const Topbar = () => {

  const {
      pagesState,
      setPages,
      selectedPage,
      setSelectedPage,
      newPageName,
      setCurrentPage,
      pagesData,
      setCurrentPageData
    } = useTopbarContext();

  const initialPage = "Page1";

  const [pageContents] = useState({
    [pagesState[0]]: null
  });

  const [isEditing, setIsEditing] = useState(false);

  const onRemovePage = (pageToRemove) => {
    setPages((prevPages) => prevPages.filter((page) => page !== pageToRemove));
    setCurrentPage(initialPage);
    setSelectedPage(initialPage);
  };
  
  useEffect(() => {
    if(pagesData[selectedPage] != null) setCurrentPageData(pagesData[selectedPage]);
  }, [pagesData, selectedPage]);

  useEffect(() => {
    if(pagesData[selectedPage] != null) setCurrentPageData(pagesData[selectedPage]);
  }, [pagesData, selectedPage]);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Callback function for handling blur event in the input field
  const handleBlur = useCallback(() => {
    if (newPageName !== selectedPage && !pagesState.includes(newPageName)) {
      const updatedPages = [...pagesState];
      const pageIndex = updatedPages.indexOf(selectedPage);
      updatedPages[pageIndex] = newPageName;

      setIsEditing(false);
    } else {
      setIsEditing(false);
    }
  }, [newPageName, selectedPage, pagesState]);

  // Handler for changing the selected page
  const handlePageChange = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  // Handler for adding a new page
  const handleAddPage = () => {
    const existingPageNumbers = pagesState.map((page) => parseInt(page.replace("Page", ""), 10));

    let newPageIndex = 1;
    while (existingPageNumbers.includes(newPageIndex)) {
      newPageIndex++;
    }

    const newPage = `Page${newPageIndex}`;

    // Update the state to include the new page
    setPages((prevPages) => [...prevPages, newPage]);

    // Set the current and selected page to the new page
    setSelectedPage(newPage);
  };





  // Handler for removing a page
  const handleRemovePage = (page) => {
    if (pagesState.length > 1) {
      const pageIndex = pagesState.indexOf(page);

      if (pageIndex >= 0) {
        onRemovePage(page);

        const updatedPages = [...pagesState.slice(0, pageIndex), ...pagesState.slice(pageIndex + 1)];
        const updatedContents = { ...pageContents };
        delete updatedContents[page];

        let newSelectedPage;
        // Check if the currently selected page is deleted
        if (selectedPage === page) {
          // Select the page to the left
          newSelectedPage = pageIndex === 0 ? pagesState[1] : pagesState[pageIndex - 1];
        } else {
          newSelectedPage = selectedPage; // Keep the currently selected page unchanged
        }

        setSelectedPage(newSelectedPage);
        onPageChange(newSelectedPage);

        setPages(updatedPages);
      }
    } else {
      console.log("Cannot delete the only page.");
    }
  };

  // Handler for double-clicking on a page to enable editing
  const handleDoubleClick = (page) => {
    setIsEditing(true);
  };

  // Handler for handling Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };
  // Component Rendering
  return (
    <div id="topbar" className="topbar">
      <div className="pageList">
        {pagesState.map((page) => (
          <div key={page} className="pageContainer">
            {isEditing && selectedPage === page ? (
              <input
                type="text"
                value={newPageName}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                autoFocus
                onFocus={(e) => e.target.select()}
              />
            ) : (
              <button
                id="pageButton"
                className={`pageButton ${selectedPage === page ? "selected" : ""}`}
                onDoubleClick={() => handleDoubleClick(page)}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )}
            <button
              id="deleteButton"
              className="deleteButton"
              onClick={() => handleRemovePage(page)}
              disabled={pagesState.length === 1}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="addPage" onClick={handleAddPage}>
        <h1>+</h1>
      </div>
    </div>
  );
};

export default Topbar;

