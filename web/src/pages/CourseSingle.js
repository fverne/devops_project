import {useParams} from "react-router-dom";
import {useObserver} from "mobx-react-lite";


export default function CourseSingle() {
    const {course} = useParams();
    console.log({course})

    return useObserver( () =>
        <div>
            <h1>Now showing: {course}</h1>
        </div>
    );
}