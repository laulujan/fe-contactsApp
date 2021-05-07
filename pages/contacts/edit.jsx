import { useRouter } from 'next/router'
import EditForm from '../../components/form/EditForm'
import { useEffect, useState } from 'react'
import axios from "axios";


const contactsEdit = () => {

  const [currentContact, setCurrentContact] = useState([]);

  const inflateContact = (result) => {
    setCurrentContact(result);
  };

  const loadContact = async () => {
    let inflate = inflateContact;
    await axios({
      method: "get",
      url: "https://bt-contacts-app.herokuapp.com/api/contacts/" + router.query.id,
    }).then((e) => {
      if (e.status == 200) {
        inflate(e.data);
      }
    });
  };

  useEffect(async () => {
    // Update the document title using the browser API
    loadContact();
  }, []);

  const router = useRouter()

  const returnHome = () => {
    router.push('/contacts')
    
  }
  
    return (
      <>
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl m-8">
          Edit Contact
        </h1>
      </div>
      <div>
      <EditForm returnHome = {returnHome} currentContact={currentContact}/>
    </div>
      </>
    
  );
};

export default contactsEdit;
