import { Button } from '@mui/material'
import React from 'react'

const SubmitForm = () => {
  return (
    <Button
              type="submit"
              variant="contained"
              fullWidth
              className="formBtn-gradient hover:from-form-button-from-hover hover:to-form-button-to-hover transition-all duration-300 py-3 rounded-lg text-white font-medium shadow-lg formBtn-shadow"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Submit
            </Button>
  )
}

export default SubmitForm
