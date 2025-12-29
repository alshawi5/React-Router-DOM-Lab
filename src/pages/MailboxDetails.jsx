import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';

function MailboxDetails() {
  const { mailboxId } = useParams();
  const [mailbox, setMailbox] = useState(null);

  async function getMailbox() {
    const response = await axios.get(`${import.meta.env.VITE_API_LINK}/${mailboxId}`
    );
    setMailbox(response.data);
  }

  useEffect(() => {
    getMailbox();
  }, []);

  if (!mailbox) return <p>Loading...</p>;

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Boxholder:</strong> {mailbox.boxholder}</p>
      <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;
