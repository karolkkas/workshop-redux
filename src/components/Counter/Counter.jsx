import React, {useState} from 'react';
import { connect } from "react-redux";
import * as actions from './../../store/entities/count/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Counter ({increase, decrease, reset, count, setCount}) {
    const [countValue, setCountValue] = useState('');
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="contained" size="small" color="primary" onClick={increase}>Increase</Button>
            <h2>{count}</h2>
            <Button  variant="contained" size="small" color="secondary" onClick={decrease}>Decrease</Button>
            <Button variant="contained" size="small" onClick={reset}>Reset</Button>
            <TextField
                id="countValue"
                label="Set count"
                value={countValue}
                onChange={(e) => setCountValue(e.target.value)}
                onBlur={() => setCount(countValue)}
                margin="normal"
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps, actions)(Counter);