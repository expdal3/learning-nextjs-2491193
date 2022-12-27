import Layout from "../../components/Layout"; //<- load Layout component from component/layout
import {useRouter} from "next/router"
import contacts from "../api/contacts"

export default function Contact(){
    const router = useRouter()
    const { contactId } = router.query //<- allow user to navigate to the contactID param
    debugger
    const contact = contacts.find(contact => contact.id === contactId);
    const [first, last] = contact?.name.split(" ")

    return (
        // <h1>Contact</h1> 
    <Layout>
        <a href="#" onClick={() => router.back()}>Back</a>
        <h1>Contact of {first} {last}</h1>
        <h2>Country: {contact.country}</h2>
        <p>phone: {contact.phone}</p>
    </Layout>    
    )
}

