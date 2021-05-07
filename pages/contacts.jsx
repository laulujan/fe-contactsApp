
import SearchBar from "../components/searchBar/SearchBar";
import ContactCard from "../components/contactCard/ContactCard";
import Modal from "../components/Modal";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const contacts = () => {

  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [currentContact, setCurrentContact] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(1);
  const [totalPages, setTotalPages] = useState()
  let currentPage = 1;

  const [contactsList, setContactsList] = useState([]);
  const [contactsListPage, setContactsListPage] = useState([]);

  const inflateContactList = (result) => {
    setContactsList(result);

    paginate(result, 1)
  };

  const paginate = (result, currentPage) => {
    let rowsPerPage = 3
    let totalPages = Math.ceil(result.length / rowsPerPage)

    let max = currentPage * rowsPerPage
    let min = max-rowsPerPage
    

    let resultClone =  [...result]
    setContactsListPage(resultClone.splice(min, max));
    setCurrentPageState(currentPage);
    setTotalPages(totalPages)
  }

  const loadContacts = async () => {
    let inflate = inflateContactList;
    await axios({
      method: "get",
      url: "https://bt-contacts-app.herokuapp.com/api/contacts",
    }).then((e) => {
      if (e.status == 200) {
        inflate(e.data);
      }
    });
  };
  useEffect(async () => {
    // Update the document title using the browser API
    loadContacts();
  }, []);

  const onClick = () => {
    router.push("contacts/add");
  };

  const deleteContact = (contact) => {
    setShowModal(true);
    setCurrentContact(contact);
  };

  const confirmDeleteContact = (contact) => {
    axios({
      method: "delete",
      url: "https://bt-contacts-app.herokuapp.com/api/contacts/" + contact.id,
    }).then((e) => {
      setShowModal(false);
      loadContacts();
    });
  };
  const editAction = (contact) => {
    setCurrentContact(contact);
    router.push({ pathname: "/contacts/edit", query: {id: contact.id} });
  };

  const searchContact = async (name) => {
    let inflate = inflateContactList;
    await axios({
      method: "get",
      url: "https://bt-contacts-app.herokuapp.com/api/contacts/name/"+ name,
    }).then((e) => {
      if (e.status == 200) {
        inflate(e.data);
      }
    });
  }

  const nextPage = () => {
    paginate(contactsList, currentPageState+1)
  }

  const prevPage = () => {
    paginate(contactsList, currentPageState-1)
  }

  const btnClass =
  "px-6 py-3 my-2 mx-2 text- text-white transition-all duration-150 ease-linear rounded-full shadow outline-none bg-red-400 hover:bg-red-500 hover:shadow-lg focus:outline-none "

  return (
    <div className=" container mx-auto max-w-2xl">
      <h1 className="text-4xl m-8">My Contacts List</h1>
      <div className="container w-xl">
        <div className="flex mx-auto max-w-xl justify-between">
          <button className={btnClass} onClick={onClick}>
            Add
          </button>
          <SearchBar searchContact={searchContact} loadContacts={loadContacts}/>
        </div>
        <div className="container">
          {contactsListPage.map((contact) => {
            return (
              <ContactCard
                contact={contact}
                deleteContact={deleteContact}
                editAction={editAction}
              />
            );
          })}
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          currentContact={currentContact}
          confirmDeleteContact={confirmDeleteContact}
        />
      </div>
      <div>
        { currentPageState > 1 && (
          <button onClick={() => prevPage()}>prev</button>
        )}
        <p>Page {currentPageState} of {totalPages}</p>
        { currentPageState < totalPages && (
          <button onClick={() => nextPage()}>next</button>
        )}
        
      </div>
    </div>
  );
};

export default contacts;
