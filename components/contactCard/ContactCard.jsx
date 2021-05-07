const ContactCard = (props) => {

  return (
    <div className="mx-auto max-w-xl px-6 py-2 bg-white border-0 shadow-lg sm:rounded-3xl m-2">
      <div>
        <h1>{props.contact.name + " " + props.contact.lastname}</h1>
        <p>{props.contact.company}</p>
      </div>
      <div>
        <div className="flex space-x-2">
          <i className="fas fa-phone-alt my-1"></i>
          <p className="">{props.contact.phone}</p>
        </div>
        <div className="flex space-x-2">
          <i className="fas fa-envelope my-1"></i>
          <p className="flex-grow ">{props.contact.email}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={() => props.deleteContact(props.contact)}>
          <i className="fas fa-trash"></i>
        </button>
        <button onClick={() => props.editAction(props.contact)}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
