import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import { listCountry } from './../../utils/country';


function AddressForm(props) {

    const [province, setProvince] = useState('');

    const [district, setDistrict] = useState('');

    const [ward, setWard] = useState('');

    const [listDistrict, setListDistrict] = useState([]);

    const [listWard, setListWard] = useState([]);




    const handleChange = (event) => {
        setProvince(event.target.value);
    };

    const handleChangeDistrict = (event) => {
        setDistrict(event.target.value);
    };

    const handleChangeWard = (event) => {
        setWard(event.target.value);
    }

    const getItems = (arr, id) => {
        return arr.find(x => x.Id === id);
    }

    useEffect(() => {
        var newListDistrict = getItems(listCountry, province);
        if (newListDistrict) {
            setListDistrict(newListDistrict.Districts);
        }
    }, [province])

    useEffect(() => {
        if (district) {
            var newListWard = getItems(listDistrict, district);
            if (newListWard) {
                setListWard(newListWard.Wards);
            }
        }
    }, [district])

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
        </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        select
                        value={province}
                        onChange={handleChange}
                    >
                        {listCountry.map((province, index) => (
                            <MenuItem key={province.Id} value={province.Id}>
                                {province.Name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="district"
                        name="district"
                        label="district"
                        fullWidth
                        select
                        value={district}
                        onChange={handleChangeDistrict}
                    >
                        {listDistrict.map((district, index) => (
                            <MenuItem key={district.Id} value={district.Id}>
                                {district.Name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="ward"
                        name="ward"
                        label="Ward"
                        fullWidth
                        select
                        value={ward}
                        onChange={handleChangeWard}
                    >
                        {listWard.map((ward, index) => (
                            <MenuItem key={ward.Id} value={ward.Id}>
                                {ward.Name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AddressForm;