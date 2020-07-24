import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth'

//styles
import {StyledButton, StyledAdd, StyledForm, StyledAddTitle} from './Styled'

const AddColorForm = () => {
    const initialFormValues = {
        name: '',
        hex: '#'
    }

    const [formValues, setValues] = useState(initialFormValues);

    const handleChange = e => {

    }

    const addColor = e => {
        e.preventDefault();
    }

    return(
        <StyledAdd>
            <StyledAddTitle>Add A Color</StyledAddTitle>
            <StyledForm onSubmit={addColor}>
                <label htmlFor="name">
                    color name: &nbsp;
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="hex">
                    hex code:
                    <input 
                        type="text"
                        id="hex"
                        name="hex"
                        value={formValues.hex}
                        onChange={handleChange}
                    />
                </label>
                <StyledButton>Add Color</StyledButton>
             </StyledForm>
        </StyledAdd>
    )
}

export default AddColorForm;