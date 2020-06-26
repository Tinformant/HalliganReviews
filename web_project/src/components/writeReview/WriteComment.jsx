import React from "react";
import "./QuerySheet.css";
import { Form } from "react-bootstrap";

function WriteComment() {
    return <Form>
        <div className="div-form">
        <Form.Label className="form-label">Do you have any comments?</Form.Label>
        <Form.Control as="textarea" className="form-field" rows="5"></Form.Control>
        </div>
    </Form>
}

export default WriteComment;