import {useParams} from "react-router-dom";
import CourseStore from "../store/CourseStore";
import {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const courseStore = new CourseStore();

export default function CourseSingle() {
    const [courseData, setCourseData] = useState({id : "loading course data"});

    const param = useParams()
    const courseNumber = param.course;

    let jsonData = courseData;

    useEffect(() => {
        courseStore.fetchCourse(courseNumber).then(
            (data) => {
                jsonData = data;
                setCourseData(jsonData);
            }
        )
    }, [])


    console.log(jsonData)

    return (
        <div>
            <h1>
                <Grid spacing={1}
                      > <Typography variant="h3" component="div"> {courseData.name} </Typography>  </Grid>
              <Grid container
                      spacing={2}
                      padding={2}
                      direction="column"
                      justifyContent="Flex-start"
                      alignItems="Flex-start"
                >

                    <Grid item>  <Typography variant="h5" > Course number: {courseData.id} </Typography> </Grid>
                    <Grid item> <Typography variant="body2" > {courseData.weekday} at {courseData.time}</Typography> </Grid>

                    <Grid item> <Typography variant="body2" >The maximum number of participants is {courseData.maxcap}</Typography></Grid>
                    <Grid item> <Typography variant="body2" >Ects: 5</Typography></Grid>
                    <Grid item> <Typography variant="body2" >Teacher: H.C Andersen</Typography></Grid>

                </Grid>
            </h1>
        </div>
    );
}