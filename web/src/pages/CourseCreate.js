

import * as React from 'react';

import CourseStore from "./store/CourseStore";
import {Grid, InputLabel, MenuItem, Select, TextField, makeStyles, FormControl} from '@material-ui/core';
import Button from "@mui/material/Button";
import {useState} from "react";


const courseStore = new CourseStore();

const useStyles = makeStyles(theme => ({
      formControl : {
          minWidth: 100
      }
    }
));

export default function CourseCreate() {
    const classes = useStyles();
    const [day, setDay] = useState("");
    const handleChangeDay = e => setDay(e.target.value)

    const [time, setTime] = useState("");
    const handleChangeTime = e => setTime(e.target.value)

    const [courseNumber, setCourseNumber] = useState("");
    const handleChangeCourseNumber = e => setCourseNumber(e.target.value)

    const [courseName, setCourseName] = useState("");
    const handleChangeCourseName = e => setCourseName(e.target.value)

    const handleSubmit =(e) => {e.preventDefault()

    }

    let courseTitle;
    return (
        <div className="CourseCreate">
            <form>
            <FormControl className = {classes.formControl} >
                <Grid container padding={2} spacing={2}>
                    <Grid item xs={12} sm={4}>

                        <TextField id="courseNumber" label="Course Number" variant="outlined" onChange={(e) => setCourseNumber(e.target.value)}/>

                        <TextField id="courseTitle" label="Course title" variant="outlined" onChange={(e) => setCourseName(e.target.value)}/>/>
                    </Grid>

                    <Grid item xs={12} sm={1}>


                        <FormControl variant="filled" sx={{ m: 100, minWidth: 120, width: 300 }}>
                            <InputLabel id="day-select-label">Day</InputLabel>
                            <Select onChange={handleChangeDay}

                                labelId="day-select-label"
                                id="day-select"
                                value={day}
                                label="Dag"

                            >
                                <MenuItem value={'Monday'}>Monday</MenuItem>
                                <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                                <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                                <MenuItem value={'Thursday'}>Thursday</MenuItem>
                                <MenuItem value={'Friday'}>Friday</MenuItem>
                            </Select>
                        </FormControl>





                <FormControl variant="filled" sx={{ m: 100, minWidth: 120 }}>
                    <InputLabel id="time-select-label">Time</InputLabel>
                        <Select
                            onChange={handleChangeTime}
                            labelId="time-select-label"
                            id="time-select"
                            value={time}
                            label="Tidspunkt"

                        >
                            <MenuItem value={'8-12'}>8-12</MenuItem>
                            <MenuItem value={'13-17'}>13-17</MenuItem>
                            <MenuItem value={'18-22'}>18-22</MenuItem>
                        </Select>
                    </FormControl>




                    </Grid>
                    <Grid item xs={10} sm={10}>
                    <Button variant="contained" >Submit</Button>

                        </Grid>
                </Grid>
            </FormControl>
            </form>
        </div>

    );
}