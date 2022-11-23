import React, { ReactElement, FC } from "react";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    dropDownSelector: string;
    
}

const AccordionMenu: FC<Props> = ({ dropDownSelector }): ReactElement => {
    return (
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>{dropDownSelector}</Typography>
                </AccordionSummary>
            </Accordion>
        </Box>
    )
}

export default AccordionMenu;