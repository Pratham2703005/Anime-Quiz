import React, { useState } from 'react'
import './FormFill.css'
import { useDispatch } from 'react-redux'
import {nameFn , ageFn } from '../redux/Features/UserSlice'
import InputField from './Form/input-field'
import SelectedSub from './Form/select-sub'
import SubmitForm from './Form/submitForm-btn'


interface FormFillProps {
  handleFormSubmit: (subjects: string) => void
}


export default function FormFill({ handleFormSubmit }: FormFillProps) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [selectedSubjects, setSelectedSubjects] = useState<string>()


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(nameFn(name))
    dispatch(ageFn(age))
    handleFormSubmit(selectedSubjects)
  }
  return (
    <div className="formclass min-h-screen p-6 mt-[-4rem] flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        
        <form onSubmit={handleSubmit} className="relative bg-form-bg rounded-lg backdrop-blur-sm border border-form-border p-8 shadow-2xl space-y-6 !font-jersey">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-form-style-shade rounded-full blur-sm"></div>
          
          <h2 className="text-4xl font-bold text-form-head text-center">
            Registration Form
          </h2>

          <div className="space-y-6 font-jersey text-2xl">
            
            <InputField id={"Name"} fn={setName} value={name} ></InputField>        
            <InputField id={"Age"} fn={setAge} value={age} ></InputField>
            
            <SelectedSub setSelectedSubjects={setSelectedSubjects} />
            
            <SubmitForm />
            
          </div>
        </form>
      </div>
    </div>
  )
}