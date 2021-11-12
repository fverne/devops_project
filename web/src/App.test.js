import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {render, fireEvent, screen} from '@testing-library/react'

// Checks if navigation works, by switching page from Home to something else
test('Home button Checker', async () => {
  render(<BrowserRouter>
        <App />
      </BrowserRouter>)

  // Wait for page to update with query text
  const items1 = await screen.findAllByText(/Home/)
  expect(items1).toHaveLength(2)

    //  Skal måske trykke på ikonet oppe i venstre hjørne først?
    // fireevent.click(screen.get)

  fireEvent.click(screen.getByText('Courses'))

  // Wait for page to update with query text
  const items2 = await screen.findAllByText(/Home/)
  expect(items2).toHaveLength(1)
})


test('Silly test',()=>{
  expect(2+2).toBe(4);
})
