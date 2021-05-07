import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";



const schema = yup.object().shape({
  name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required(),
  lastname: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required(),
  company: yup.string(),
  phone: yup.number().positive().integer().min(10),
  email: yup.string().email().required(),
});

export default function EditForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios({
      method: "put",
      url: "https://bt-contacts-app.herokuapp.com/api/contacts/" + props.currentContact[0].id,
      data: data,
    }).then((e) => {
      if (e.status == 200) {
        props.returnHome();
      }
    });
  };

  const inputClass =
    "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200";
  const btnClass =
    "w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-full shadow outline-none bg-red-400 hover:bg-red-500 hover:shadow-lg focus:outline-none";

  return (
    <div>
      {props.currentContact.length > 0 && (
        <div className="mx-auto max-w-md px-6 py-6 bg-white border-0 shadow-lg sm:rounded-3xl">
          <div className="flex justify-end">
            <button className="text-lg" onClick={() => props.returnHome()}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              type="text"
              placeholder=""
              className={inputClass}
              {...register("name")}
              defaultValue={props.currentContact[0].name}
            />
           <p>{errors.name?.message}</p>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder=""
              className={inputClass}
              defaultValue={props.currentContact[0].lastname}
              {...register("lastname")}
            />
            <p>{errors.lastname?.message}</p>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              placeholder=""
              className={inputClass}
              value={props.currentContact[0].company}
              {...register("company")}
            />
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder=""
              className={inputClass}
              defaultValue={props.currentContact[0].phone}
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder=""
              className={inputClass}
              defaultValue={props.currentContact[0].email}
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <input type="submit" value="Save" className={btnClass} />
          </form>
        </div>
      )}
    </div>
  );
}
