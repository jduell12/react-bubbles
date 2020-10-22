import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth'

//styles
import {StyledButton, StyledAdd, StyledForm, StyledAddTitle} from './Styled'

const AddColorForm = props => {
    const{updateColors} = props;

    const initialFormValues = {
        color: '',
        code: {hex: '#'}
    }

    const [formValues, setValues] = useState(initialFormValues);

    const handleChange = e => {
        if(e.target.name === 'color'){
            setValues({...formValues, [e.target.name]: e.target.value})
        } else {
           setValues({...formValues, [e.target.name]:{hex: e.target.value}})
        }
        
    }

    const addColor = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('api/colors', formValues)
            .then(res => {
                updateColors(res.data)
            })
            .catch(err => console.log(err))
            .finally(
                setValues(initialFormValues)
            )
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
                        name="color"
                        value={formValues.color}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="hex">
                    hex code:
                    <input 
                        type="text"
                        id="hex"
                        name="code"
                        value={formValues.code.hex}
                        onChange={handleChange}
                    />
                </label>
                <StyledButton>Add Color</StyledButton>
             </StyledForm>
        </StyledAdd>
    //     <div>
    //     <legend>Add A Color</legend>
    //     <form onSubmit={addColor}>
    //         <label htmlFor="name">
    //             color name: &nbsp;
    //             <input 
    //                 type="text"
    //                 id="name"
    //                 name="color"
    //                 value={formValues.color}
    //                 onChange={handleChange}
    //             />
    //         </label>
    //         <label htmlFor="hex">
    //             hex code:
    //             <input 
    //                 type="text"
    //                 id="hex"
    //                 name="code"
    //                 value={formValues.code.hex}
    //                 onChange={handleChange}
    //             />
    //         </label>
    //         <button>Add Color</button>
    //      </form>
    // </div>
    )
}

export default AddColorForm;