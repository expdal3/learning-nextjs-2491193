import Link from "next/link"; //allow navigate from page to another
import Layout from "../../components/Layout"
import contacts from "../api/contacts"; //<--load the contacts API (array of JSON object)

export default function Contacts() {
  return (
    <Layout>
    <h1>Contact</h1>
    <ul>
      {contacts.map((contact) => {
        return (
          
            
            <li>
              <Link href={`contacts/${contact.id}`}>
                <a>{contact.name}</a>
              </Link>
            </li>
        );
      })}
    </ul>
    </Layout>
  );
}
