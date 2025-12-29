import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router';

function MailboxList() {
  const [mailboxes, setMailboxes] = useState([]);

  async function getMailboxes() {
    const response = await axios.get(import.meta.env.VITE_API_LINK);
    setMailboxes(response.data);
  }

  useEffect(() => {
    getMailboxes();
  }, []);

  return (
    <div>
      <h2>All Mailboxes</h2>

      {mailboxes.map((box) => (
        <div key={box._id}>
          <p>Boxholder: {box.boxholder}</p>
          <Link to={`/mailboxes/${box._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MailboxList;
