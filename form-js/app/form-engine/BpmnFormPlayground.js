
import React, { useEffect, useRef } from 'react';
import { FormPlayground } from '@bpmn-io/form-js';

import '@bpmn-io/form-js/dist/assets/form-js.css';
import '@bpmn-io/form-js/dist/assets/form-js-editor.css';
import '@bpmn-io/form-js/dist/assets/form-js-playground.css';

import schemaJson from './empty.json';

import RenderExtension from '../extension/render';
import PropertiesPanelExtension from '../extension/propertiesPanel';

export function BpmnFormPlayground({
  schema = schemaJson,     // can be overridden via props
  data = {},               // initial data
  onChange,                // optional callback when schema or data changes
  additionalModules = [ RenderExtension ],           // renderer extensions
  editorAdditionalModules = [ PropertiesPanelExtension ] // editor extensions
}) {
  const containerRef = useRef(null);
  const playgroundRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize FormPlayground
    const playground = new FormPlayground({
      container: containerRef.current,
      schema,
      data,
      additionalModules,
      editorAdditionalModules
    });

    playgroundRef.current = playground;
  }, []); // init once

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Container that the Playground will mount into */}
      <div ref={containerRef} id="form" style={{ flex: 1, minHeight: 400 }} />
    </div>
  );
}
