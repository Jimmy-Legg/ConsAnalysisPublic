import useTopbarContext from "../../ContextElements/TopBarContext.jsx";
import useDropdownContext from "../../ContextElements/DropdownContext.jsx";

const ConfirmationButton = () => {

    const { selectedPage,
        setSelectedPage,
        setNewPageName,
        pagesState,
        setPages,
        setConfirmedPages,
        pagesData,
        setPagesData
    } = useTopbarContext();

    const generateRandomData = () => {
        const newPageData = {
            request1: {

            },
            request2: {
                wasteAmountValue: Math.floor(Math.random() * 999),
                recyclingPercentageValue: Math.floor(Math.random() * 9999) * 0.01,
                wasteMassRange: Math.floor(Math.random() * 99999) * 0.001,
                wasteMassAverage: Math.floor(Math.random() * 99999) * 0.001,
                wasteMassMedian: Math.floor(Math.random() * 99999) * 0.001,
            },
            request3: {
                mmAmount: Math.floor(Math.random() * 999),
                mmPercentage: Math.floor(Math.random() * 9999) * 0.01,
                mmMassRange: Math.floor(Math.random() * 99999) * 0.001,
                mmMassAverage: Math.floor(Math.random() * 99999) * 0.001,
                mmMassMedian: Math.floor(Math.random() * 99999) * 0.001,
            },
            request4: {
                openCloseTimeRange: Math.floor(Math.random() * 9999) * 0.01,
                openCloseTimeAverage: Math.floor(Math.random() * 9999) * 0.01,
                openCloseTimeMedian: Math.floor(Math.random() * 9999) * 0.01,
                coolDownTimeRange: Math.floor(Math.random() * 9999) * 0.01,
                coolDownTimeAverage: Math.floor(Math.random() * 9999) * 0.01,
                coolDownTimeMedian: Math.floor(Math.random() * 9999) * 0.01,
                cycleTimeRange: Math.floor(Math.random() * 9999) * 0.01,
                cycleTimeAverage: Math.floor(Math.random() * 9999) * 0.01,
                cycleTimeMedian: Math.floor(Math.random() * 9999) * 0.01,
            },
        };
        return newPageData;
    };

    const { site, cda, gm } = useDropdownContext();

    const handle = () => {

        const newName = `${site}_${cda}_${gm}`;

        if (newName !== selectedPage) {
            const existingPageIndex = pagesState.indexOf(newName);

            if (existingPageIndex !== -1) {
                // If the page already exists, switch to that page
                setSelectedPage(pagesState[existingPageIndex]);
                setConfirmedPages((prevConfirmedPages) => [...prevConfirmedPages, pagesState[existingPageIndex]]);
            } else {
                // If the page doesn't exist, update the current page and pagesState
                setPages((prevPages) => {
                    const updatedPages = [...prevPages];
                    const pageIndex = updatedPages.indexOf(selectedPage);
                    updatedPages[pageIndex] = newName;
                    return updatedPages;
                });

                setSelectedPage(newName);
                setNewPageName("");
                setConfirmedPages((prevConfirmedPages) => [...prevConfirmedPages, newName]);
                if (!pagesData[newName]) {
                    setPagesData((prevState) => ({
                        ...prevState,
                        [newName]: generateRandomData(),
                    }));
                }
            }
        } else {
            // If newName is the same as the selectedPage, update newPageName
            setNewPageName(selectedPage);
        }
    }

    return (
        <div className="confirmationButton" onClick={handle}>
            <h2 className="title">Confirmer</h2>
        </div>
    );
};

export default ConfirmationButton;

