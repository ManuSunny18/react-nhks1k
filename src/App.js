import React, { Fragment, useEffect, useState } from 'react';

function useForm() {
  //const [formData, setFormData] = useState({});
  let formData = {};
  return {
    register(name) {
      return {
        name,
        onChange: (e) => {
          const val = e.target.value;
          formData = { ...formData, [name]: val };
          return val;
        },
      };
    },
    handleSubmit(e) {
      return (event) => {
        event.preventDefault();
        return e(formData);
      };
    },
    getFormData() {
      return formData;
    },
  };
}

const DisplayData = ({ formData }) => {
  console.log(formData, 'formData');
  return <h3>{JSON.stringify(formData)}</h3>;
};

export default function App() {
  const { register, handleSubmit, getFormData } = useForm();
  //const [formState, setFormState] = useState({});
  const onSubmit = (data) => {
    console.log(data, 'data');
    //setFormState(data);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <input type="text" placeholder="Name" {...register('name')} />
        </div>
        <div className="form-field">
          <input type="email" placeholder="Email" {...register('email')} />
        </div>
        <div className="form-field">
          <select {...register('gender')}>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="form-field">
          <input type="submit" />
        </div>
      </form>
      <DisplayData formData={getFormData()} />
    </Fragment>
  );
}
