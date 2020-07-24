//util function for jest testing with localStorage
import {axiosWithAuth} from './axiosWithAuth'

export const getLogin = () => {
    return axiosWithAuth()
        .post('api/login', {username: 'Lambda School', password: 'i<3Lambd4'})
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            history.push('/bubblePage');
        })
        .catch(err => console.log(err))
}