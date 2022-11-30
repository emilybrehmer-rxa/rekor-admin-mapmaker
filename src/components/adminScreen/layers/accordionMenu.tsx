import React, { ReactElement, FC, useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import MuiAccordion,  { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const darkGrey = '#808080'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    margin: '6px',
    border: `1.5px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: '3px',
    },
    '&:before': {
      display: 'none',
    },
  }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    paddingBottom: "3px",
    backgroundColor:
      theme.palette.type === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const Typography = styled((props: TypographyProps) => (
    <MuiTypography {...props} />
  ))(({ theme }) => ({
    '& .MuiTypography-body1': {
      fontFamily: "Option Sans Light",
      color: theme.palette.common.black,
      fontSize: '10px'
    }
  }));

  interface Props {
    dropDownSelector: string;
    }

const AccordionMenu: FC<Props> = ({ dropDownSelector }): ReactElement => {
  const [isShown, setIsShown] = useState(false);  
  return (
        <Box>
            <Accordion >
                <AccordionSummary                    
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onMouseEnter={ () => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    >
                      {isShown && (
                        <DragIndicatorIcon sx={{ color: darkGrey }}/>
                      )}                      
                      <VisibilityIcon sx={{ color: darkGrey, marginRight: "6px" }}/>
                      <Typography>{dropDownSelector}</Typography>                        
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Dataset Details - To come </Typography>  
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AccordionMenu;