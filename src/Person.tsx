import React from 'react';
import { FromPersonProps, FromPersonState } from './PersonDTD'

 class Person extends React.Component<FromPersonProps, FromPersonState > {
    render() {
        const { name, age } = this.props;
        return(
            <div>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
            </div>
        );
    }
}

export default Person;
