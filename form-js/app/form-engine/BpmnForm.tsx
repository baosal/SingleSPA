import React, { useEffect, useRef } from "react";
import { Form } from "@bpmn-io/form-js";
import RenderExtension from "../extension/render";
import schemaJson from "./form.json";
import "./style.css";

export default function BpmnForm({
  schema = schemaJson, // can be overridden via props
  data = {}, // initial data
  onSubmit = (event) => {}, // optional callback when form is submitted
}) {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initializeForm = async () => {
      // Initialize Form
      const form = new Form({
        container: containerRef.current,
        additionalModules: [RenderExtension],
      });

      formRef.current = form;

      form.on("submit", (event: any) => {
        onSubmit(event);
      });

      try {
        await form.importSchema(schema, data);
      } catch (err) {
        console.error("failed to import form", err);
      }
    };

    initializeForm();
  }, []); // init once

  return (
    <div className="form">
      {/* Container that the Playground will mount into */}
      <div ref={containerRef} id="form" style={{ flex: 1, minHeight: 400 }} />
    </div>
  );
}
