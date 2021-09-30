import {useObserver} from "mobx-react-lite";
import {Button, Grid, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import {useCallback, useState} from "react";
import {useHistory} from 'react-router-dom';
import CourseStore from "../store/CourseStore";



const courseStore = new CourseStore();

export default function Courses() {
    return useObserver(() =>
        <Box padding={2}>
            <h1> Course Page</h1>
            <Grid container spacing={2} padding={2}>
                {courseStore.courses.map((course)=>
                    <Grid item
                          xs={12}
                          sm={4}
                    >
                        <CoursePaper course={course}/>
                    </Grid>
                )}
            </Grid>

            <Button sx={{px: 2}} onClick={() => courseStore.courses.push({name: "Test Course", maxcap: 60, id: Math.ceil(Math.max(Math.random()*99999, 10000)), weekday: "Random Weekday", time: "08:00 - 22:00"})}> Add Test Course</Button>
        </Box>
    )
}

function CoursePaper({course}) {
    const [raiseLevel, setRaiseLevel] = useState(1);

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(`/courses/${course.id}`), [history, course.id]);

    return (
        <Paper
            sx={{py: 2, px: 2, cursor: "pointer"}}
            elevation={raiseLevel}
            onMouseEnter={() => setRaiseLevel(4)}
            onMouseLeave={() => setRaiseLevel(1)}
            onClick={() => {handleOnClick()}}
        >
            <h2>{course.name} ({course.id || "ERROR: NO COURSE ID"})</h2>
            <p>{course.weekday + ", " + course.time}</p>
        </Paper>
    )
}