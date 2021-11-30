import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "@testing-library/jest-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import React from "react";
import {render, cleanup, waitForElement, fireEvent, screen} from "@testing-library/react";
//import "jest-dom/extend-expect";
//import axiosMock from "axios";
import CoursePaper from "./pages/Courses";


afterEach(cleanup);

//Passer (30/11-21 02:46)
//Tror at den fetcher data når den skal vise courses, men da den
//ikke kan hente courses lige nu, så står der bare "loading courses".
//Når den kan fetche rigtig data, kan vi teste på den i stedet for forhåbentlig
test("fetches and display data", async () => {
    const url = "/courses";
    const { getByTestId } = render(<CoursePaper url = {url}/>);

    expect(getByTestId("loading")).toHaveTextContent("Loading courses...");
})



/*
// Checks if navigation works, by switching page from Home to something else
test('Home button Checker', async () => {
  render(<BrowserRouter>
        <App />
      </BrowserRouter>)

  // Wait for page to update with query text
  const items1 = await screen.findAllByText('Login')
  expect(items1).toHaveLength(1)

    //  Skal måske trykke på ikonet oppe i venstre hjørne først?
    // fireevent.click(screen.get)

  //fireEvent.click(screen.getByText('Courses'))

  // Wait for page to update with query text
  //const items2 = await screen.findAllByText(/Home/)
  //expect(items2).toHaveLength(1)
})

 */

/*
test('Silly test',()=>{
  expect(2+2).toBe(4);
})

 */

//Den her test pass'er.
test("renders the correct content of home page", () =>{
    const root = document.createElement("div");
    ReactDOM.render(<Home />, root);

    expect(root.querySelector("h1").textContent).toBe("Home");
})

//Pass'er vist også???
test("renders the button for adding courses", () =>{
    const root = document.createElement("div");
    ReactDOM.render(<Courses />, root);

    expect(root.querySelector("Button").textContent).toBe(" Add Test Course");
})

/*
test("loads site", async() =>{
    render(<Home />)

    fireEvent.click(screen.getByTestId("menutest"))

    fireEvent.click(screen.getByTestId("hometest"))

    const items = await screen.findAllByText("Home")
    expect(items).toHaveLength(1)

})

 */





