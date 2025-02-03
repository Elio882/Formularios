import { RadioGroup, FormControlLabel, Radio } from "@mui/material"
import {  Controller } from "react-hook-form"
import type { IProps } from "./types/IProps"

export const FormRadioGroup = ({ name, control, options, ...props }: IProps) => (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup {...field} {...props} row value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)}>
          {options.map((option) => (
            <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
          ))}
        </RadioGroup>
      )}
    />
  )
