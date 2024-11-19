import { Route, Routes } from 'react-router-dom';
import Dashboard from './controllers/dashboard/dashboard.js';
import PostUser from './controllers/postUser/postUser.js';
import UpdateUser from './controllers/updateUser/updateUser.js';
import NoMatch from "./controllers/nomatch/noMatch.js";
import Header from "./controllers/header/header.js";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/user" element={<PostUser></PostUser>}></Route>
        <Route path="/user/:id" element={<UpdateUser></UpdateUser>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    
    </>
  );
}

export default App;
