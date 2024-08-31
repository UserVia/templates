import {
    Checkbox,
    FormControlLabel
    
  } from '@mui/material';

export const CheckBox = ({nombre}) => {

  return (
    <>
        <FormControlLabel sx={{
            marginLeft:20
        }}
            control={
                <Checkbox/>
            } 
        label={nombre} 
        />
        
    </>
  )

}

