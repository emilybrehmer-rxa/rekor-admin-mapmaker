import React, { ReactElement, FC, useState } from "react";
import { styled } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import MuiAccordion,  { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const darkGrey = '#808080'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    margin: '6px',
    border: '1px solid',
    borderColor: `${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 3,
    },
    '&:before': {
      display: 'none',
    },
    background: theme.palette.background.default,
    '&:hover': {
      background: "#f2f7f9"
    },
    '&.Mui-expanded': {
      borderColor: "#99ccee",
      boxShadow: "0px 0px 0px 4px rgb(0 0 0 / 2%)",
      background: theme.palette.background.paper,
      marginTop: "0px",
      marginBottom: "6px"
    }
  }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    paddingBottom: "3px",
    backgroundColor:
      theme.palette.type === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({    
    padding: theme.spacing(2),
    borderTop: '1px solid',
    borderColor: `${theme.palette.divider}`,
  }));

  const Typography = styled((props: TypographyProps) => (
    <MuiTypography {...props} />
  ))(({ theme }) => ({
    '& .MuiTypography-body1': {
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
            <Accordion>
                <AccordionSummary                               
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