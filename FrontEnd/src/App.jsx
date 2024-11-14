import { useState } from 'react';
import './App.css';
import AddForm from './Pages/AddForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Pages/List';
import ViewEmployee from './Pages/View';
import Landing from './Pages/Landing';
import Layout from './Components/LayOut';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap routes that need the layout inside a Layout Route */}
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/addForm" element={<AddForm />} />
          <Route path="/view/:id" element={<ViewEmployee />} />
          <Route path="/list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
