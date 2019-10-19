import { GetValues__Response_DTD } from './values_dtd';
import axios from 'axios';

export function getValues() : Promise<GetValues__Response_DTD>  {
    return new Promise((resolve, reject) => {
        axios
            .get<GetValues__Response_DTD>('http://localhost:5000/values')
            .then(res => resolve(res.data))
            .catch(error  => reject(error))
    });
}
