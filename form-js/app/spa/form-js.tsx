import React from "react";
import BpmnForm from "../form-engine/BpmnForm";
import RootComponent from "./static-component";
import "@bpmn-io/form-js/dist/assets/form-js.css";
import "@bpmn-io/form-js/dist/assets/form-js-editor.css";
import "@bpmn-io/form-js/dist/assets/form-js-playground.css";

import formSchema from "../data/form.json";
import variables from "../data/variables.json";
export default function Form() {
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
  return (
    <>
      <RootComponent />
      <BpmnForm schema={formSchema} data={data} onSubmit={submitForm} />;
    </>
  );
  // return <BpmnForm name="root" />;
}
