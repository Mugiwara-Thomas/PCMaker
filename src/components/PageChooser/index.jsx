import { useState } from 'react';
import { PageChooser, PageButton } from "./style";

const pages = ['1', '2', '3', '4', '5'];

function PageChooserBar () {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <>
            <PageChooser>
                {pages.map((page, index) => (
                <PageButton key={index} active={index === currentPage} onClick={() => setCurrentPage(index)} >
                    {page}
                </PageButton>
                ))}
            </PageChooser>
        </>
    );
}

export default PageChooserBar;