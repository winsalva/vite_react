import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

import {
  getContact,
  updateContact,
} from "../contacts";

export async function loader({ params }) {
    const contact = await getContact(params.contactID);
    return { contact };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactID, updates);
  return redirect(`/contacts/${params.contactID}`);
}

export default function editContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
	<input placeholder="First" aria-label="First name" type="text" name="first" defaultValue={contact.first}/>
	<input placeholder="Last" aria-label="Last name" type="text" name="last" defaultValue={contact.last}/>
      </p>
      <label>
        <span>Twitter</span>
	<input type="text" name="twitter" placeholder="@jack" defaultValue={contact.twitter}/>
      </label>
      <label>
        <span>Avatar Url</span>
	<input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => {
	  navigate(-1);
	}}>Cancel</button>
      </p>
    </Form>
  );
}