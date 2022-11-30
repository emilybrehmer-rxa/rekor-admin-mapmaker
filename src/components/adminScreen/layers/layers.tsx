import React, { ReactElement, FC } from "react";
import { AppBar, Box, Toolbar, Icon, Typography, Avatar } from '@mui/material';

import AccordionMenu from "./accordionMenu";


const Layers: FC<any> = ({  }): ReactElement => {
    return (
        <Box>
            <AccordionMenu dropDownSelector="Incidents"/>
            <AccordionMenu dropDownSelector="Congestion"/>
            <AccordionMenu dropDownSelector="Traffic Lights"/>
            <AccordionMenu dropDownSelector="Other Example"/>
        </Box>
    )
}

export default Layers;