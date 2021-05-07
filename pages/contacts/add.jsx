import { useRouter } from "next/router";
import Form from "../../components/form/Form";
const contactsAdd = () => {
  const router = useRouter();

  const returnHome = () => {
    router.push("/contacts");
  };
  return (
    <div>
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl m-8">Add Contact</h1>
      </div>
      <div>
        <Form returnHome={returnHome} />
      </div>
    </div>
  );
};

export default contactsAdd;
