import { FormControl, TextField } from '@mui/material'

const InputField = ({id, fn,value}) => {
  return (
    <FormControl fullWidth sx={{
      fontFamily: "'Jersey 15', sans-serif",
    }}>
        <TextField
          required
                  id={id}
                  label={id}
                  type={id === 'Name'? 'text': 'number'}
                  
                  value={value}
                  onChange={(e) => fn(e.target.value)}
                  variant="outlined"
                  className="bg-form-textfield rounded-lg !font-jersey"
                  sx={{
                    fontFamily: "'Jersey 15', sans-serif",
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'var(--form-textfield-border)' },
                      '&:hover fieldset': { borderColor: 'var(--form-textfield-border-hover)' },
                      '&.Mui-focused fieldset': { borderColor: 'var(--form-textfield-border-focus)' },
                    },
                    '& .MuiInputLabel-root': { color: 'var(--form-textfield-border-label)' },
                    '& .MuiOutlinedInput-input': { color: 'var(--form-textfield-border-outline)' },
                  }}
                />
              </FormControl>
  )
}

export default InputField
