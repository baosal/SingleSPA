import React from "react";
import { useParams } from "react-router-dom";
import BpmnForm from "../form-engine/BpmnForm";

import form from "../data/form.json";
import variables from "../data/variables.json";

export function Form() {
  const { formId } = useParams();
  const formSchema = JSON.parse(form);
  const data = {};
  variables.forEach((v) => {
    let value = v.value;
    try {
      value = JSON.parse(value);
    } catch {
      // If not JSON, keep as is (e.g., numbers)
    }
    data[v.name] = value;
  });

  const submitForm = (event) => {
    console.log("Form submitted with data:", event.data);
    console.log("Form submission errors:", event.errors);
  };

  //   return <BpmnForm schema={formSchema} data={data} onSubmit={submitForm} />;
}
