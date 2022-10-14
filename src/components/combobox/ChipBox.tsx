import React from 'react'
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TlTitleTextField from '../textfield/TitleTextField';
import { TlTitle } from '../titles/Titles';
import { ConstantsTypography } from '../Constants';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function TlChipBox(props:any){
    const data = props.data
    const theme = useTheme();
    const [dataValue, setDataValue] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof dataValue>) => {
        const {
            target: { value },
        } = event;
        setDataValue(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    return(
        <FormControl sx={{ flewGrow:1, width: '100%'}}>

            <TlTitle text="Combo chip" styles={ConstantsTypography.Subtitle2}></TlTitle>

            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={dataValue}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                    <Chip key={value} label={value} />
                    ))}
                </Box>
                )}
                MenuProps={MenuProps}
            >
                {data.map((node:any) => (
                    <MenuItem
                        key={node}
                        value={node.name}
                        style={getStyles(node, dataValue, theme)}
                    >
                {node.name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>                    
    )
}