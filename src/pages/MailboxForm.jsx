import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router';

function MailboxForm() {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(element) {
    element.preventDefault();

    const newMailbox = {
      boxholder,
      boxSize,
    };

    await axios.post(import.meta.env.VITE_API_LINK, newMailbox);
    navigate("/mailboxes");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Mailbox</h2>

      <label>Boxholder Name:</label>
      <input
        type="text"
        value={boxholder}
        onChange={(element) => setBoxholder(element.target.value)}
        required
      />

      <label>Box Size:</label>
      <select value={boxSize} onChange={(element) => setBoxSize(element.target.value)}>
        <option value="">Select size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Create Mailbox</button>
    </form>
  );
}

export default MailboxForm;
