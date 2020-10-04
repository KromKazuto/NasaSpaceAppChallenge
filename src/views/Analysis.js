import React, {useEffect, useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { red } from '@material-ui/core/colors'
import BarChart from './BarChart'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Inpe from '../controllers/Inpe'
import '../App.css'

export default function CardView() {
    const [stateList, setStateList] = useState([]);
    const [state, setState] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [defaultValue, setDefaultValue] = useState(0);

    useEffect(() => {
        const loadAll = async () => {
            // Pegando estados
            let states = await Inpe.getStates();
            setStateList(states);
            setDefaultValue(states[0].estado_id);
            let list = await Inpe.getCities(states[0].estado_id);
            setCityList(list);
        }
        loadAll();
    },[]);

    function handleSelectChange(e, obj) {
        setState(obj.props.value);
        setDefaultValue(obj.props.value);

        const loadAll = async () => {
            let list = await Inpe.getCities(obj.props.value);
            setCityList(list);
        }
        loadAll();
    }

    return (
        stateList && stateList[0] ? 
        <div className="teste">
            <InputLabel id="label">Estado</InputLabel>
            <Select labelId="label" id="select" value={`${defaultValue}`} onChange={handleSelectChange}>
            {stateList.map((item, key) => (
                <MenuItem key={key} value={`${item.estado_id}`}>{item.estado_name}</MenuItem>
            ))}
            </Select>
            <div className="grafico">
                <BarChart cities={cityList}/>
            </div>
        </div>
        :
        <div/>
    );
}
