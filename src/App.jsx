import { Routes, Route } from 'react-router';
import NavBar from "./components/NavBar";
import MailboxList from "./pages/MailboxList";
import MailboxForm from "./pages/MailboxForm";
import MailboxDetails from "./pages/MailboxDetails";


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}/>
      </Routes>
    </>
  );
}

export default App;
