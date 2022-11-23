import React, { ReactElement, FC } from "react";
import { AppBar, Box, Toolbar, Icon, Typography, Avatar } from '@mui/material';

import AccordionMenu from "./accordionMenu";


const Layers: FC<any> = ({  }): ReactElement => {
    return (
        <Box>
            <AccordionMenu dropDownSelector="Incidents"/>
        </Box>
    )
}

export default Layers;